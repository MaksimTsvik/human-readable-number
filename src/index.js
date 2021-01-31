module.exports = function toReadable(number) {
    // Set up arrays of unique numbers
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];
    // Convert input number into array of numbers
    let numberArr = number.toString().split('');
    // 'Zero' inspection
    if (number == 0) {
        return 'zero';
    }
    // 1..19 
    if (number < 20) {
        return ones[number];
    }
    // 20..99, zero ends are trimmed (.trim())
    if (number < 100 && number > 19) {
        return (tens[numberArr[0]] + ' ' + ones[numberArr[1]]).trim();
    }
    // 100..999 Used recursion for tens and ones, zero ends are trimmed (.trim())
    if (number > 99) {
        if (numberArr[2] == '0' && numberArr[1] == '0') {
            return (ones[numberArr[0]] + ' hundred ').trim();
        } else
            return (ones[numberArr[0]] + ' hundred ' + toReadable(Number(numberArr[1] + numberArr[2]))).trim();
    }

}