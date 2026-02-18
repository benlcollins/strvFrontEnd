function doGet(e) {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Strava Activity Dashboard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}

function getData() {
  // Fetch data from the active spreadsheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0]; // Assuming data is on the first sheet
  const data = sheet.getDataRange().getValues();

  // Return the raw data. 
  // The frontend handles filtering and column mapping based on:
  // [Activity ID, Name, Type, Moving Time, Start Date]
  return JSON.stringify(data);
}
