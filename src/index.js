module.exports = function toReadable(number) {
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const tens = Math.floor(number / 10) * 10;
  const units = number % 10;
  const lastTwoDigits = number % 100;
  const remnantTens = Math.floor(lastTwoDigits / 10) * 10;
  const remnantUnits = lastTwoDigits % 10;

  if (String(number).length === 1) {
    return numbers[number];
  }

  if (String(number).length === 2) {
    if (number <= 20 || number % 10 === 0) {
      return numbers[number];
    }
    return `${numbers[tens]} ${numbers[units]}`;
  }

  if (String(number).length === 3) {
    if (lastTwoDigits === 0) {
      return `${numbers[Math.floor(number / 100)]} hundred`;
    }

    if (lastTwoDigits <= 20 || lastTwoDigits % 10 === 0) {
      return `${numbers[Math.floor(number / 100)]} hundred ${numbers[lastTwoDigits]}`;
    }

    return `${numbers[Math.floor(number / 100)]} hundred ${numbers[remnantTens]} ${numbers[remnantUnits]}`;
  }

  return '';
};
