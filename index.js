console.log("hello world !");

//bai1

document.getElementById("btnTmr").onclick = function () {
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var dayAfter = 0;
  var monthAfter = 0;
  var yearAfter = 0;
  var result = "";
  if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
    dayAfter = 1;
    monthAfter = month + 1;
    yearAfter = year;
    result += dayAfter + "/" + monthAfter + "/" + yearAfter;
  } else if (
    day == 31 &&
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10)
  ) {
    dayAfter = 1;
    monthAfter = month + 1;
    yearAfter = year;
    result += dayAfter + "/" + monthAfter + "/" + yearAfter;
  } else if (month == 2 && day == 28) {
    dayAfter = 1;
    monthAfter = 3;
    yearAfter = year;
    result += dayAfter + "/" + monthAfter + "/" + yearAfter;
  } else if (month == 12 && day == 31) {
    dayAfter = 1;
    monthAfter = 1;
    yearAfter = year + 1;
  } else {
    dayAfter = day + 1;
    monthAfter = month;
    yearAfter = year;
    result += dayAfter + "/" + monthAfter + "/" + yearAfter;
  }
  document.getElementById("showNextDay").innerHTML = result;
  document.getElementById("showPreDay").style.display = "none";
  document.getElementById("showNextDay").style.display = "block";
};
document.getElementById("btnYtd").onclick = function () {
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var dayBefore = 0;
  var monthBefore = 0;
  var yearBefore = 0;
  var product = "";
  if (
    day == 1 &&
    (month == 2 ||
      month == 4 ||
      month == 6 ||
      month == 9 ||
      month == 11 ||
      month == 8)
  ) {
    dayBefore = 31;
    monthBefore = month - 1;
    yearBefore = year;
    product += dayBefore + "/" + monthBefore + "/" + yearBefore;
  } else if (
    day == 1 &&
    (month == 5 || month == 7 || month == 10 || month == 12)
  ) {
    dayBefore = 30;
    monthBefore = month - 1;
    yearBefore = year;
    product += dayBefore + "/" + monthBefore + "/" + yearBefore;
  } else if (month == 3 && day == 1) {
    dayBefore = 28;
    monthBefore = 2;
    yearBefore = year;
    product += dayBefore + "/" + monthBefore + "/" + yearBefore;
  } else if (month == 1 && day == 1) {
    dayBefore = 31;
    monthBefore = 12;
    yearBefore = year - 1;
    product += dayBefore + "/" + monthBefore + "/" + yearBefore;
  } else {
    dayBefore = day - 1;
    monthBefore = month;
    yearBefore = year;
    product += dayBefore + "/" + monthBefore + "/" + yearBefore;
  }
  document.getElementById("showPreDay").innerHTML = product;
  document.getElementById("showNextDay").style.display = "none";
  document.getElementById("showPreDay").style.display = " block";
};

//bai2
document.getElementById("btnCountDay").onclick = function () {
  var month2 = document.getElementById("month2").value;
  var year2 = document.getElementById("year2").value;
  var day2 = 0;
  var countDay = "";
  if (
    month2 == 1 ||
    month2 == 3 ||
    month2 == 5 ||
    month2 == 7 ||
    month2 == 8 ||
    month2 == 10 ||
    month2 == 12
  ) {
    day2 = 31;
    countDay += "Tháng " + month2 + " năm " + year2 + " có " + day2 + "ngày";
  } else if (month2 == 4 || month2 == 6 || month2 == 9 || month2 == 11) {
    day2 = 30;
    countDay += "Tháng " + month2 + " năm " + year2 + " có " + day2 + "ngày";
  } else if (
    (year2 % 4 == 0 && year2 % 100 !== 0 && month2 == 2) ||
    year2 % 400 == 0
  ) {
    day2 = 29;
    countDay += "Tháng " + month2 + " năm " + year2 + " có " + day2 + "ngày";
  } else {
    day2 = 28;
    countDay += "Tháng " + month2 + " năm " + year2 + " có " + day2 + "ngày";
  }
  document.getElementById("showDay").innerHTML = countDay;
};

//bai3
document.getElementById("btnSpell").onclick = function () {
  var number = document.getElementById("number").value;
  var numHundred = Math.floor(parseInt(number) / 100);
  var numTens = Math.floor(Math.floor(parseInt(number) % 100) / 10);
  var numUnit = Math.floor(Math.floor(parseInt(number) % 100) % 10);
  var spellUnit = "";
  var spellHundred = "";
  var spellTens = "";
  var spell = "";

  switch (numHundred) {
    case 1:
      spellHundred += "Một trăm";

      break;
    case 2:
      spellHundred += "Hai trăm";

      break;
    case 3:
      spellHundred += "Ba trăm";

      break;
    case 4:
      spellHundred += "Bốn trăm";
      break;
    case 5:
      spellHundred += "Năm trăm";

      break;
    case 6:
      spellHundred += "Sáu trăm";

      break;
    case 7:
      spellHundred += "Bảy trăm";

      break;
    case 8:
      spellHundred += "Tám trăm";

      break;
    case 9:
      spellHundred += "Chín trăm";

      break;
  }
  switch (numTens) {
    case 1:
      spellTens += " mười";

      break;
    case 2:
      spellTens += " hai mươi";

      break;
    case 3:
      spellTens += " ba mươi";

      break;
    case 4:
      spellTens += " bốn mươi";

      break;
    case 5:
      spellTens += " năm mươi";

      break;
    case 6:
      spellTens += " sáu mươi";

      break;
    case 7:
      spellTens += " bảy mươi";

      break;
    case 8:
      spellTens += " tám mươi";

      break;
    case 9:
      spellTens += " chín mươi";

      break;
  }
  switch (numUnit) {
    case 1:
      spellUnit += " mốt";

      break;
    case 2:
      spellUnit += " hai ";

      break;
    case 3:
      spellUnit += " ba ";

      break;
    case 4:
      spellUnit += " bốn ";

      break;
    case 5:
      spellUnit += " năm ";

      break;
    case 6:
      spellUnit += " sáu";

      break;
    case 7:
      spellUnit += " bảy";

      break;
    case 8:
      spellUnit += " tám";

      break;
    case 9:
      spellUnit += " chín";
      break;
  }
  if (number >= 100 && number <= 999) {
    spell += spellHundred + spellTens + spellUnit;
  } else if (number >= 100 && number <= 999 && numTens == 0 && numUnit == 0) {
    spell += spellHundred;
  } else {
    spell += "Vui lòng nhập số có 3 chữ số";
  }

  document.getElementById("showSpell").innerHTML = spell;
};

//bai4
document.getElementById("btnCountDis").onclick = function () {
  var name1 = document.getElementById("name1").value;
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var name2 = document.getElementById("name2").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;
  var name3 = document.getElementById("name3").value;
  var x3 = document.getElementById("x3").value;
  var y3 = document.getElementById("y3").value;
  var schoolX = document.getElementById("schoolX").value;
  var schoolY = document.getElementById("schoolY").value;
  var distance1 = Math.sqrt(
    Math.pow(x1 - schoolX, 2) + Math.pow(y1 - schoolY, 2)
  );
  var distance2 = Math.sqrt(
    Math.pow(x2 - schoolX, 2) + Math.pow(y2 - schoolY, 2)
  );
  var distance3 = Math.sqrt(
    Math.pow(x3 - schoolX, 2) + Math.pow(y3 - schoolY, 2)
  );
  var submit = "";
  if (distance1 > distance2 && distance1 > distance3) {
    submit += "Sinh viên xa trường nhất là: " + name1;
  } else if (distance2 > distance1 && distance2 > distance3) {
    submit += "Sinh viên xa trường nhất là: " + name2;
  } else if (distance3 > distance1 && distance3 > distance2) {
    submit += "Sinh viên xa trường nhất là: " + name3;
  }

  document.getElementById("showDistance").innerHTML = submit;
};
