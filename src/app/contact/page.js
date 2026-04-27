import labInfo from "../../../data/lab.json";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10">Contact</h1>
      <div className="space-y-4 text-lg">
        <p><strong>주소:</strong> {labInfo.address}</p>
        <p><strong>이메일:</strong> <a href={`mailto:${labInfo.email}`} className="text-blue-600 hover:underline">{labInfo.email}</a></p>
        <p><strong>전화:</strong> {labInfo.phone}</p>
      </div>
      <div className="mt-10 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">대학원생 모집</h2>
        <p className="text-gray-700">관심 있는 학생은 이메일로 연락 주세요.</p>
      </div>
    </div>
  );
}