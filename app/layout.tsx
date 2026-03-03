export const metadata = {
  title: "Quran Sudani",
  description: "Sudanese Quran Video Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
