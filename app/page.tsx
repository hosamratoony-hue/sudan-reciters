"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    // ينقل المستخدم للصفحة الثانية
    router.push("/page2");
  };

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Tarteel Studio</h1>
      <p style={{ fontSize: "20px" }}>صمم فيديوهات قرآنيـة <br/> باحترافية وذكاء</p>
      <p style={{ maxWidth: "600px", fontSize: "16px", lineHeight: "1.5" }}>
        استديو متكامل لتحويل التلاوات الصوتية إلى مرئيات مذهلة. مزامنة تلقائية للآيات، خطوط عثمانية عالية الدقة، وتصدير فوري لمنصات التواصل.
      </p>

      <button
        onClick={handleStart}
        style={{
          padding: "15px 30px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px"
        }}
      >
        ابدأ التصميم مجاناً
      </button>

      <div style={{ marginTop: "40px", maxWidth: "700px", textAlign: "right" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>واجهة التطبيق</h2>
        <p>مزامنة ذكية: نظام ذكي يربط الصوت بالنص القرآني تلقائياً بدقة عالية مع إمكانية التعديل اليدوي.</p>
        <p>تخصيص كامل: تحكم في الخطوط، الألوان، الخلفيات، والمؤثرات البصرية لتناسب هويتك البصرية.</p>
        <p>تصدير فوري: ريندر محلي سريع جداً يدعم دقة 4K ومعدل إطارات 60fps لنتائج سينمائية.</p>
      </div>

      <footer style={{ marginTop: "40px", fontSize: "14px", color: "#555" }}>
        © 2026 Tarteel Studio. جميع الحقوق محفوظة.
      </footer>
    </main>
  );
}
