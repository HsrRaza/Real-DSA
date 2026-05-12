// built-in methods
const num =13;
// converts decimal to binary string

// console.log(num.toString(2))

// convert binary string to decimal 
const binaryStr= "1101";
// console.log(parseInt(binaryStr , 2));


// implementing a binary rep methods 1 divison by 2

function decimalToBinaryDivision(n){
    if(n==0) return '0'
    if(n < 0) return "-" + decimalToBinaryDivision(-n);

    let binary = ""
    let originalNum = n
    const steps = [];

    while (n > 0){
        const reminder  = n % 2;

        steps.push(`${n} / 2 = ${Math.floor(n/2)} remainder ${reminder} `);

        binary =reminder + binary;
        n =Math.floor( n / 2)
    }

    console.log("\n Conversion steps");
    steps.forEach(step => console.log( `${step}`))
       console.log(`Result: ${originalNum}₁₀ = ${binary}₂`);

    return binary
    


    
}

decimalToBinaryDivision(13);
