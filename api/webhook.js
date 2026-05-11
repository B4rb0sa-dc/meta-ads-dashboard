export async function GET() {
  return Response.json({
    ok: true,
    message: "Webhook ativo. Use POST para enviar dados do Make."
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    return Response.json({
      ok: true,
      message: "Dados recebidos com sucesso.",
      received_at: new Date().toISOString(),
      data: body
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        message: "Erro ao receber os dados. Verifique se o Make está enviando um JSON válido.",
        error: String(error)
      },
      {
        status: 400
      }
    );
  }
}
