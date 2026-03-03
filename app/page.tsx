"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleStart = () => router.push("/page2");

  return (
    <main className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Tarteel Studio</h1>
        <p className="text-xl mb-6">صمم فيديوهات قرآنيـة باحترافية وذكاء</p>
        <p className="max-w-xl mx-auto mb-8">
          استديو متكامل لتحويل التلاوات الصوتية إلى مرئيات مذهلة.
          مزامنة تلقائية للآيات، خطوط عثمانية عالية الدقة، وتصدير فوري لمنصات التواصل.
        </p>
        <button
          onClick={handleStart}
          className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition"
        >
          ابدأ التصميم مجاناً
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">مميزات الاستوديو</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img src="/icons/sync.svg" alt="مزامنة ذكية" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">مزامنة ذكية</h3>
            <p className="text-gray-600">نظام يربط الصوت بالنص القرآني تلقائياً مع إمكانية التعديل اليدوي.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img src="/icons/customize.svg" alt="تخصيص كامل" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">تخصيص كامل</h3>
            <p className="text-gray-600">تحكم في الخطوط، الألوان، الخلفيات، والمؤثرات لتناسب هويتك البصرية.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img src="/icons/export.svg" alt="تصدير فوري" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">تصدير فوري</h3>
            <p className="text-gray-600">ريندر سريع يدعم دقة 4K ومعدل إطارات 60fps لنتائج سينمائية.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        © 2026 Tarteel Studio. جميع الحقوق محفوظة.
      </footer>
    </main>
  );
}
