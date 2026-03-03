"use client";

import { useState } from "react";

export default function Home() {
  const [audio, setAudio] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setAudio(e.target.files[0]);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px"
    }}>
      <h1>استوديو القراء السودانيين</h1>

      <div>
        <label>
          رفع ملف صوتي:
          <input type="file" accept="audio/*" onChange={handleAudio} />
        </label>
      </div>

      <div>
        <label>
          رفع صورة أو فيديو:
          <input type="file" accept="image/*,video/*" onChange={handleImage} />
        </label>
      </div>

      {audio && <p>الصوت المختار: {audio.name}</p>}
      {image && <p>الصورة/الفيديو المختار: {image.name}</p>}

      <button style={{
        padding: "10px 20px",
        backgroundColor: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        تصميم الفيديو
      </button>
    </main>
  );
}
