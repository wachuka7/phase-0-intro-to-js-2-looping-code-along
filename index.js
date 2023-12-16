// Assume this function is defined in your index.js file
function writeCards(names, action) {
    const thankYouNotes = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${action} gift!`;
      thankYouNotes.push(message);
    }
    return thankYouNotes;
  }
function countDown(firstNumber) {
    for (let i = firstNumber; i >= 0; i--) {
      console.log(i);
    }
  }
