function makeid(l) {
  // write your code here
	let chara="ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let res="";
	for(let i=0;i<l;i++){
		let index=Math.floor(Math.random()*chara.length);
		res+=chara[index];
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
// alert(makeid(l));
