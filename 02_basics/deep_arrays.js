const heros=["spiderman","ironman","thor"];
const dc = ["superman","flash","batman"];
// if we directly push it in arr1 it will push array inside array.
const marval = heros.concat(dc);

console.log(marval);

//spread method
const twmp = [...heros,...dc];
//.flat will return array of 1 dimension
// of and from method
