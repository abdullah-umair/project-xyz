const person = {
    "name": "xxx",
    "age": 44,
    "hobbies": ["reading", "soccer"],
    "siblings": [
        {
            "name": "asad",
            "age": 78
        },
        {
            "name": "hghg",
            "age": 99
        }
    ],
    "specs": {
        "rightvision": 1.5,
        "leftvission": 1.5
    }
};


//console.log(person.name)
for(let hobby of person.hobbies) {
    console.log(hobby)
}

//for(let sibling of person.siblings) {
//    console.log(sibling.name)
//}