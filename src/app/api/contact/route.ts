import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== 'object' || !('email' in body) || typeof body.email !== 'string' || !body.email.includes('@')) {
    return NextResponse.json({ ok: false, message: 'A valid email is required.' }, { status: 400 });
  }
  return NextResponse.json({ ok: true, message: 'Thank you. We will be in touch shortly.' });
}
