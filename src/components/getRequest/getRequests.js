exports.getLukeSky = function (){
	return fetch('http://swapi.co/api/people/1').then(res => res.json());
}