count100Days();

//show days since the count started
function count100Days(){
   var dt1 = new Date(); //set two variables to compare.
   var dt0 = new Date();
   dt0.setFullYear(2018, 8, 15); //Day 0 of 100 days of X
   var dayCount = Math.floor((Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) - Date.UTC(dt0.getFullYear(), dt0.getMonth(), dt0.getDate()))/(1000*60*60*24));

   document.getElementById("daysCount").innerHTML = dayCount;
}
