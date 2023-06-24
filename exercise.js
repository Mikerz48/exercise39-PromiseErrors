const isLogged = true;
function randomNumber (isLogged) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random();
            if (isLogged === true) {
                resolve(rand);
            } else {
                reject (new Error("The value is not true"));
            }
        }, 500);
    })
}

function userDetails (input) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (input > 0.5) {
                resolve({"name": "John", "age": 24});
            } else {
                reject(new Error("Input is not greater than 0.5"));
            }
        }, 500)
    })
}

randomNumber(isLogged)
    .then((result) => userDetails(result))
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally("The code executed correctly");
