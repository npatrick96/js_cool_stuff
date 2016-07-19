var orders = [ ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'] ];

outerLoop: for (var i = 0; i < orders.length; i++ ){
    var cur  = orders[i];
    innerLoop: for (var k = 0; k < cur.length; k ++){
        var choice = cur[k];
        if (choice === "5"){
        break outerLoop;
        }
        console.log(choice);
    }
}
