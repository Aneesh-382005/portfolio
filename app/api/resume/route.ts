import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;
  if (!resumeUrl) {
    return NextResponse.json({ error: 'No resume URL configured' }, { status: 400 });
  }

  let res: Response;
  try {
    res = await fetch(resumeUrl);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 502 });
  }

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 502 });
  }

  // Force inline preview and forward PDF stream
  const headers = new Headers(res.headers);
  headers.set('Content-Type', 'application/pdf');
  headers.set('Content-Disposition', 'inline; filename="Aneesh_Grover_Resume.pdf"');

  return new NextResponse(res.body, { status: res.status, headers });
}
