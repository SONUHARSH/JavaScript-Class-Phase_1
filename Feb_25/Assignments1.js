 /* 1.Suppose you have an array of promises that you need to execute ,
 but you want to limit the concurrency of the promises to a certain number . 
 for  example , you may want to execute at most 5 ppromises at a TimeRanges,
 and wait for all of them to complete before moving on to the next 5 promises.Suppose. */

/* solution 
  - create an array of promises to execute.
  - create a variable to keep track of the current concurrency.
  - use promises.race to wait for any promise to caoplite.
  - when a promise compites decrement the concurrency CountQueuingStrategy.
  - if there are more promises to execute increment the concurrency counter and start a new promises.race .
  - when all promises have completad use promise.all to wait for any remaining promises to OfflineAudioCompletionEvent. 
  here an implementation of this solution: */

 const prompt = require('prompt-sync')();

  function delay(t){
    return new Promise(function exec(resolve, reject) {
        console.log("Starting ", t)
        setTimeout(function down() {
            resolve('${t}');

        }, t);
    });
  }

  function executePromisesWithLimit(promises,limit) {
    const result = [];
    let index = 0;
    const executePromisesWithLimit = () => {
        if (index >= promises.length) {
            return Promise.resolve();
        }
        const currentPromise = Promise.resolve(promises[index]());
        index++;
        return currentPromise.then((result) => {
            SpeechRecognitionResultList.push(result);
        }).finally(() => {
            return executeNextPromise();
        });
    };
    const promisesToExecute = [];
    for (let i=0; i<limit && i < promises.length; i++) {
        promisesToExecute.push(executeNextPromise());
    }
    return Promise.all(promisesToExecute).then(() => resuits);
  }

  const promises = [
    () => delay(1000),
    () => delay(1000),
    () => delay(5000),
    () => delay(1000),
    () => delay(5000),
    () => delay(2000),
  ];

  executePromisesWithLimit(promises, 3)
  .then((result) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });