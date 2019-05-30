function isClassNameAvaiable(str) {

   regexp = /^[CAP][0-9]{4}[GHIKLM]/;

   if (regexp.test(str)) {
      console.log("It is avaiable");
   }
   else {
      console.log("It is not avaiable");
   }
}