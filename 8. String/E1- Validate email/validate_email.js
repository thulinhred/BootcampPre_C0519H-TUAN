function isEmailAvaiable(str) {

    regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ;
    
    if (regexp.test(str)) {
       console.log("It is avaiable");
    } 
    else {
       console.log("It is not avaiable");
    }
 }