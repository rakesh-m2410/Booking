var express = require('express');
var router = express.Router();
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number of table present in the restaurant ', (n) => {
  var availableTable = [];
  for(let i=1; i<=n; i++){
     availableTable.push(i);
  }
  // while(!availableTable.length == 0){
  console.log("Available Table: "+availableTable);
  var B = "B";
  var C = "C";
  var Q = "Q";
  var bookedTables = [];
  
    rl.question('Enter to B for Book or C for Cancel ', (n) => {
      if(n == B || n == 'b'){
        console.log("b");
        console.log("Available Table: "+availableTable);
        rl.question('Enter table number to book ', (n) => {
          if(availableTable.includes(n)){
            console.log(`Table number ${n} is booked`);
            bookedTables.push(n);
            console.log("Booked Tables"+bookedTables);
            availableTable.pop(n);
            console.log("Available Tables: "+ availableTable);
        } else{
            console.log("Table number is not available");
        }
        });
      }else if(n == C || n == 'c'){
        console.log("c");
        console.log("Booked Tables"+bookedTables);
        rl.question('Enter table number to cancel', (n) => {
          if(bookedTables.includes(n)){
            console.log(`Table number ${n} is booked`);
            bookedTables.pop(n);
            console.log("Booked Tables"+bookedTables);
            console.log("Available Tables: "+ availableTable);
        } else{
            console.log("Table number is not available");
        }
        });

      }else if(n == Q){
        // break;
      }
       else{
         console.log("Enter valid letter");
       }       
    });
    // rl.close();
  // }  
  // rl.close();
 
});


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
