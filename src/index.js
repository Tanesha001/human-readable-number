module.exports = function toReadable (number) {
    let strNum = number.toString().split('');
    if (number >= 0 && number < 10) { 
      return firstNum(number);
    } else if (number >= 10 && number < 20) {
      return secondNum1(number);
    } else if (number.toString().length === 2 && +strNum[1] === 0) {
      return `${secondNum2(+strNum[0] * 10)}`;
    } else if (number.toString().length === 2 && +strNum[1] > 0)  {
      return `${secondNum2(+strNum[0] * 10)} ${firstNum(+strNum[1])}`;
    } else if (number.toString().length === 3 && +strNum[1] === 0 && +strNum[2] === 0) {
      return `${firstNum(+strNum[0])} hundred`
    } else if (number.toString().length === 3 && +strNum[1] === 0 && +strNum[2] > 0) {
       return `${firstNum(+strNum[0])} hundred ${firstNum(+strNum[2])}`;
    } else if (number.toString().length === 3 && +strNum[1] === 1) {
       return `${firstNum(+strNum[0])} hundred ${secondNum1(+(strNum[1]+strNum[2]))}`;
    }  else if (number.toString().length === 3 && +strNum[1] > 1 && +strNum[2] === 0) {
       return `${firstNum(+strNum[0])} hundred ${secondNum2(+(strNum[1]+strNum[2]))}`;
    } else if (number.toString().length === 3 && +strNum[1] > 1 && +strNum[2] > 0) {
       return `${firstNum(+strNum[0])} hundred ${secondNum2(+strNum[1] * 10)} ${firstNum(+strNum[2])}`
    }
  }
  
  
  function firstNum(number) {
    switch(number) {
      case 0: return 'zero';
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
    }
  }
  
  function secondNum1(number) {
  switch(number) {
    case 10: return 'ten';
    case 11: return 'eleven';
    case 12: return 'twelve';
    case 13: return 'thirteen';
    case 14: return 'fourteen';
    case 15: return 'fifteen';
    case 16: return 'sixteen';
    case 17: return 'seventeen';
    case 18: return 'eighteen';
    case 19: return 'nineteen';
    }
  }
  
  function secondNum2(number) {
   switch(number) {
    case 20: return 'twenty';
    case 30: return 'thirty';
    case 40: return 'forty';
    case 50: return 'fifty';
    case 60: return 'sixty';
    case 70: return 'seventy';
    case 80: return 'eighty';
    case 90: return 'ninety';
   }
  }
