// here will by JavaScript code ...
// one line comments
/*
* many lines 
* comment
*/

// boolean operators AND (&&) OR (||) NOT (!)

var a = false;
var b = true;

console.log('a = false b = true');

console.log('a && b', a && b);
console.log('!a && b', !a && b);
console.log('!a && !b', !a && !b);


console.log('a || b', a || b);
console.log('!a || b', !a || b);
console.log('a || !b', a || !b);

// conditional operators

// if () {

// } else if {

// } else {

// }

// var foo = 3;
// if (foo < 4) {
//     console.log('foo less then 4')
// }

var foo = -5;
if (foo < 8 && foo > 4) {
    console.log('foo less then 8 and more 4');
} else if (foo < -6) {
    console.log('foo is negative');
} else {
    console.log('foo is');
}


// SWITCH CASE 
var foo = 4;
switch(foo) {
    case 4: {
        console.log('foo === 4');
        break;
    }
    case 3: {
        console.log('foo === 3');
        break;
    }
    case 2: {
        console.log('foo === 2');
        break;
    }
    case 1: {
        console.log('foo === 1');
        break;
    }
    case 0: {
        console.log('foo === 0');
        break;
    }
    default: {
        console.log('default');
    }    
}

// Тернарный оператор 

var tmp = foo > 3 
? console.log ('>3')
: console.log ('<3');

foo = 5;
var tmp = foo > 4
? '>4'
: '<4';

console.log(tmp);

if (foo > 6) {
    tmp = 'foo > 6';
} else {
    tmp = 'foo < 6;'
}

console.log(tmp);


// Loops

var i = 0;
for(i; i < 10; i++) {
    if (i === 4) {
        continue;
    }
    console.log(i);

    if (i === 5) {
        break;
    }   
}