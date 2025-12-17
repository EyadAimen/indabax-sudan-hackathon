// app/api/check/route.ts
import { NextResponse } from 'next/server';
import { checkValueExists } from "../../../utils/googlesheetService";

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming JSON body from your frontend
    const body = await request.json();
    const { testval } = body;

    if (!testval) {
      return NextResponse.json(
        { error: 'testval is required' },
        { status: 400 }
      );
    }

    // 2. Call your existing helper function
    const exists = await checkValueExists(testval);

    // 3. Return the result to the frontend
    return NextResponse.json({ exists });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}