export function GET() {
  return Response.json({
    ok: true,
    message: "Webhook ativo. Pronto para receber dados do Make."
  });
}
