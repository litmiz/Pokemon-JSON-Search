// // Create Objects

allPokemons = pokemons.pokemons;

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
        else if (allPokemons[i].types.includes(searchIn)) {
            foundPokemons.push(allPokemons[i]);
        }
    }
    if (foundPokemons.length == 0) {
        NotFoundPokemons();
    }
    else {
        showPokemons(foundPokemons); 
    }
}

///////////////////////////////

// showPokemons with DOM

function showPokemons(foundPokemons) {
    for (let i = 0; i < foundPokemons.length; i++) {
        const showDiv = document.getElementById("showDiv");
        const showPokemonName = document.createElement("h2");
        showPokemonName.textContent = foundPokemons[i].name;
        const showPokemonPic = document.createElement("img");
        showPokemonPic.setAttribute('src', foundPokemons[i].art_url);
        const showPokemonID = document.createElement("p");
        showPokemonID.textContent = `Pokemon ID: ${foundPokemons[i].pkdx_id}`;
        const showPokemonType = document.createElement("p");
        showPokemonType.textContent = `Pokemon Types: ${foundPokemons[i].types}`;
        const showPokemonDes = document.createElement("p");
        showPokemonDes.textContent = foundPokemons[i].description;
        const showPokemonLine = document.createElement("hr");

        showDiv.append(showPokemonName);
        showDiv.append(showPokemonPic);
        showDiv.append(showPokemonID);
        showDiv.append(showPokemonType);
        showDiv.append(showPokemonDes);
        showDiv.append(showPokemonLine);

    }
}

///////////////////////////////

// NotFoundPokemons with DOM

function NotFoundPokemons() {
    const showDiv = document.getElementById("showDiv");
    const showMessage = document.createElement("p");
    showMessage.classList.add("showDiv");
    showMessage.textContent = "Pokemon Not Found";

    showDiv.append(showMessage);
}

///////////////////////////////