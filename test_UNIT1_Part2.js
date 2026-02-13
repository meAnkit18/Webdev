//Asynchronous Programming===================================
// JS is by defaut the Syncronous , So to make tasks run in parallel asyn is
// used for Common asynchronous tasks : 
// Fetching data from APIs
// Timers (setTimeout, setInterval)
// Reading files (Node.js)
// Database calls
// Event listeners (clicks, keypresses)



/* // simple sync calls
console.log("1");
console.log("2");
console.log("3");  */

// simple async calls
/* console.log("1");

setTimeout(() => {
    console.log("2");
}, 5000);

console.log("3"); */ 


// function calls in JS
/* console.log("Before Execution")
for (var i = 0; i < 2; i++) {
    setTimeout(function () {
        console.log("Set Time put Message");
        func1()
    }, 1000)
    func2()
}
console.log("After Execution")
function func1() {
    console.log("In Function 1")
}
function func2() {
    console.log("In Function 2")
} */


// Function calls in Async
/* console.log("1. Start");
setTimeout(()=>{
    console.log("2. Cake is ready")
},2000)
console.log("3. I am working on laptop")  */
 
// functions using callback
//A callback is a function passed into another function to run later.

// here bake cake function defined with call to another 
// function mycallback which is defined as anonymous function and will be called in 
// callback in setTimeout
// 
/* function bakeCake(myCallBack)
{
    console.log("1. Cake is in Oven");
    setTimeout(() =>{        
    console.log("2. Cake is baked");
    myCallBack(); 
    }, 2000)
}
/// Here using anonymous function because this is very particular to the bakecakeing process 
// but we couls have made the seperate fuction if that one is reuable to some other method
bakeCake(()=>{
    console.log("3. Cake is ready")
})  */


// Promises====================================================================

// use of Promise using then and catch
/* function bakeCake()
{
    return new Promise((myResolve, myReject) =>{
        console.log("1. Baking Cake");
        setTimeout(()=>{
            let flag = true; // try this by changing value
            if(flag)
                myResolve("2. Cake is Ready ");
            else
                myReject("2. Cake is Burnt");

        },2000)
    });
}

bakeCake().then((msg)=>{
        console.log(msg);
        console.log("3. Lets eat cake");
    }).catch((msg)=>{
        console.log(msg);
        console.log("3. Go for PIZZA instead");
    }); */



// use of promise using try catch , asyn and await
// use of Promise using then and catch
function bakeCake()
{
    return new Promise((myResolve, myReject) =>{
         setTimeout(()=>{
            let flag = false; // try this by changing value
            if(flag)
                myResolve("2. Cake is Ready ");
            else
                myReject("2. Cake is Burnt");

        },2000)
    });
}

async function party() {
    console.log("1. Start Baking")
    try{
        const cake = await bakeCake();
        console.log(cake)
        console.log("3. Enjoy cake");

    }
    catch(e){
        console.log(e+"  Error...")
        console.log("3. What about Pizza??");
    }  
    
}
party();

///Imp Note
/* Use then().catch() when: You’re writing short chains, You don’t want an async function
You’re composing Promises functionally

Use async/await + try/catch when: Logic is complex, You have loops, conditionals, early returns
You care about readability (most modern codebases do) */

