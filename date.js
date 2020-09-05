module.exports=getDate;
function getDate(){
  var today=new Date();
  var currentDate=today.getDay();
  var day='';
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var day=(today.toLocaleDateString("en-US", options));
  return day;
}
