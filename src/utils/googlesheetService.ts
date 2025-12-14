// utils/googleSheetsService.ts

interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  members: string;
  description: string;
  businessModel: string;
  poc: string;
  timestamp: string;
}

export async function submitToGoogleSheets(data: RegistrationData): Promise<{ success: boolean; message: string }> {
  try {
    // Next.js automatically loads NEXT_PUBLIC_ variables from .env.local
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google Script URL not configured');
      return {
        success: false,
        message: 'Configuration error. Please contact support.'
      };
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    // Check if request was sent successfully
    // Note: Google Apps Script with no-cors doesn't return readable response
    // We assume success if no error is thrown
    return {
      success: true,
      message: 'Registration submitted successfully!'
    };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      success: false,
      message: 'Failed to submit registration. Please try again.'
    };
  }
}