function is_usZipCode(str) {

    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
       console.log("It is US Zipcode dude");
    } 
    else {
       console.log("It is not US Zipcode bro");
    }
 }