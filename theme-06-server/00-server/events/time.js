exports.get_data_time = (prm="dt") => {
    
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // current year
    let year = date_ob.getFullYear();
    
    // current hours
    let hours = date_ob.getHours();
    
    // current minutes
    let minutes = date_ob.getMinutes();
    
    // current seconds
    let seconds = date_ob.getSeconds();
    
    let result; // variable for time & date
    switch(prm) {
        case 'd':
            result = year + "-" + month + "-" + date; // date in YYYY-MM-DD format
            break;
        case 't':
            result = hours + ":" + minutes; // time in HH:MM format
            break;
        case 's':
            result = hours + ":" + minutes + ":" + seconds; // time in HH:MM:SS format
            break;            
        default:
            // default date & time in YYYY-MM-DD HH:MM:SS format
            result = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
            break;
    }
    return result;
};
