import research from "../../../data/research.json";

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Research</h1>
      <div className="space-y-12">
        {research.map((item) => (
          <section key={item.id} className="flex flex-col sm:flex-row gap-6 border-b pb-10">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-48 h-36 object-cover rounded-lg flex-shrink-0"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold mb-1">{item.title}</h2>
              <p className="text-gray-500 italic mb-3">{item.subtitle}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
