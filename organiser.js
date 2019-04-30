count100Days();
makeCal();

//show days since the count started
function count100Days(){
   var dt1 = new Date(); //set two variables to compare.
   var dt0 = new Date();
   dt0.setFullYear(2019, 6, 22); //Day 0 of 100 days of X (is 28 Feb 2019)
   var dayCount = Math.floor((Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) - Date.UTC(dt0.getFullYear(), dt0.getMonth(), dt0.getDate()))/(1000*60*60*24));

   document.getElementById("daysCount").innerHTML = dayCount;
}


function makeCal(){
  //This function draws a calendar for the month.

  var d = new Date();
  var n = d.getMonth()+1;
  d.setFullYear(d.getFullYear(),n,0);
  var xDays = d.getDate(); //xDays is the number of Days this month.
  d.setFullYear(d.getFullYear(),n-1,1);
  var aDay = d.getDay(); //aDay is the day of the week Month started on
  d = new Date();
  var tDay = d.getDate(); //tDay is the date today (ie 3rd day of month)
  var tMon   //to get the month
  switch (d.getMonth()) {
     case 0:
        tMon = "Jan";
        break;
     case 1:
        tMon = "Feb";
        break;
     case 2:
        tMon = "Mar";
        break;
     case 3:
        tMon = "Apr";
        break;
     case 4:
        tMon = "May";
        break;
     case 5:
        tMon = "Jun";
        break;
     case 6:
        tMon = "Jul";
        break;
     case 7:
        tMon = "Aug";
        break;
     case 8:
        tMon = "Sep";
        break;
     case 9:
        tMon = "Oct";
        break;
     case 10:
        tMon = "Nov";
        break;
     case 11:
        tMon = "Dec";
        break;

  }


  //Writing the Top of the Calendar (days of week)
  var tableCal =  "<caption>" + tMon + "</caption>";
  tableCal += "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr>";

  //Looping through the days of month
  //to get the calendar to align to days of the week the loop starts in neg.
  var i;
  var iDay = 0;

  for (i =1-aDay; i <= xDays; i++){

    if(iDay==0){	//each sunday, start a new row.
      tableCal += "<tr>";
    }

    tableCal += "<td>";
    if(i==tDay){     //put a mark next to today on calendar.
      tableCal += "<div class=\"today\">";
    }

    if(i>0){	//negative days are last month, and get no number
      tableCal += i.toString();
    }

    if(i==tDay){     //put a mark next to today on calendar.
      tableCal += "</div>";
    }
    tableCal += "</td>";

    if(iDay==6 || iDay==xDays){	//each saturday or last day of month close row
      tableCal += "</tr>";
      iDay = -1;
    }
    iDay++;
  }

  document.getElementById("simpleCal").innerHTML = tableCal;

}

