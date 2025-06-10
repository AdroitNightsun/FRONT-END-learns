let a = [4,9,2,7];
//9
let max = a.length;
for(let i = 0; i < a.length;i++){
    if(a[i]>max){
        max = a[i];
    }
}

console.log(max);

let las = a.length;
for(let i = a.length; i > 0;i--){
    if(a[i]<las){
        las = a[i];
    }
}

console.log(las);

let b = [1,2,3,4,5];

for(let i = b[0]; i < b.length;i++){
    if(i % 2 === 0){
        console.log(i);
    };
};

let c = [1,2,2,3,2];
let oc = 2;
let count = 0;

for(let i = 0; i < c.length; i++){
    if(c[i] === oc){
        count++;
    };
}
console.log(count);

let d = [1,2,3];
let ed = [];
for(let i = d.length -1; i>=0; i--){
    ed.push(d[i]);
};
console.log(ed);

let e = [1,2,2,3];
let ee = [];
let seen = {};
for(i = 0; i < e.length; i++){
    if(!seen[e[i]]){
        ee.push(e[i]);
        seen[e[i]] = true;
    };
};
console.log(ee);