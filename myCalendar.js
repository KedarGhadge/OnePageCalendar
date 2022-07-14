var myYear;
this.year = document.getElementById("calendar-year");
function CalendarApp(date) {
  if (!(date instanceof Date)) {
    date = new Date();
  }

  //   this.showView(date);
  //   this.addEventListeners();
  myYear = date.getFullYear();
  this.year.textContent = myYear;
  SetMonths(myYear);
}

function nextYear() {
  clearOldSection();
  //   document.querySelector('[id^="d-"]').id.textContent = "";
  myYear = myYear + 1;
  this.year.textContent = myYear;
  SetMonths(myYear);
}

function prevYear() {
  clearOldSection();
  myYear = myYear - 1;
  this.year.textContent = myYear;
  SetMonths(myYear);
}

function SetMonths(year) {
  for (let i = 0; i < 12; i++) {
    var firstDay = new Date(year, i, 1);
    var day = "";
    switch (firstDay.getDay()) {
      case 0:
        document.getElementById("d-sun0").textContent == ""
          ? (document.getElementById("d-sun0").textContent = toMonthName(i))
          : document.getElementById("d-sun1").textContent == ""
          ? (document.getElementById("d-sun1").textContent = toMonthName(i))
          : (document.getElementById("d-sun2").textContent = toMonthName(i));
        break;
      case 1:
        document.getElementById("d-mon0").textContent == ""
          ? (document.getElementById("d-mon0").textContent = toMonthName(i))
          : document.getElementById("d-mon1").textContent == ""
          ? (document.getElementById("d-mon1").textContent = toMonthName(i))
          : (document.getElementById("d-mon2").textContent = toMonthName(i));
        break;
      case 2:
        document.getElementById("d-tue0").textContent == ""
          ? (document.getElementById("d-tue0").textContent = toMonthName(i))
          : document.getElementById("d-tue1").textContent == ""
          ? (document.getElementById("d-tue1").textContent = toMonthName(i))
          : (document.getElementById("d-tue2").textContent = toMonthName(i));
        break;
      case 3:
        document.getElementById("d-wed0").textContent == ""
          ? (document.getElementById("d-wed0").textContent = toMonthName(i))
          : document.getElementById("d-wed1").textContent == ""
          ? (document.getElementById("d-wed1").textContent = toMonthName(i))
          : (document.getElementById("d-wed2").textContent = toMonthName(i));
        break;
      case 4:
        document.getElementById("d-thu0").textContent == ""
          ? (document.getElementById("d-thu0").textContent = toMonthName(i))
          : document.getElementById("d-thu1").textContent == ""
          ? (document.getElementById("d-thu1").textContent = toMonthName(i))
          : (document.getElementById("d-thu2").textContent = toMonthName(i));
        break;
      case 5:
        document.getElementById("d-fri0").textContent == ""
          ? (document.getElementById("d-fri0").textContent = toMonthName(i))
          : document.getElementById("d-fri1").textContent == ""
          ? (document.getElementById("d-fri1").textContent = toMonthName(i))
          : (document.getElementById("d-fri2").textContent = toMonthName(i));
        break;
      case 6:
        document.getElementById("d-sat0").textContent == ""
          ? (document.getElementById("d-sat0").textContent = toMonthName(i))
          : document.getElementById("d-sat1").textContent == ""
          ? (document.getElementById("d-sat1").textContent = toMonthName(i))
          : (document.getElementById("d-sat2").textContent = toMonthName(i));
    }
    console.log(day);
  }
}

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString("en-US", {
    month: "short",
  });
}

function clearOldSection() {
  document.getElementById("d-sun0").textContent = "";
  document.getElementById("d-mon0").textContent = "";
  document.getElementById("d-tue0").textContent = "";
  document.getElementById("d-wed0").textContent = "";
  document.getElementById("d-thu0").textContent = "";
  document.getElementById("d-fri0").textContent = "";
  document.getElementById("d-sat0").textContent = "";

  document.getElementById("d-sun1").textContent = "";
  document.getElementById("d-mon1").textContent = "";
  document.getElementById("d-tue1").textContent = "";
  document.getElementById("d-wed1").textContent = "";
  document.getElementById("d-thu1").textContent = "";
  document.getElementById("d-fri1").textContent = "";
  document.getElementById("d-sat1").textContent = "";

  document.getElementById("d-sun2").textContent = "";
  document.getElementById("d-mon2").textContent = "";
  document.getElementById("d-tue2").textContent = "";
  document.getElementById("d-wed2").textContent = "";
  document.getElementById("d-thu2").textContent = "";
  document.getElementById("d-fri2").textContent = "";
  document.getElementById("d-sat2").textContent = "";
}
