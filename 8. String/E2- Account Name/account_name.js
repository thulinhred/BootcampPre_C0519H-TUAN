function isAccountName(str) {

   regexp = /^[_a-z0-9]{6,}$/;

   if (regexp.test(str)) {
      console.log("It is avaiable");
   }
   else {
      console.log("It is not avaiable");
   }
}