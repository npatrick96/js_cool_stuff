// http://stackoverflow.com/questions/9973323/javascript-compare-3-values

/*if(g == h && g == f && g != null)
{
//do something
}

*/

var h = "1"; // one as a string
var g = 1; // one as an integer
var f = 0b1; // one as binanry

if (g == h && g == f && g != null) {
    console.log("we made it");
    //console.log(f);
} else {
    console.log("drake made it");
}
