//1.
function numberswap(n){
  var output = ''
  for(i=1;i<=n;i++){
    if(i%12 === 0){output +='OKYES '}
    else if(i%4 === 0){output +='YES '}
    else if(i%3 === 0){output +='OK '}
    else{output += i+' '}
  }
  return output;
}

//2.
//a.
function a(n){
	var a = ''
	for(i = 0 ; i <= 5 ; i++ ){
		for(j = 0 ; j < i ; j++ ){
			a = a + (i);
		}
		console.log(a)
		a ='';
	}
}


//b.
function b(n){
	var a = ''
	for(i = 0 ; i < 5 ; i++ ){
		for(j = i ; j >=0 ; j-- ){
			a = a + (j+1);
		}
		console.log(a)
		a ='';
	}
}


//c.
function c(n) {
	let temp = 1 
	let bool = true
	for (let i = 1; i <= n; i++) {
		let output = '' //string
		for (let j = 1; j <= i; j++) {
			output += `${temp}`
			if (bool === false) {
				temp -= 1
				if (temp === 1) {
					bool = true
				}
			} else if (bool === true) {
				temp += 1
				if (temp === 5) {
					bool = false
				}
			}
		}
		console.log(output)
	}
}

//d.
function d(n) {
	for (let i = 0; i < n; i++) {
		let output = '' // string
		output += `${i + 1} `
		output += `${(2*n) - i} `
		output += `${(2*n) + i + 1} `
		output += `${(4*n) - i} `
		output += `${(4*n) + i + 1}`

		console.log(output)
	}
	
}

3.
function sort(n){
	//n.sort(function(a, b){return a - b});
  for (let i = 0; i < n.length; i++){
  		if (n[i] % 3 == 0){
      	n.splice(i, 1);
        i--;
      }
  	}
  n.sort(function(a, b){return a - b});
  return n; 
}
