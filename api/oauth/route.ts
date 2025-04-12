import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Código não encontrado na URL' }, { status: 400 })
  }

  return NextResponse.redirect(`https://playrifa.com/oauth?code=${code}`)
}
