//true + false             // 1
//12 / "6"                 // 2
//"number" + 15 + 3        // 'number153'
//15 + 3 + "number"        // '18number'
//[1] > null               // true
//"foo" + + "bar"          // 'fooNaN'
//'true' == true           // false
//false == 'false'         // false
// null == ''               // false
// !!"false" == !!"true"    // true
// ['x'] == 'x'             // true 
// [] + null + 1            // 'null1'
// 0 || "0" && {}           // {}
// [1,2,3] == [1,2,3]       // false
// {}+[]+{}+[1]             // '0[object Object]1'
// !+[]+[]+![]              // 'truefalse'
// new Date(0) - 0          // 0
// new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'
console.log(true + false);					// 1
console.log(12 / "6" );							// 2
console.log("number" + 15 + 3 );		// 'number153'
console.log(15 + 3 + "number");			// '18number'
console.log([1] > null);						// true
console.log("foo" + + "bar");				// 'fooNaN'
console.log('true' == true);				// false
console.log(false == 'false');			// false
console.log(null == '');						// false
console.log(!!"false" == !!"true");	// true
console.log(['x'] == 'x');					// true 
console.log([] + null + 1);					// 'null1'
console.log(0 || "0" && {});				// {}
console.log([1,2,3] == [1,2,3]);		// false
console.log({}+[]+{}+[1]);					// '0[object Object]1'
console.log(!+[]+[]+![]);						// 'truefalse'
console.log(new Date(0) - 0);				// 0
console.log(new Date(0) + 0 );			// 'Thu Jan 01 1970 02:00:00(EET)0'

