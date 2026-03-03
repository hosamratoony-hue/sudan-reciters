"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => router.push("/page2");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-4 text-blue-600">Tarteel Studio</h1>
      <p className="text-xl mb-6 text-center">صمم فيديوهات قرآنيـة باحترافية وذكاء</p>
      <button
        onClick={handleStart}
        className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
      >
        ابدأ التصميم مجاناً
      </button>
    </main>
  );
}
