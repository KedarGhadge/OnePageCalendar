var myYear;
var myDate;
var myMonth;
var selectedDate;
var selectedMonth;
this.aptDates = ["4", "7"];
this.year = document.getElementById("calendar-year");
//Kedar: On page load this function will get call
function CalendarApp(date) {
  if (!(date instanceof Date)) {
    date = new Date();
  }

  myYear = date.getFullYear();
  myMonth = date.getMonth();
  myDate = date.getDay();
  this.year.textContent = myYear;
  SetMonths(myYear); //Kedar: For month arrangements in calendar and other changes regarding the same this cunction call is.
}

// function display(test) {
//   $("#dialog").display = "inline";
//   $('#dialog').modal('show');
// }

function nextYear() {
  // $('#popupUploadImages').display = "inline";
  // $('#popupUploadImages').toggle();
  // $('#popupUploadImages').modal('show');
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
  //Kedar: Checking for which month first date is coming on which day and performing mapping accordingly
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

    // console.log(day);
  }
  notifyAgenda();
  //Kedar: applying css on dates of leap month, 30 and 31
  elements = document.getElementsByTagName("td");
  for (var j = elements.length; j--; ) {
    if (elements[j].innerHTML === "Sun") {
      elements[j].style.color = "red";
    } else if (elements[j].innerHTML === "31") elements[j].style.color = "blue";
    else if (elements[j].innerHTML === "30") elements[j].style.color = "green";
    else if (elements[j].innerHTML === checkLeapYear(year))
      elements[j].style.color = "yellow";
  }
  //Kedar: removing selection from selected months
  elements = document.getElementsByTagName("th");
  for (var j = elements.length; j--; ) {
    if (elements[j].classList.contains("monthSelect")) {
      elements[j].classList.remove("monthSelect");
    }
  }
  //Kedar: applying css on months as per no. of dates and current month
  for (var j = elements.length; j--; ) {
    if (
      elements[j].innerHTML === "Jan" ||
      elements[j].innerHTML === "Mar" ||
      elements[j].innerHTML === "May" ||
      elements[j].innerHTML === "Jul" ||
      elements[j].innerHTML === "Aug" ||
      elements[j].innerHTML === "Oct" ||
      elements[j].innerHTML === "Dec"
    )
      elements[j].style.color = "blue";
    else if (
      elements[j].innerHTML === "Apr" ||
      elements[j].innerHTML === "Jun" ||
      elements[j].innerHTML === "Sep" ||
      elements[j].innerHTML === "Nov"
    )
      elements[j].style.color = "green";
    else if (elements[j].innerHTML === "Feb")
      elements[j].style.color = "yellow";
    if (elements[j].innerHTML === toMonthName(myMonth))
      elements[j].classList.add("monthSelect");
  }
  selectedMonth = toMonthName(myMonth);
  highlightToday();
}

//Kedar: Fetching month name from number
function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString("en-US", {
    month: "short",
  });
}

//Kedar: As on year change css on months cells of table remaining as it is and failing operation
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

  elements = document.getElementsByTagName("th");
  for (var j = elements.length; j--; ) {
    elements[j].style.color = "black";
  }
  elements = document.getElementsByTagName("td");
  for (var j = elements.length; j--; ) {
    elements[j].style.color = "black";
  }
}

function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return "29";
  } else {
    return "28";
  }
}

//Kedar: code for month selection
$(".tg-0lax-month").on({
  click: function () {
    selectedMonth = $(this)[0].innerHTML;

    elements = document.getElementsByTagName("th");
    for (var j = elements.length; j--; ) {
      if (elements[j].classList.contains("monthSelect")) {
        elements[j].classList.remove("monthSelect");
      }
    }
    $(this).addClass("monthSelect");

    notifyAgenda();
    // showMonthwiseDates();
  },
});
// $(function() {
//   $('th').on('click', function() {
//     if($(this).hasClass('monthSelect')) {
//       deselectmonth($(this));
//     } else {
//       $(this).addClass('monthSelect');

//     }
//   });
// });

// function deselectmonth(e) {
//     e.removeClass('monthSelect');
// }

//Kedar: code for popup open and close
function deselect(e) {
  $(".pop").slideFadeToggle(function () {
    e.removeClass("selected");
  });
}

$(function () {
  $(".tg-0lax-day").on("click", function () {
    selectedDate = $(this)[0].innerHTML;
    if (isValidDate(myYear, selectedMonth, selectedDate)) {
      if ($(this).hasClass("selected")) {
        deselect($(this));
      } else {
        $(this).addClass("selected");
        $(".pop").slideFadeToggle();
      }

      // $('#imDate').replaceWith("You Selected Date " + selectedDate);
      document.getElementById("imDate").innerHTML =
        "You Selected Date " +
        selectedDate +
        " " +
        selectedMonth +
        " " +
        myYear;
      //Kedar: Display particular dates agenda only don't show all agenda on all dates.
      for (let li of document.querySelectorAll("li")) {
        li.style.display =
          li.childNodes[2].textContent ===
          selectedDate + " " + selectedMonth + " " + myYear
            ? ""
            : "none";
      }
      // var p1 = document.createElement("SPAN");
      // var txt = document.createTextNode("\u00D7");
      // p1.className = "stxt";
      // p1.appendChild(txt);
      // li.appendChild(p1);
      return false;
    } else {
      alert("Not a valid date for current month");
    }
  });

  $(".mclose").on("click", function () {
    deselect($(".tg-0lax-day"));
    return false;
  });
});

$.fn.slideFadeToggle = function (easing, callback) {
  return this.animate(
    { opacity: "toggle", height: "toggle" },
    "fast",
    easing,
    callback
  );
};

//Kedar: code for add items and remove items from agenda
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("mytext").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    var mytask = new Object();
    mytask.date = selectedDate + " " + selectedMonth + " " + myYear;
    mytask.containt = inputValue;
    this.aptDates.push(mytask);
    notifyAgenda();
  }
  document.getElementById("mytext").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var span2 = document.createElement("SPAN");
  span.className = "close";
  span2.className = "forMapping";
  span.appendChild(txt);
  li.appendChild(span);
  var txt2 = document.createTextNode(
    selectedDate + " " + selectedMonth + " " + myYear
  );
  span2.appendChild(txt2);
  li.appendChild(span2);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove(); //below line not working after making changes for showing agenda day specific so wrote this line.
      // div.style.display = "none";
      // var index = aptDates
      //   .map((object) => object.date)
      //   .indexOf(selectedDate + " " + selectedMonth + " " + myYear);
      var index = aptDates.findIndex(
        (element) =>
          element.date == selectedDate + " " + selectedMonth + " " + myYear &&
          element.containt == this.parentElement.childNodes[0].textContent
      );
      aptDates.splice(index, 1);
      notifyAgenda();
    };
  }
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//To highlight a scheduled dates
function notifyAgenda() {
  elements = document.getElementsByTagName("td");
  for (var j = elements.length; j--; ) {
    if (elements[j].classList.contains("booked")) {
      elements[j].classList.remove("booked");
    }
  }
  for (var j = elements.length; j--; ) {
    if (
      this.aptDates
        .map((object) => object.date)
        .indexOf(elements[j].innerHTML + " " + selectedMonth + " " + myYear) !==
      -1
    ) {
      elements[j].classList.add("booked");
      // elements[j].style.display = 'block';
      // elements[j].style.fontWeight="bold";
    }
  }
}

function isValidDate(year, month, day) {
  month = month.toLowerCase();
  var months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  month = months.indexOf(month);
  var d = new Date(year, month, day);
  if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
    return true;
  }
  return false;
}

function highlightToday() {
  date = new Date();
  month = toMonthName(date.getMonth());
  if (date.getFullYear() == myYear && month == selectedMonth) {
    elements = document.getElementsByTagName("td");
    for (var j = elements.length; j--; ) {
      if (elements[j].innerHTML == date.getDate())
        elements[j].classList.add("today");
    }
  }
}
