import json
import time
from pathlib import Path
from sentence_transformers import SentenceTransformer
from qdrant_client import QdrantClient
from qdrant_client.models import (Distance,VectorParams,
    PointStruct,
)
PAPERS_FILE   = Path("ingestion/papers.json")   
QDRANT_PATH   = "./qdrant_local"                # local folder — no server needed
COLLECTION    = "papers"
MODEL_NAME    = "all-mpnet-base-v2"            
BATCH_SIZE    = 64                              # how many papers to embed + upload at once
VECTOR_DIM    = 768



print(f"📄 Loading papers from {PAPERS_FILE} ...")
with open(PAPERS_FILE, "r", encoding="utf-8") as f:
    papers = json.load(f)

print(f"   Found {len(papers)} papers.\n")



print(f"🤖 Loading embedding model '{MODEL_NAME}' ...")
print("   (First run downloads ~420 MB — subsequent runs are instant)\n")
model = SentenceTransformer(MODEL_NAME)

print(f"🗄️  Opening local Qdrant storage at '{QDRANT_PATH}' ...")
client = QdrantClient(path=QDRANT_PATH) 

existing = [c.name for c in client.get_collections().collections]
if COLLECTION in existing:
    print(f"   Collection '{COLLECTION}' already exists — skipping creation.")
    print("   To re-ingest from scratch, delete it first:")
    print(f"   client.delete_collection('{COLLECTION}')\n")
else:
    client.create_collection(
        collection_name=COLLECTION,
        vectors_config=VectorParams(size=VECTOR_DIM, distance=Distance.COSINE),
    )
    print(f"   ✅ Created collection '{COLLECTION}' ({VECTOR_DIM}-dim, cosine)\n")

print(f"⚡ Embedding and uploading in batches of {BATCH_SIZE} ...\n")

total     = len(papers)
uploaded  = 0
skipped   = 0
start     = time.time()

for batch_start in range(0, total, BATCH_SIZE):
    batch = papers[batch_start : batch_start + BATCH_SIZE]
    texts = [
        (p.get("title", "") + ". " + p.get("summary", "")).strip(". ")
        if p.get("summary")
        else p.get("title", "")
        for p in batch
    ]
    
    valid_indices = [i for i, t in enumerate(texts) if t.strip()]
    if not valid_indices:
        skipped += len(batch)
        continue
        
    valid_batch = [batch[i] for i in valid_indices]
    valid_texts = [texts[i] for i in valid_indices]
    vectors = model.encode(valid_texts, show_progress_bar=False).tolist()
    points = [
        PointStruct(
            id=batch_start + valid_indices[j],
            vector=vectors[j],
            payload={
                "arxiv_id":  paper.get("id", ""),
                "title":     paper.get("title", ""),
                "authors":   paper.get("authors", []),
                "summary":   paper.get("summary", ""),
                "published": paper.get("published", ""),
                "pdf_url":   paper.get("pdf_url", ""),
                "category":  paper.get("category", ""),
                
                "citations": 0,
                "repo_url":  "",
                "repo_stars": 0,
            },
        )
        for j, paper in enumerate(valid_batch)
    ]
    client.upsert(collection_name=COLLECTION, points=points)

    uploaded += len(points)
    skipped  += len(batch) - len(valid_indices)

    elapsed = time.time() - start
    done    = batch_start + len(batch)
    pct     = done / total * 100
    print(f"   [{pct:5.1f}%]  {done}/{total} processed | {uploaded} uploaded | {elapsed:.1f}s elapsed")
elapsed = time.time() - start
print(f"\n✅ Done in {elapsed:.1f}s")
print(f"   Uploaded : {uploaded} papers")
print(f"   Skipped  : {skipped} (no text)")
print(f"\nVerify with test_search.py or:")
print(f"  curl http://localhost:6333/collections/{COLLECTION}")
