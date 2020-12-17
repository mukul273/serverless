/* function doStuff(data, callback) {
    callback("Done !!")
}

doStuff(true, (result)=>console.log(result)) */

// Promises
function doStuff(data) {
    return new Promise((resolve, reject)=> {
        let successmsg = {
            status: 'Successful',
            message: 'All is well'
        };

        let errormsg = {
            status: 'Error!!!',
            message: 'Error, All is not well'
        };

        if(typeof data === 'boolean' && data === true)
            resolve(successmsg);
        else
            reject(errormsg);
    });
}

/* doStuff(true).then(
    (successmsg) => {
        console.log(successmsg);
    },
    (errormsg) => {
        console.log(errormsg);
    }
);

doStuff(false).then(
    (successmsg) => {
        console.log(successmsg);
    },
    (errormsg) => {
        console.log(errormsg);
    }
); */

// Promises chaining
doStuff(true).then(
    () => {
        console.log("First resolve");
        return doStuff(false);
    }
).then(
    () => {
        console.log("Second resolve");
    }
).catch(
    () => {
        console.log("Error !! Catch block");
    }
);