//using asynchronous


/*
function  myfunction(){

    setTimeout(()=>{
        console.log("Task completed")
    },2000)
}
myfunction()
console.log("complete")
*/








//with arrow function
/*
const myfunction = () => {

    setTimeout(() => {
        console.log("work in progress")
    }, 2000)
}



myfunction()

console.log("complete work")

*/







//when function inform that run a function after getting task complete

//using call back


/*
function myfunc(callback){

    setTimeout(() => {
        console.log("work is in progress")

        callback();
    }, 2000)
}


function callback(){
    console.log("work is completed")
}

myfunc(callback)
*/



/*
const work = (callback) => {

    setTimeout(() => {
        console.log("work is in progress")

        callback();
    }, 2000)
}


const callback = () => {
    console.log("work is completed")
}

work(callback)

*/





//with promise instead of call back

/*
const mywork =()=>{


    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            console.log("work is in progress ---------")
            console.log("work is in progress ---------")
            console.log("work is in progress ---------")

            resolve();
           // reject()

        },1000)
    })

}

mywork()

*/

//handeling error 


/*
const mywork =()=>{


    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            console.log("work is in progress ---------")
            console.log("work is in progress ---------")
            console.log("work is in progress ---------")

           // resolve();
            //reject("Your work not completed till now")

            //now create a error object for handeling errors

            ///for showing   console.log(error.message)

            reject(new Error("your work is not completed"))

        },1000)
    })

}

mywork().then(()=>console.log("Work is completed"))
// .catch(error => console.log(error))
.catch(error => console.log(error.message))

*/




//handeling resolve


const mywork =()=>{


    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            console.log("work is in progress ---------")
            console.log("work is in progress ---------")
            console.log("work is in progress ---------")

           resolve("ooo man sucess completes your all work");
          

        },1000)
    })

}

mywork().then(response =>console.log(response))
// .catch(error => console.log(error))
.catch(error => console.log(error.message))
