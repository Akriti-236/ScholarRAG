export default function DashboardCards() {
  const cards = [
    {
      title: "Uploaded Papers",
      value: "24",
    },
    {
      title: "Queries",
      value: "321",
    },
    {
      title: "Collections",
      value: "8",
    },
    {
      title: "Storage",
      value: "1.4 GB",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-slate-900 p-5 rounded-xl"
        >
          <p className="text-slate-400">
            {card.title}
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}