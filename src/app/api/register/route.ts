import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

interface SheetDetails {
  id: string | undefined;
  range: string;
}

type SheetConfig = Record<string, SheetDetails>;

export async function POST(req: NextRequest) {
    try{
        const {selectedEvent, ...data} = await req.json();

        const sheetConfig: SheetConfig = {
          Destival: {
            id: process.env.Destival ,
            range: "Sheet1!A1:C1",
          },
          Requiem: {
            id: process.env.Requiem ,
            range: "Sheet1!A1:C1",
          },
          Cosmos: {
            id: process.env.Cosmos ,
            range: "Sheet1!A1:C1",
          },
        };

        const sheetDetails = sheetConfig[selectedEvent]
        if (!sheetDetails) {
          return NextResponse.json({error: 'An Error Occurred while Parsing Data'},{status: 500})
        }
        
        const auth = new google.auth.GoogleAuth({
          keyFile: 'credentials/oneiros-25-16cb2dddfe0b.json', // Replace with the path to your JSON file
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

    
        const sheets = google.sheets({ version: 'v4', auth});
    
    
        // Append data
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetDetails.id,
          range: sheetDetails.range,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[...Object.values(data)]],
          },
        });
    
        return NextResponse.json({success: 'Successfully Registered' },{status: 200});
      } catch (error) {
        console.error(error);
        return NextResponse.json({error: 'An Error Occurred while Registering' },{status: 500});
      }
}