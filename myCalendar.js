var myYear;
this.aptDates = ['4','7'];
this.year = document.getElementById("calendar-year");
function CalendarApp(date) {
  if (!(date instanceof Date)) {
    date = new Date();
  }

  myYear = date.getFullYear();
  this.year.textContent = myYear;
  SetMonths(myYear);
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
  elements = document.getElementsByTagName("td")
      for (var j = elements.length; j--;) {
      if (elements[j].innerHTML === "Sun") {
      elements[j].style.color = "red";
    }
    else if(elements[j].innerHTML === "31")
    elements[j].style.color = "blue";
    else if(elements[j].innerHTML === "30")
    elements[j].style.color = "green";
    else if(elements[j].innerHTML === checkLeapYear(year))
    elements[j].style.color = "yellow";
    if(this.aptDates.indexOf(elements[j].innerHTML) !== -1 ){
    elements[j].style.display = 'block';
    elements[j].style.fontWeight="bold";
    }
  }
  elements = document.getElementsByTagName("th")
      for (var j = elements.length; j--;) {
      if (elements[j].innerHTML === "Jan" || elements[j].innerHTML === "Mar" || elements[j].innerHTML === "May" || elements[j].innerHTML === "Jul" || elements[j].innerHTML === "Aug" || elements[j].innerHTML === "Oct" || elements[j].innerHTML === "Dec") 
      elements[j].style.color = "blue";
      else if(elements[j].innerHTML === "Apr" || elements[j].innerHTML === "Jun" || elements[j].innerHTML === "Sep" || elements[j].innerHTML === "Nov" )
      elements[j].style.color = "green";
      else if(elements[j].innerHTML === "Feb")
      elements[j].style.color = "yellow";
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

  elements = document.getElementsByTagName("th")
      for (var j = elements.length; j--;) {
      elements[j].style.color = "black";
  }
  elements = document.getElementsByTagName("td")
      for (var j = elements.length; j--;) {
      elements[j].style.color = "black";
  }
}

function checkLeapYear(year) {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      return '29';
  } else {
      return '28';
  }
}


function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

$(function() {
  $('.tg-0lax-day').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('.tg-0lax-day'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};