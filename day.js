

console.log('%c Stop! I am watching you!!','font-weight:bold;font-size:50px;color:red;');
function fun(){
var d=new Date();
var h=d.getHours();

var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var mon=new Array(12);
mon[0] =  "JANUARY";
mon[1] = "FEBRUARY";
mon[2] = "MARCH";
mon[3] = "APRIL";
mon[4] = "MAY";
mon[5] = "JUNE";
mon[6] = "JULY";
mon[7] = "AUGUST";
mon[8] = "SEPTEMBER";
mon[9] = "OCTOBER";
mon[10] = "NOVEMBER";
mon[11] = "DECEMBER";

if(h>=5 && h<12)
{
document.write("Today is "+weekday[d.getDay()]+" "+d.getDate()+" "+mon[d.getMonth()]+" "+d.getFullYear()+", and Good Morning to you");

}
if(h>=16 && h<=21)
{
document.write("Today is "+weekday[d.getDay()]+" "+d.getDate()+" "+mon[d.getMonth()]+" "+d.getFullYear()+", and Good Evening to you");
}	
if(h>=12 && h<=16)
{
document.write("Today is "+weekday[d.getDay()]+" "+d.getDate()+" "+mon[d.getMonth()]+" "+d.getFullYear()+", and Good Afternoon to you");
}
if(h>=21 && h<=24)
{
document.write("Today is "+weekday[d.getDay()]+" "+d.getDate()+" "+mon[d.getMonth()]+" "+d.getFullYear()+", and Good Night to you");

}		
}


fun();

