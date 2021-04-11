function redundant(str){
    return(()=>{
        return(str)
    })
}

const fi = redundant("apple");

module.exports = redundant