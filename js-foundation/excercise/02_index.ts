const accout = [
     { 
    name:"john",
    accountNumber:12345,
    balance:500
}, 

]

function createAccount(name :string,accountNumber:number,  initialBalance:number){

    let account = {
        name:name,
        accountNumber:accountNumber,
        balance:initialBalance
    }
    accout.push(account)

    return account

}


// console.log(createAccount("michel", 5578 , 500))
console.log(accout);


function deposit(account:number, amount:number){

    accout.forEach((acc) => { 
     if(acc.accountNumber ===account){
        acc.balance +=amount
     }
    })
}

deposit(12345,300)
console.log(accout);


function withdraw(account:number , amount:number){
    accout.forEach((acc)=>{
        if(acc.accountNumber ===account){
            if(acc.balance >= amount && amount > 0){
                acc.balance -=amount
            }
        }
    })
}
withdraw(12345,200)
console.log(accout);



function checkBalance(account:number){

    let balance = 0
    accout.forEach((acc)=>{
        if(acc.accountNumber ===account){
            balance = acc.balance
        }
    })
    return balance
}

console.log(checkBalance(12345))