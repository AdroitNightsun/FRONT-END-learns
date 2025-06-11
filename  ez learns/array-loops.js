// * Find Max Number
//     * Given: [4,9,2,7]
//     * Output: 9
let a = [4,9,2,7];
let max = a.length;
for(let i = 0; i < a.length;i++){
    if(a[i]>max){
        max = a[i];
    }
}

console.log(max);

// * Find the Minimum Number
//     * Given: [4,9,2,7]
//     * Output: 2
let las = a.length;
for(let i = a.length; i > 0;i--){
    if(a[i]<las){
        las = a[i];
    }
}

console.log(las);

// * Count Even Numbers
//     * Given: [1,2,3,4,5]
//     * Output: 2 (2 and 4)
let b = [1,2,3,4,5];

for(let i = b[0]; i < b.length;i++){
    if(i % 2 === 0){
        console.log(i);
    };
};

// * Count Occurrences of a Number
//     * Given: [1,2,2,3,2], target: 2
//     * Output: 3
let c = [1,2,2,3,2];
let oc = 2;
let count = 0;

for(let i = 0; i < c.length; i++){
    if(c[i] === oc){
        count++;
    };
}
console.log(count);

// * Reverse an Array
//     * Given: [1,2,3]
//     * Output: [3,2,1]
let d = [1,2,3];
let ed = [];
for(let i = d.length -1; i>=0; i--){
    ed.push(d[i]);
};
console.log(ed);

// * Remove Duplicates
//     * Given: [1,2,2,3]
//     * Output: [1,2,3]
let e = [1,2,2,3]; //main array
let ee = []; //for output
let seen = {}; //empty object to store seen elements
for(i = 0; i < e.length; i++){
    if(!seen[e[i]]){
        ee.push(e[i]);
        seen[e[i]] = true;
    };
};
console.log(ee);

// * Check if  Array Contains a Value
//     * Given: [5,7,8], Value :7
//     * Output: true
let f = [5,7,8];
let seeen = 7;

for(let i = 0; i<=f.length; i++){
    if(seeen === f[i]){
        console.log(true);
        break;
    };
};

// * Double All Values
//     * Given: [1,2,3]
//     * Output: [2,4,6]
let g = [1,2,3];
let eg = [];

for(let i = 0; i < g.length; i++){
    eg.push(g[i]*2);
};
console.log(eg);

// * Filter Out Odd Numbers
//     * Given: [1,2,3,4]
//     * Output: [2,4]
let h = [1,2,3,4];
let eh = [];

for(let i=0; i<h.length; i++){
    if(h[i] % 2 === 0){
        eh.push(h[i]);
    };
};
console.log(eh);


const numbers = [5,8,9];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// doubled is now [2, 4, 6]