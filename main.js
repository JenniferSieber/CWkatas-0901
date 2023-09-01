// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/57284d23e81185ae6200162a
const topSecret = str => str.replace(/[a-z]/gi, ch => String.fromCharCode(ch.charCodeAt(0) + (/[abc]/i.test(ch) ? 23 : -3)))

//question1: The top secret file number is...
answer1="1850"
//question2: Super agent's name is...
answer2="fQT"
//question3: He stole the treasure is...
answer3="Train tire"

console.log(topSecret("Pb qdph lv Mrkq"));

// KATA 2 8kyu
// https://www.codewars.com/kata/5729b103dd8bac11a900119e
const fiveLine = s => {
  s = s.trim();
  let str = s;
  let arr = [s]
  for (let i = 1; i < 5; i++) {
    arr.push(s += str);
  } 
  return arr.join('\n');
}

 console.log(fiveLine("  a"));
 console.log(fiveLine("\txy \n"));

// KATA 3 7kyu
// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8
//args random # of numArrays of indices of arr
const shuffleIt = (arr, ...args) => {
  for ([a,b] of args) [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
}

console.log(shuffleIt([1,2,3,4,5],[1,2])); 
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3])); 

// KATA 4 7kyu
// https://www.codewars.com/kata/572af273a3af3836660014a1
const infiniteLoop = (arr, str, n) => {
  let len = arr.length;
  while (n--) {
    for (let i = 0; i < len; i++) {
      if (str === 'left') {
        arr[i].push( arr[(i + 1) % len]
          .shift() );
      }

      if (str === 'right') {
        arr[(i + 1) % len].unshift( arr[i]
          .pop() );
      }
    }
  }
  return arr;
}

console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left", 1));  
console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1));

// KATA 5 7kyu
// https://www.codewars.com/kata/572cb264362806af46000793
const threeInOne = arr => {
  let result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }

  return result;
}

console.log(threeInOne( [1,2,3]) );
console.log(threeInOne( [1,3,5,2,4,6,7,7,7]));
