import publications from "../../../data/publications.json";

export default function PublicationsPage() {
  // 연도별 그룹화 + 최신순 정렬
  const byYear = publications.reduce((acc, p) => {
    if (!acc[p.year]) acc[p.year] = [];
    acc[p.year].push(p);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b - a);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Publications</h1>

      {years.map((year) => (
        <section key={year} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{year}</h2>
          <ul className="space-y-5">
            {byYear[year].map((p) => (
              <li key={p.id}>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  {p.authors.join(", ")}
                </p>
                <p className="text-sm italic text-gray-700 mb-2">{p.venue}</p>
                <div className="flex gap-3 text-sm">
                  {p.link && (
                    <a href={p.link} target="_blank" className="text-blue-600 hover:underline">
                      [Link]
                    </a>
                  )}
                  {p.pdf && (
                    <a href={p.pdf} target="_blank" className="text-blue-600 hover:underline">
                      [PDF]
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}