const data = {
    name:"aman",
    marks : [20,30,40,]
}


function calculateTotalMarks(marks:number[]){
    const total = marks.reduce((acc,mark)=> acc + mark, 0);
    return total;
}


console.log(calculateTotalMarks(data.marks));



function calculatePercentage(marks:number[]){
     const totalMarks = calculateTotalMarks(marks);

     const percentage = Math.round(((totalMarks /marks.length) / 100)* 100);

     return percentage
}

console.log(calculatePercentage(data.marks));



let percentage= calculatePercentage(data.marks)

function getGrade(percentage:number){
    if(percentage >= 90){
        return "A";
    }
    else if(percentage >= 80){
        return "B";
    }
    else if(percentage >= 70){
        return "C"
    }
    else if(percentage  >= 35) {
        return "D"
    }
    else{
        return "fail"
    }
}


console.log(getGrade(percentage));

function isPassed(percentage:number){
    
}
