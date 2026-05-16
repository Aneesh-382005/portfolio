import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const UPLOAD_SECRET = process.env.UPLOAD_SECRET;

export async function POST(req: NextRequest) {

  const secret = req.headers.get('x-upload-secret');
  if (secret !== UPLOAD_SECRET) {
     return NextResponse.json({ error: 'Haha, nice try.' }, { status: 401 });
  }
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // Save to public/Aneesh_Grover_Resume.pdf
  const publicDir = path.join(process.cwd(), 'public');
  const filePath = path.join(publicDir, 'Aneesh_Grover_Resume.pdf');
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  // Safely cast Buffer to Uint8Array via unknown to satisfy TypeScript
  await fs.writeFile(filePath, buffer as unknown as Uint8Array);

  return NextResponse.json({ success: true, message: 'Resume uploaded' });
}
