const {
  or,
  and,
  calculateTruthTable,
} = require("../../utils/truthTableHelpers");

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

// [a, b,c] = [0, 0,0];
// [a, b,c] = [0, 1,0];
// [a, b,c] = [1, 0,0];
// [a, b,c] = [1, 1,0];

/*** !A || (A && B) */
console.log(`!A || (A && B)`);
let a = 0;
let b = 0;
let c = 0;
calculateTruthTable(+!a, or, and(a, b));
[a, b] = [0, 1];
calculateTruthTable(+!a, or, and(a, b));
[a, b] = [1, 0];
calculateTruthTable(+!a, or, and(a, b));
[a, b] = [1, 1];
calculateTruthTable(+!a, or, and(a, b));

/*** B || !A */
console.log(`B || !A`);
[a, b] = [0, 0];
calculateTruthTable(+!a, or, b);
[a, b] = [0, 1];
calculateTruthTable(+!a, or, b);
[a, b] = [1, 0];
calculateTruthTable(+!a, or, b);
[a, b] = [1, 1];
calculateTruthTable(+!a, or, b);

/*** !(A && !B) */
console.log(`!(A && !B)`);
[a, b] = [0, 0];
console.log(+!and(a, +!b));
[a, b] = [0, 1];
console.log(+!and(a, +!b));
[a, b] = [1, 0];
console.log(+!and(a, +!b));
[a, b] = [1, 1];
console.log(+!and(a, +!b));

/*** !(A || !B) */
console.log(`!(A || !B)`);
[a, b] = [0, 0];
console.log(+!or(a, +!b));
[a, b] = [0, 1];
console.log(+!or(a, +!b));
[a, b] = [1, 0];
console.log(+!or(a, +!b));
[a, b] = [1, 1];
console.log(+!or(a, +!b));

/*** A || !A */
console.log(`A || !A`);
[a, b] = [0, 0];
calculateTruthTable(a, or, +!a);
[a, b] = [0, 1];
calculateTruthTable(a, or, +!a);
[a, b] = [1, 0];
calculateTruthTable(a, or, +!a);
[a, b] = [1, 1];
calculateTruthTable(a, or, +!a);

/*** B && !B */
console.log(`B && !B`);
[a, b] = [0, 0];
calculateTruthTable(b, and, +!b);
[a, b] = [0, 1];
calculateTruthTable(b, and, +!b);
[a, b] = [1, 0];
calculateTruthTable(b, and, +!b);
[a, b] = [1, 1];
calculateTruthTable(b, and, +!b);

/*** A && B || !C */
console.log(`A && B || !C`);
[a, b, c] = [0, 0, 0];
calculateTruthTable(and(a, b), or, +!c);
[a, b, c] = [0, 0, 1];
calculateTruthTable(and(a, b), or, +!c);
[a, b, c] = [0, 1, 0];
calculateTruthTable(and(a, b), or, +!c);
[a, b, c] = [0, 1, 1];
calculateTruthTable(and(a, b), or, +!c);
[a, b, c] = [1, 0, 0];
calculateTruthTable(and(a, b), or, +!c);
[a, b, c] = [1, 0, 1];
calculateTruthTable(and(a, b), or, +!c);
[a, b, c] = [1, 1, 0];
calculateTruthTable(and(a, b), or, +!c);
[a, b, c] = [1, 1, 1];
calculateTruthTable(and(a, b), or, +!c);

/*** !A || (B && C) */
console.log(`!A || (B && C)`);
[a, b, c] = [0, 0, 0];
calculateTruthTable(+!a, or, and(b, c));
[a, b, c] = [0, 0, 1];
calculateTruthTable(+!a, or, and(b, c));
[a, b, c] = [0, 1, 0];
calculateTruthTable(+!a, or, and(b, c));
[a, b, c] = [0, 1, 1];
calculateTruthTable(+!a, or, and(b, c));
[a, b, c] = [1, 0, 0];
calculateTruthTable(+!a, or, and(b, c));
[a, b, c] = [1, 0, 1];
calculateTruthTable(+!a, or, and(b, c));
[a, b, c] = [1, 1, 0];
calculateTruthTable(+!a, or, and(b, c));
[a, b, c] = [1, 1, 1];
calculateTruthTable(+!a, or, and(b, c));
