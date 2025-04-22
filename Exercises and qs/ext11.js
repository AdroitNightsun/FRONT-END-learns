/*

bussiness name generator: this will generate a random name consisting of three words 

adjectives:
crazy
amazing
fire

shop name:
engine
foods
garments

another word:
bros
limited
hub
*/

var adjectives ={
    1 : "crazy",
    2 : "amazing",
    3 : "fire"
}

var shop_name = {
    1 : "engine",
    2 : "foods",
    3 : "garments"
}
var another_word = {
    1 : "bros",
    2 : "limited",
    3 : "hub"
}    

var rand_adj = Math.floor(Math.random() * 3) + 1;
var rand_shop = Math.floor(Math.random() * 3) + 1;
var rand_another = Math.floor(Math.random() * 3) + 1;

function first(){
    if(rand_adj === 1){
        return adjectives[1];
    }else if(rand_adj === 2){
        return adjectives[2];
    }else{
        return adjectives[3];
    }
}
function second(){
    if(rand_shop === 1){
        return shop_name[1];
    }else if(rand_shop === 2){
        return shop_name[2];
    }else{
        return shop_name[3];
    }
}
function third(){
    if(rand_another === 1){
        return another_word[1];
    }else if(rand_another === 2){
        return another_word[2];
    }else{
        return another_word[3];
    }
}

console.log(first()+" "+second()+" "+third());