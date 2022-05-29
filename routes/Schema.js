Schema
Register Schema {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    userType: "",
    apiToken: data.userType === "normal" ? "" : generateRandomString()
}

Login Schema {
    username: "",
    password: ""
}

return {
    name: "",
    type: "",
    apiToken: ""
}

Get Dog Schema
return [{
    id: 0,
    name: "",
    breed: "",
    dob: "",
    gender: 0,
    location: "",
    description: "",
    image: ""
}]

Add Dog Schema
    in: {
        name: "",
        breed: "",
        dob: "",
        gender: 0,
        location: "",
        description: "",
        image: ""
    }

insert: {
    id: randomNumber(),
    name: "",
    breed: "",
    dob: "",
    gender: 0,
    location: "",
    description: "",
    image: ""
}

Edit = Delete by ID => Add Edit Version