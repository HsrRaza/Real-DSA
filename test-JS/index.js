const testCases = [
    {
    input: {
        baseamount:100,
        coupons: [{
            type: "percentage",
            value: 10
        }],

    },
    result: 106.2
    }

]

// lern about tdd 

const calculateCartAmount = (input) => {
    const {coupons , baseamount} = input;
    

    // const discountAmount = (baseamount * (coupons[0].value / 100));

    // const discountedAmount = (baseamount - discountAmount) ;
    // const finalAmount = discountedAmount + (discountedAmount * 0.18);

    for(const coupon of coupons){
        if(coupon.type === "percentage"){
            disc
        }
    }


    return finalAmount;
}


const isAlltestCasesPassed = testCases.every(testCase => {
    const result = calculateCartAmount(testCase.input);
    return result === testCase.result;
})

console.log(isAlltestCasesPassed);


/*

Cart 

1. Base amount (number)
2. apply coupnes (max 3)/*

Cart 

1. Base amount (number)
2. apply coupnes (max 3)
for ex: 10%, 20% (either percentage or value)
3. GST (e.g. 18%) luxury goods
4. Build system.


10 minutes

*/
for ex: 10%, 20% (either percentage or value)
3. GST (e.g. 18%) luxury goods
4. Build system.


10 minutes

*/