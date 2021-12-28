function pickRandom(lst_array){
    var rand_item= lst_array[Math.floor(Math.random()*lst_array.length)];
    console.log(rand_item);
    return rand_item;
}

var lst = [1, 2, 3, 4, 5];
console.log(Math.random());
pickRandom(lst);
