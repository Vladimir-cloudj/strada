// напишите программу с разными математическими операторами и разными типами данных. Например сложите строки, строку с числом, число с булевым значением и так далее
console.log(0 >= null);
console.log(null == undefined);
console.log(null === undefined);
console.log('true' == true);
console.log();
console.log();
console.log();
console.log();

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

