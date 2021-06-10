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

// var i = 0;
// for(i; i < 10; i++) {
//     if (i === 4) {
//         continue;
//     }
//     console.log(i);

//     if (i === 5) {
//         break;
//     }   
// }

i = 2;
for (i; i < 15; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);

    if (i === 14) {
        break;
    }
}

i = 7;
while (i < 12) {
    console.log('while', i++);
}

i = 0;
do {
    console.log('do while', i++);
} while (i < 25);



function fnfoo(param1, param2) {
    var foo = param1 * 10;
    var boo = param2 * 10;

    return boo + foo;
}

console.log ('fnfoo(2,3) = ', fnfoo (2,3));


var fnBoo = function() {
    console.log('function expression');
}

fnBoo()

function fibonnachi(n) {
    if (n === 2 ) {
        return 1;
    }
    if (n <= 1) {
        return 0;
    }
    return fibonnachi(n - 1) + fibonnachi(n - 2);
}
for ( var i = 1; i< 10; i++) {
    console.log(fibonnachi(i));
}


var tmp = document.querySelector('p');
tmp.classList.add('warning');

tmp.innerHTML = '*\n**\n***\n****\n*****';