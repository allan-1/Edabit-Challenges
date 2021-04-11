function addName(obj, key, value){
    obj[key] = value
    return obj
}

console.log(addName({piano: 500}, "Brutus", 300))