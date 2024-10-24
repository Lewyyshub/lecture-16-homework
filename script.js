function Gamravleba(a, b) {
  console.log(a * b);
}
Gamravleba(5, 5);

function CheckAge(age) {
  if (age >= 18) {
    console.log("შენ ხარ სრულწლოვანი");
  } else if (age <= 18) {
    console.log("შენ ხარ არასრულწლოვანი");
  }
}
CheckAge(14);

function IsEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "ლუწია";
  } else {
    return "კენტია";
  }
}
console.log(IsEvenOrOdd(49));

function GetDayName(DayNumber) {
  switch (DayNumber) {
    case 1:
      return "ორშაბათი";
      break;
    case 2:
      return "სამშაბათი";
    default:
      return "ეს დღე ჯერ არ გამოუგონიათ";
      break;
  }
}
console.log(GetDayName(1));
console.log(GetDayName(2));
console.log(GetDayName(3));

function CompareNumbers(a, b) {
  if (a > b) {
    return "პირველი მეტია მეორეზე";
  } else if (a < b) {
    return "მეორე მეტია პირველზე";
  } else {
    return "ორივე რიცხვი ტოლია";
  }
}
console.log(CompareNumbers(4, 2));
console.log(CompareNumbers(1, 4));
console.log(CompareNumbers(3, 3));

function Calculator(x, y, op) {
  switch (true) {
    case op === "+":
      return x + y;
      break;
    case op === "-":
      return x - y;
      break;
    case op === "*":
      return x * y;
      break;
    case op === "/":
      return x / y;
    default:
      break;
  }
}

console.log(Calculator(5, 10, "+"));
console.log(Calculator(30, 10, "-"));
console.log(Calculator(5, 10, "*"));
console.log(Calculator(50, 10, "/"));

function CelsiusToFahrenheit(Celsius) {
  if ((Farenheit = (Celsius * 9) / 5 + 32)) {
    return Farenheit;
  } else {
  }
}
console.log(CelsiusToFahrenheit(1));

function FindMax(a, b, c) {
  if (a >= b && a >= c) {
    return "პირველი რიცხვი უდიდესია";
  } else if (b >= a && b >= c) {
    return "მეორე რიცხვი უდიდესია";
  } else c >= a && c >= b;
  return "მესამე რიცხვი უდიდესია";
}

console.log(FindMax(23, 24, 52));

function CheckSign(num) {
  if (num > 0) {
    return "რიცხვი დადებითია";
  } else if (num < 0) {
    return "რიცხვი უარყოფითია";
  }
}

console.log(CheckSign(-1));

function GetMonthName(MonthNumber) {
  switch (MonthNumber) {
    case 1:
      return "იანვარი";
      break;
    case 2:
      return "თებერვალი";
      break;
    case 3:
      return "მარტი";
      break;
    case 4:
      return "აპრილი";
      break;
    default:
      break;
  }
}
console.log(GetMonthName(1));
console.log(GetMonthName(2));
console.log(GetMonthName(3));
console.log(GetMonthName(4));

function MultiplyIfGreaterThanFive(num) {
  if (num === 5) {
    return 5 * 10;
  } else if (num <= 5) {
    return "რიცხვი მცირეა";
  }
}

console.log(MultiplyIfGreaterThanFive(4));

function GetSeason(SeasonNumber) {
  switch (SeasonNumber) {
    case 1:
      return "გაზაფხული";
      break;
    case 2:
      return "ზაფხული";
      break;
    case 3:
      return "შემოდგომა";
      break;
    case 4:
      return "ზამთარი";
    default:
      break;
  }
}

console.log(GetSeason(1));
console.log(GetSeason(2));
console.log(GetSeason(3));
console.log(GetSeason(4));

function CheckPrice(price) {
  if (price >= 101) {
    return "ფასი მაღალია";
  } else if (price <= 100) {
    return "ფასი ნორმალურია";
  }
}

console.log(CheckPrice(100));

function SwitchCalculator(a, b, op) {
  switch (true) {
    case op === "+":
      return a + b;
      break;
    case op === "-":
      return a - b;
      break;
    case op === "*":
      return a * b;
      break;
    case op === "/":
      return a / b;
    default:
      break;
  }
}
console.log(SwitchCalculator(30, 45, "+"));
console.log(SwitchCalculator(300, 45, "-"));
console.log(SwitchCalculator(2, 2, "*"));
console.log(SwitchCalculator(10, 5, "/"));

function PositiveSum(a, b) {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    return "ერთი რიცხვი უარყოფითია";
  }
}
console.log(PositiveSum(5, 0));
