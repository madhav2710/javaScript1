const accountid = 1234567890;
let accountName = "John Doe";
var accountBalance = 1000.50; //it is not used in modern JavaScript, prefer 'let' or 'const'
sip =100;
let cip;// Initializing 'cip' without a value will be undefined
console.table({
  accountid,
  accountName,
  accountBalance,
  sip,
  cip
});