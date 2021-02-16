module.exports = function toReadable(number) {
    // массив первых девятнадцати чисел
    let FN = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    // массив десятков
    var D = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let arr = String(number).split(""); // полученное число переводим в массив
    if (number < 20) return FN[number];//для первых 20 чисел
    if (number < 100 && number % 10 == 0) return D[arr[0]];// для целых десятков типо 20, 30 и до 90
    if (number < 100) return D[arr[0]] + " " + FN[arr[1]];// для чисел от 21 до 99 не включая целые десятки
    if (number % 100 == 0) return FN[arr[0]] + " hundred";// для целых сотен
    if (number > 99 && number % 100 < 20)// для сотен от 101 до 119 и других сотен, например 919
        return FN[arr[0]] + " hundred " + FN[number % 100];
    if (number > 100 && number % 10 == 0)// для сотен с целыми десятками типо 120, 130 и до 990
        return FN[arr[0]] + " hundred " + D[arr[1]];
    return FN[arr[0]] + " hundred " + D[arr[1]] + " " + FN[arr[2]];//числа от 121 и до 999 не включая предыдущие пункты
};
