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

function first() {
    return adjectives[rand_adj];
}

function second() {
    return shop_name[rand_shop];
}

function third() {
    return another_word[rand_another];
}

console.log(first() + " " + second() + " " + third());