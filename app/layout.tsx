export const metadata = {
  title: "Quran Sudani",
  description: "Sudanese Quran Studio",
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
