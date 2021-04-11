function countTrue(array){
    let totalTrue = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element == true){
            totalTrue += 1;
        }
    }
    return totalTrue
}

module.exports = countTrue