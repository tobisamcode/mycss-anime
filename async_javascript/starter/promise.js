const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw is happening...');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win 🎉');
    } else {
      reject(new Error('You lost your money 😭'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
