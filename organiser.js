count100Days();
makeCal();

//show days since the count started
function count100Days(){
   var dt1 = new Date(); //set two variables to compare.
   var dt0 = new Date();
   dt0.setFullYear(2019, 2, 0); //Day 0 of 100 days of X
   var dayCount = Math.floor((Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) - Date.UTC(dt0.getFullYear(), dt0.getMonth(), dt0.getDate()))/(1000*60*60*24));

   document.getElementById("daysCount").innerHTML = dayCount;
}


function makeCal(){

 var now = new Date();
 var firstDay = Date(now.getFullYear(), now.getMonth(), 1);
 var startingDay = firstDay.getDay();

 document.getElementById("simpleCal").innerHTML = firstDay;

}
