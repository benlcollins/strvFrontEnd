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
  // In a real scenario, this would fetch from the active spreadsheet
  // const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // const data = sheet.getDataRange().getValues();
  
  // Returning mock data for initial setup and verification
  // Structure: [Activity ID, Name, Type, Moving Time (seconds), Start Date]
  // Moving Time: 3600 = 1 hour
  const mockData = [
    ['Header', 'Header', 'Header', 'Header', 'Header'], // Header row
    ['1', 'Morning Run', 'Run', 3600, '2023-01-01T10:00:00Z'],
    ['2', 'Afternoon Ride', 'Ride', 7200, '2023-01-02T14:00:00Z'],
    ['3', 'Swim', 'Swim', 1800, '2023-01-03T07:00:00Z'],
    ['4', 'Hike', 'Hike', 10800, '2023-01-05T09:00:00Z'],
    ['5', 'Long Run', 'Run', 5400, '2023-01-10T06:00:00Z'],
    ['6', 'Hard Ride', 'Ride', 14400, '2023-02-15T10:00:00Z'],
    // Add more mock data as needed to test visualization
  ];
  
  // Real implementation (commented out for now):
  /*
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0]; // Assuming data is on the first sheet
  const data = sheet.getDataRange().getValues();
  // Transform or filter if necessary here
  return JSON.stringify(data);
  */

  return JSON.stringify(mockData);
}
