// a promise is an object representing a eventual completeion or failure of async operations

function myPromise(){
    return new Promise( (resolve, reject)=>{
        const available = false;
        if(available){
            resolve("promise is true")
        } else {
            reject("promise failed")
        }
    })
}

 

myPromise()
.then( (cal)=>{
    console.log(cal);
    
})
.catch((err)=>{
    console.log(err);
    
})
.finally(()=>{
    console.log("promise executed");
    
})

