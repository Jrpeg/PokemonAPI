const dex = document.getElementById('pokecard');
const fullPokeArray = [];
const pokemon = [];

// Return 150 Pokemon With Some Stats
const pokemonGenerate = () => {	
  for(i=1; i < 151; i ++) {  
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      fetch(url)
        .then((res) => {return res.json()})
          .then((data) => {
            pokemon.name = data.name;
            pokemon.id = data.id;
            pokemon.image = data.sprites.front_default;
            let pokeArray = [pokemon.name, pokemon.id, pokemon.image]
            addtoDex(pokeArray)
            })
	}
}

//Add 150 to Array for working with
function addtoDex(pokeArray){
  fullPokeArray.push(pokeArray)
  if(fullPokeArray.length > 149){
    generatePokemon()
  }
}

//Generate 2 random Pokemon
function generatePokemon(){
	for(i = 0; i < 2; i++){
    let	choice = fullPokeArray[Math.floor((Math.random() * 150) + 1)];
    writeToDoc(choice)
    }
  
}

function writeToDoc(choice){
console.log(choice);
const pokehtml =
        		`<div class="card" id="${choice[0]}">
        			<div><img class="pokeimage" src="${choice[2]}">
            		<div class="pokedata">
        					<h5 class="pokeid">${choice[1]}:  </h5>
            			<h2 class="pokename">${choice[0].toUpperCase()}</h2>
            		</div>
                <hr>
                <br>
                <b>Pokemon</b>
        			 </div>
             </div>`
        dex.innerHTML += pokehtml;
}



pokemonGenerate()
