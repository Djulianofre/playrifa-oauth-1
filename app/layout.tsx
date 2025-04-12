export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>PlayRifa</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
