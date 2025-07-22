function onFormSubmit(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses 1");
  const row = e.range.getRow();
  const email = sheet.getRange(row, 2).getValue(); // Adjust column index if needed

  MailApp.sendEmail({
    to: email,
    subject: "Registration Confirmation",
    body: `Hi, thank you for registering! We’ve successfully received your form submission.`
  });
}
