import news from "../../../data/news.json";

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">News</h1>
      <ul className="space-y-8">
        {sorted.map((item) => (
          <li key={item.id} className="border-b pb-6">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
              <span>{item.date}</span>
              <span className="px-2 py-0.5 bg-gray-100 rounded">{item.category}</span>
            </div>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            {item.image && (
              <img src={item.image} alt={item.title} className="my-3 rounded max-w-md" />
            )}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}