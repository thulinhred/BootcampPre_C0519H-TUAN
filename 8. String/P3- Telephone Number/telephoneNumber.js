function is_phoneNumber(str) {

   regexp = /^[0-9]{2}-{1}[0-9]{10}/;
   if (regexp.test(str)) {
      console.log("It seems like a telephone number");
   }
   else {
      console.log("It is not a telephone number you dumb");
   }
}