import opportunities from "../../../data/opportunities.json";
import labInfo from "../../../data/lab.json";

export default function OpportunitiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Opportunities</h1>
      <p className="text-lg text-gray-700 mb-12 leading-relaxed">{opportunities.intro}</p>

      <div className="space-y-8">
        {opportunities.positions.map((pos) => (
          <div
            key={pos.id}
            className={`border rounded-lg p-6 ${pos.open ? "border-blue-200 bg-blue-50/30" : "border-gray-200 bg-gray-50 opacity-70"}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-0.5 text-xs font-semibold rounded bg-blue-100 text-blue-800">
                {pos.type}
              </span>
              {!pos.open && (
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-gray-200 text-gray-600">
                  현재 모집 마감
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold mb-2">{pos.title}</h2>
            <p className="text-gray-700 mb-4">{pos.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {pos.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <p className="text-gray-700 mb-2">{opportunities.contactNote}</p>
        <a
          href={`mailto:${labInfo.email}`}
          className="text-blue-600 hover:underline font-medium"
        >
          {labInfo.email}
        </a>
      </div>
    </div>
  );
}
