function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP')
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet('RSVP');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Nome', 'Cognome', 'Email', 'Presenza', 'Accompagnatori', 'Note']);
  }

  sheet.appendRow([
    new Date(),
    e.parameter.nome,
    e.parameter.cognome,
    e.parameter.email,
    e.parameter.presenza,
    e.parameter.accompagnatori,
    e.parameter.note
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
