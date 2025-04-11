export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  return new Response(`
    <html>
      <head><title>PlayRifa OAuth</title></head>
      <body style="font-family: sans-serif; text-align: center; padding-top: 40px;">
        <h1>Redirecionamento recebido com sucesso!</h1>
        <p>Código: <strong>${code ?? "Não encontrado"}</strong></p>
        <p>Agora você pode voltar para o aplicativo.</p>
      </body>
    </html>
  `, {
    headers: { "Content-Type": "text/html" }
  });
}
