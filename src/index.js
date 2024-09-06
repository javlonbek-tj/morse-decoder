const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const encodedStrings = [];
  for (let i = 0; i < expr.length; i += 10) {
    const encodedString = expr.slice(i, i + 10);
    encodedStrings.push(encodedString);
  }
  return encodedStrings
    .map((encodedString) => {
      let result = '';
      if (encodedString === '**********') {
        result += ' ';
        return result;
      }
      const parsed = parseInt(encodedString).toString();
      let morseCode = '';
      for (let i = 0; i <= parsed.length; i += 2) {
        const sliced = parsed.slice(i, i + 2);
        if (sliced === '11') {
          morseCode += '-';
        }
        if (sliced === '10') {
          morseCode += '.';
        }
      }
      result += MORSE_TABLE[morseCode];
      return result;
    })
    .join('');
}

module.exports = {
  decode,
};
