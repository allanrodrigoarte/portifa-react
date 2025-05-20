export default function TailwindTest() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-800 to-pink-600">
      <div className="bg-white rounded-xl shadow-2xl p-10 text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">🎉 Tailwind is working! 🎉</h1>
        <p className="text-lg text-gray-800 mb-4">If you see styles like gradient background, rounded corners, and colored text, Tailwind CSS is active! </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded transition">
          Test Button
        </button>
      </div>
    </div>
  );
}
