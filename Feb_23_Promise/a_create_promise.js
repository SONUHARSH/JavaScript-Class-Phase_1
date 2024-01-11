function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function createPromiseWithTimeout() {
        return new Promise(function executor(resolve, reject) {
            
            setTimeout(function () {
                let num = getRandomInt(10);
                if(num % 2 == 0) {
                    // if the random number is even we fullfill
                    console.log("fulfilling");
                    resolve(num);
                    console.log("Completed resolving");
                    return num;
                } else {
                    // if the random number is odd we reject
                    console.log("rejecting");
                    reject(num);
                    console.log("Completed rejecting");
                    return num;
                }
            }, 1000);
        
        });
    }
    let y = createPromiseWithTimeout();
    console.log(y);
