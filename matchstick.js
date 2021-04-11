function matchStick(n){
    let alltotal = n * 6;
    let total  = alltotal - (n - 1);
    return total;
}


module.exports = matchStick