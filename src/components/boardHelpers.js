export function createBoardDefault(rows, cols) {
  return Array.from({ length: rows }, () => 
    Array.from({ length: cols }, () => ({ letter: '', state: '' }))
  );
}

export const checkGuess = (guess, word) => {
  const result = new Array(word.length).fill('incorrect');
  const guessArray = guess.split('');
  const wordArray = word.split('');

  guessArray.forEach((letter, index) => {
      if (letter === wordArray[index]) {
          result[index] = 'correct';
          wordArray[index] = null; // avoid duplicate matching
      }
  });

  // match wrong-position letters
  guessArray.forEach((letter, index) => {
      if (result[index] !== 'correct' && wordArray.includes(letter)) {
          result[index] = 'wrong-position';
          wordArray[wordArray.indexOf(letter)] = null; // avoid duplicate matching
      }
  });

  return result;
};