// setTimeout(()=>{
//     console.log("1");
    
// },999)

// setTimeout(()=>{
//     console.log("2");
    
// },10)

function beakecake(mycallback){
    console.log("1");
    setTimeout(()=>{
        console.log("2");
        mycallback();
    },1000)
    console.log("4");
    
    
}
beakecake(()=>{
    console.log("3");
})

//write a program without using  promish if cake is ready then eat cake otherwise wait for cake to be ready


// with promis
