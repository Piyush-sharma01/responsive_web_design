function square()
{
//  var r=document.getElementById("s").value;
 
// document.write("<h2>"+r+"squre is"+r*r+"</h2>");

// var r=document.getElementsByName("s1")[0].value;
//  if(isNaN(r))
//     alert("please enter a valid number");
// else{
// document.write("<h2>"+r+"squre is"+r*r+"</h2>");
// }


var r=document.getElementsBytagName("input").value;
 if(isNaN(r))
    alert("please enter a valid number");
else{
document.write("<h2>"+r+"squre is"+r*r+"</h2>");
}
}