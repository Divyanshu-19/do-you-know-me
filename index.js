var readlineSync = require("readline-sync");
var chalk = require("chalk");

var username = readlineSync.question("What is your name: ");

console.log("Welcome", username, "to DO YOU KNOW ME");

var questions = [
  {
    question: "What is my petname?🙃",
    answer: 'Dev',
    remark: "HaHa that was easy"
  },
  {
    question: "Where do i live?😕",
    answer: "Delhi",
    remark: "Nice!!"
  },
  {
    question: "Favourite food?",
    answer: "burger",
    remark: "Perhaps you should take me to a treat🙃"
  },
  {
    question: "Favourite Series",
    answer: "Breaking bad",
    remark: "Guess i talk about it way too much😂"
  },
  {
    question: "Favourite book???",
    answer: "The brother karmazov",
    remark: "Wow, perhaps you know me more than me😂 😂"
  }
]

var score = 0;
console.log();
console.log();
console.log("-------------------------------------------------");
for(var i=0; i<questions.length; i++){
  console.log(questions[i].question);
  var userAnswer = readlineSync.question();
  if(userAnswer.toUpperCase() === questions[i].answer.toUpperCase()){
    console.log(chalk.black.bgGreen(questions[i].remark));
    score+=1;
  }
  else{
    console.log(chalk.bgRed("Wrong, Try next one"));
  }
  console.log();
}


if(score>=4){
  console.log("Wow!!", username, "looks like we are close buddy!!");
}
else{
  console.log("Hey", username, "We should catch up!!!");
}