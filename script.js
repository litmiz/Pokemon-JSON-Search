// Create Objects

const pokemon1 = {
    name: 'Bulbasaur',
    pokemonId: 1,
    description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    img: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    type: ['grass', 'poison']
}

const pokemon2 = {
    name: 'Squirtle',
    pokemonId: 7,
    description: "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.  Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    img: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    type: ['water']
}

const pokemon3 = {
    name: 'Jigglypuff',
    pokemonId: 39,
    description: "When this Pokémon sings, it never pauses to breathe. If it is in a battle against an opponent that does not easily fall asleep, Jigglypuff cannot breathe, endangering its life.  Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    img: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    type: ['normal', 'fairy']
}

const pokemon4 = {
    name: 'Wigglytuff',
    pokemonId: 40,
    description: "Wigglytuff's body is very flexible. By inhaling deeply, this Pokémon can inflate itself seemingly without end. Once inflated, Wigglytuff bounces along lightly like a balloon.  Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
    img: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    type: ['normal', 'fairy']
}

const pokemon5 = {
    name: 'Oddish',
    pokemonId: 43,
    description: "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon's feet are thought to change shape and become similar to the roots of trees.  During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
    img: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    type: ['poison', 'grass']
}

const pokemon6 = {
    name: 'Gloom',
    pokemonId: 44,
    description: "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.  Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
    img: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/044.png",
    type: ['poison', 'grass']
}

const pokemon7 = {
    name: 'Vileplume',
    pokemonId: 45,
    description: "Vileplume has the world's largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.  Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
    img: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/045.png",
    type: ['poison', 'grass']
}

const pokemon8 = {
    name: 'Meowth',
    pokemonId: 52,
    description: "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.  Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.",
    img: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    type: ['normal']
}


allPokemons = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8];

///////////////////////////////

// Event listener

document.getElementById("searchBtn").addEventListener("click", function () {
    searchPokemon(document.getElementById("searchIn").value);
});

///////////////////////////////

// Filter Fuction

function searchPokemon(searchIn) {
    foundPokemons = [];
    for (let i = 0; i < allPokemons.length; i++) {
        if (searchIn == allPokemons[i].name) {
            foundPokemons.push(allPokemons[i]);
        }
        else if (allPokemons[i].type.includes(searchIn)) {
            foundPokemons.push(allPokemons[i]);
        }
    }
    if (foundPokemons.length == 0) {
        console.log('I dont like this pokemon or type');
    }
    else {
        console.log(foundPokemons); 
    }
}

///////////////////////////////
