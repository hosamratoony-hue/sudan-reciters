"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4 text-blue-600 text-center">Tarteel Studio</h1>
      <p className="text-xl mb-6 text-center">صمم فيديوهات قرآنيـة باحترافية وذكاء</p>
      <button
        onClick={() => router.push("/page2")}
        className="px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        ابدأ التصميم مجاناً
      </button>
    </main>
  );
}
