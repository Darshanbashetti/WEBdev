
  var massMark = 78;
  var massJohn = 92;

  var heightMark = 1.69;
  var heightJohn = 1.95;

  let BMIMark;
  let BMIJohn;

  BMIMark = massMark / (heightMark * heightMark);
  console.log(BMIMark);

  BMIJohn = massJohn / (heightJohn * heightJohn);
  console.log(BMIJohn);

  let markHigherBMI = true;
  console.log(markHigherBMI);

/* Write your code below. Good luck! 🙂 */

  /* Write your code below. Good luck! 🙂 */

  var scoreDolphins = (96 + 108 + 89) / 3;
  var scoreKoalas = (88 + 91 + 110) / 3;

  if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
  } else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
  } else {
    console.log("Both win the trophy");
  }


  /*
  const firstname = "darshan";
  const lastname = "bashetti";

  const birthyear = 2001;
  const year = 2024;

  console.log(
    " Hi I'm " + firstname + lastname + " My age is " + (year - birthyear)
  );*/


  const firstname = "darshan";
  const lastname = "bashetti";

  const birthyear = 2001;
  const year = 2024;

  const newdarshan = `Hi Im ${firstname + lastname} i'm ${
    year - birthyear
  } old!`;
  console.log(newdarshan);


let dday='monday';
switch (dday){
    case 'monday':
    console.log("yes")
    break
  
    case 'tuesday':
    console.log("no")
    break
}
    



  const day = 24;
  day >= 26 ? console.log("Gay") : console.log("King");

  console.log(`i like to be ${day <= 25 ? "king" : "gay"}`);


  const bill = 500;

  var tip;

  console.log(
    `The bill was ${bill}, the tip was ${tip >= 50 && tip <= 300} ? ${
      tip * 0.15
    } : (${tip * 0.2}, and the total value ${bill * tip}.)`
  );


// The bill was 275, the tip was 41.25, and the total value 316.25.

  function fruitProcessor(apples, oranges) {
    const juice = `This juice contains ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  fruitProcessor(2, 3);
  const mixJuice = fruitProcessor(3, 4);
  console.log(mixJuice);

  function logger() {
    console.log("My name is darshnan");
  }
  let abc = logger();
  console.log(abc);
  logger();
  logger();
  logger();
  logger();
