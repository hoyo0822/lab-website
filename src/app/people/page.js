import members from "../../../data/people.json";

const categoryLabels = {
  professor: "지도교수",
  phd: "박사과정",
  master: "석사과정",
  alumni: "졸업생",
};

export default function MembersPage() {
  // 카테고리별로 그룹화
  const grouped = members.reduce((acc, m) => {
    if (!acc[m.category]) acc[m.category] = [];
    acc[m.category].push(m);
    return acc;
  }, {});

  const order = ["professor", "phd", "master", "alumni"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Members</h1>

      {order.map((cat) => {
        const list = grouped[cat];
        if (!list) return null;
        return (
          <section key={cat} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
              {categoryLabels[cat]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((m) => (
                <div key={m.id} className="border rounded-lg p-5 hover:shadow-md transition">
                  {m.photo && (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-24 h-24 rounded-full object-cover mb-3"
                    />
                  )}
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{m.role}</p>
                  <p className="text-sm mb-2">{m.research}</p>
                  <a href={`mailto:${m.email}`} className="text-sm text-blue-600 hover:underline">
                    {m.email}
                  </a>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}