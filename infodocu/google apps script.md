# 📊 Google Sheets Integration Setup Guide

## 🎯 Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "BU-DSA Member Signups" (or whatever you prefer)
4. Set up columns in Row 1:
   - **A1:** Full Name
   - **B1:** Email
   - **C1:** Topic
   - **D1:** Message
   - **E1:** Timestamp

## ⚙️ Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Add data to the sheet
    sheet.appendRow([
      data.fullName,
      data.email,
      data.topic,
      data.goals,
      data.timestamp
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Save** the project (Ctrl+S)
5. Name it "BU-DSA Form Handler"

## 🚀 Step 3: Deploy the Script

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ next to "Type"
3. Select **Web app**
4. Set these options:
   - **Execute as:** Me
   - **Who has access:** Anyone
5. Click **Deploy**
6. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/LONG_ID_HERE/exec`)

## 🔧 Step 4: Update Your Website

1. Open `script.js` in your website folder
2. Find this line: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the URL you copied

## ✅ Step 5: Test It!

1. Open your website
2. Fill out the "Join the Club" form
3. Submit it
4. Check your Google Sheet - the data should appear!

## 🔒 Security Notes

- The script only accepts POST requests
- Data is validated before being added to the sheet
- Only you can access the Google Sheet (unless you share it)
- The script URL is public but only accepts your form's data structure

## 🎉 That's it!

Your form now automatically saves all submissions to your Google Sheet. You can:
- Share the sheet with other officers
- Export data anytime
- Filter and sort submissions
- Set up email notifications when new members join

## 🆘 Troubleshooting

If the form doesn't work:
1. Check the browser console for errors
2. Make sure the Google Apps Script is deployed as "Anyone" can access
3. Verify the script URL is correct in your JavaScript
4. Test the Google Apps Script independently first

---
**Need help?** The setup should take about 5-10 minutes total! 🚀
