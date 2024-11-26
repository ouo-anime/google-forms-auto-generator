function createFormFromJSON() {
  const fileId = 'Your ID'; // Replace with your DOC file ID
  const form = FormApp.create('Auto-generated form');

  const file = DriveApp.getFileById(fileId);
  const doc = DocumentApp.openById(fileId);
  const content = doc.getBody().getText();

  let questions;
  try {
    questions = JSON.parse(content);
  } catch (e) {
    Logger.log('Error parsing JSON from DOC file: ' + e.message);
    return;
  }

  Logger.log('Number of questions: ' + questions.length);

  // Process each question
  questions.forEach((question, index) => {
    Logger.log(`Processing question ${index + 1}: ${question.question}`);

    const type = question.type;
    const title = question.question;
    const options = question.options || [];
    const correctAnswer = question.correctAnswer;

    if (type === 'selection') {
      const item = form.addMultipleChoiceItem();
      item.setTitle(title).setChoiceValues(options);

      if (correctAnswer) {
        Logger.log(`Correct answer: ${correctAnswer}`);
      }
    } else if (type === 'multiple choice') {
      const item = form.addCheckboxItem();
      item.setTitle(title).setChoiceValues(options);

      if (correctAnswer) {
        Logger.log(`Correct answers: ${correctAnswer}`);
      }
    } else if (type === 'text') {
      const item = form.addTextItem();
      item.setTitle(title);
    } else if (type === 'drop-down list') {
      const item = form.addListItem();
      item.setTitle(title).setChoiceValues(options);

      if (correctAnswer) {
        Logger.log(`Correct answer: ${correctAnswer}`);
      }
    } else if (type === 'ranking') {
      const item = form.addScaleItem();
      const minValue = 1;
      const maxValue = options.length;

      item.setTitle(title)
        .setBounds(minValue, maxValue)
        .setLabels(options[0], options[options.length - 1]);
    } else {
      Logger.log(`Unknown question type: ${type}`);
    }
  });

  Logger.log('Form created: ' + form.getEditUrl());
}

