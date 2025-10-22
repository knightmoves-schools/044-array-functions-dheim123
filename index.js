var automobiles = ['car', 'truck', 'motorcycle'];
automobiles.push('airplane', 'airplane');
automobiles.unshift('bike', 'helicopter');
var automobilesCopy = automobiles;
automobiles.pop();
automobiles.shift();

document.getElementById("result").innerHTML = automobiles;

