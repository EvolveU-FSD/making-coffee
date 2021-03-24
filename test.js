let object = {name: "jack", age: 15}

let jsonform = JSON.stringify(object)
console.log(jsonform)

let convertback = JSON.parse(jsonform)
console.log(convertback)