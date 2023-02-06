/*
here i take a input number then multiply this number with three then
add ten with this then divide with two and deduct from the rest number 
*/
function mindGame(takenNumber) {
  const abs = Math.abs(takenNumber);
  const multiply = abs * 3;
  const sum = multiply + 10;
  const division = sum / 2;
  const deduction = division - 5;
  return deduction;
}
console.log(mindGame(50));
/*
here i took a string and percent string length with two after that
i return it with even or odd
*/
function evenOdd(takenString) {
  if (takenString.length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(evenOdd("programmingHero"));
/*
here i take a input number and - it with 7 after i did if and else
with this rest number
*/
function isLGSeven(number) {
  const subs = number - 7;
  if (subs >= 7) {
    return number * 2;
  } else {
    return subs;
  }
}
console.log(isLGSeven(-15));
/*
here i took an array and did for loop on it
after that i did if section and got return in count 
*/
function findingBadData(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(findingBadData([2, -5, -7, -13]));
/*
here took three input for three friends and did multiply with three friends gem
and did total of all friends and then did if else  
*/
function gemsToDiamond(friendOne, friendTwo, friendThree) {
  let friendOneDiamond = friendOne * 21;
  let friendTwoDiamond = friendTwo * 32;
  let friendThreeDiamond = friendThree * 43;
  let totalDiamond = friendOneDiamond + friendTwoDiamond + friendThreeDiamond;
  if (totalDiamond > 1000) {
    totalDiamond = totalDiamond - 2000;
  }
  return totalDiamond;
}
console.log(gemsToDiamond(100, 5, 1));
