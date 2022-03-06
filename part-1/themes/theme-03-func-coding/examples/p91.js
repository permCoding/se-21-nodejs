function raw_string(line) {
    let taboo = ",. -!?+=:;";
    return line
        .toLowerCase()
        .split('')
        .filter(smb => !taboo.includes(smb))
        .join('');
}

function is_palindrom(line) {
    let _raw_string = raw_string(line);
    return _raw_string == _raw_string
        .split('')
        .reverse()
        .join('');
}

let s = 'Искать такси?';
console.log(is_palindrom(s));
