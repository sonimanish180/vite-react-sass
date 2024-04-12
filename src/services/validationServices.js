const validateName = value => {
    let name = value.replace(/\s+/g, ' ').trim();

    if (name.length === 0) {
        return '**Name cannot be empty!';
    }

    if (name.length < 3) {
        return '**Name is too short!';
    }

    let result = name.match(/^[a-zA-Z ]+$/);
    if (!result) {
        return '**Enter a valid name!';
    }

    return null;
}

const validateEmail = value => {
    let email = value.trim();

    if (email.length === 0) {
        return '**Email cannot be empty!';
    }

    let res = email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )

    if (!res) {
        return '**Enter a valid email!';
    }

    return null;
}

export {
    validateName,
    validateEmail
}
