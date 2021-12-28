function gcd(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
}
function lcm(a, b){
    if (a === 0 || b === 0){
        return 0; //special case
    }
    else{
        return Math.abs(a * b)/gcd(a,b)
    }
}

console.log(lcm(21, 6));
