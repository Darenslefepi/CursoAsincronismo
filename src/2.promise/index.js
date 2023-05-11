const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
});

const cows = 111;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve (`We have ${cows} cows on the farm`);
    } else {
        reject (`There is only ${cows} cows, are not enough`)
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
}).finally(() => console.log('Finally'));


//Playground Pag 12
function delay(time, message) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(message);
      }, time);
    });
  }
//crando una variable pro
  export function delay(time, message) {
    const pro = new Promise(function (resolve, reject) {
      if (time >= 0) {
        window.setTimeout(() => {
          resolve(message)
        }, time)
      } else {
        reject("Time cannot be negative")
      }
    })
    return pro
  }

