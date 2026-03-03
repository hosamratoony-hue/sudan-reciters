"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleStart = () => router.push("/page2");

  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>Tarteel Studio</h1>
      <p>صمم فيديوهات قرآنيـة باحترافية وذكاء</p>
      <button onClick={handleStart}>ابدأ التصميم مجاناً</button>
    </main>
  );
}
