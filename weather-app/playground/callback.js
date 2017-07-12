let getUser = (id, callback) => {
    let user = {
        id,
        name: 'Lukas'
    };

    setTimeout(() => {
        callback(user);
    }, 3000)
};

getUser(123, (userObject) => (
    console.log(userObject)
));
