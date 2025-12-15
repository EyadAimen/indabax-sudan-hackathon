import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  // ... (buffer conversion code same as before) ...
  const buffer = Buffer.from(await file.arrayBuffer());

  // UPDATED AUTH SECTION
  const oauth2Client = new google.auth.OAuth2(
    process.env.NEXT_PUBLIC_CLIENT_ID,
    process.env.NEXT_PUBLIC_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN
  });

  const drive = google.drive({ version: 'v3', auth: oauth2Client });

  const fileMetadata = {
    name: file.name,
    parents: [process.env.NEXT_PUBLIC_FOLDER_PATH || ''], // Your folder ID
  };

  try {
    const driveResponse = await drive.files.create({
      requestBody: fileMetadata,
      media: {
        mimeType: file.type,
        body: Readable.from(buffer),
      },
      fields: 'id, webViewLink',
    });

    return NextResponse.json({ 
      fileId: driveResponse.data.id,
      webViewLink: driveResponse.data.webViewLink 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}