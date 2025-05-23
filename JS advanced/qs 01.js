//the magical sorting hat

let students = ["shubh", "dillon", "aujla", "moosewala", "47", "bali", "kr$na"];

let houses = [];

for(const student of students){
    if(student.length < 5){
        houses.push(" gryffindor")
    }else if(student.length < 6){
        houses.push(" hufflepuff")
    }else if(student.length < 8){
        houses.push(" ravenclaw")
    }else{
        houses.push(" slytherin")
    }
};

console.log(houses);