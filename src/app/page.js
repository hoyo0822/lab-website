import labInfo from "../../data/lab.json";
import news from "../../data/news.json";
import Link from "next/link";

export default function Home() {
  const recentNews = news.slice(0, 3); // 최근 3개만

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4">{labInfo.name}</h1>
        <p className="text-2xl text-gray-600 mb-6">{labInfo.tagline}</p>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          {labInfo.description}
        </p>
      </section>

      {/* 최근 뉴스 */}
      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-3xl font-bold">Recent News</h2>
          <Link href="/news" className="text-sm text-blue-600 hover:underline">
            전체 보기 →
          </Link>
        </div>
        <ul className="space-y-4">
          {recentNews.map((item) => (
            <li key={item.id} className="border-b pb-4">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-1">
                <span>{item.date}</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded">{item.category}</span>
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}