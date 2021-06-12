// Q2 BABY STEPS
var inptSum = 0

for (var i = 2; i < process.argv.length; i++){
  inptSum += parseInt(process.argv[i]);
};

console.log(inptSum);
