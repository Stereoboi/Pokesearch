const searchFormRef = document.querySelector('#search-form');
const pokemonGalleryRef = document.querySelector('.pokemog-gallery')
const modal = document.querySelector("[data-backdrop]");


searchFormRef.addEventListener('submit', onSearchPokemon);
pokemonGalleryRef.addEventListener('click', onClickCard);
modal.addEventListener('click', closeModal);

function onSearchPokemon(event) {
    event.preventDefault();
    const searchParameter = event.currentTarget.elements.searchQuery.value;
    
    if (searchParameter === '' ) {
        return
    }
    fetchPokemon(searchParameter)
    console.log(typeof(searchParameter));
}


async function fetchPokemon(searchParameter) {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${searchParameter}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const pokemon = data.results.map((result, index) => ({
        ...result,
        apiURL: result.url,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        
    }));
    console.log(pokemon);
    renderPokemon(pokemon)
}
    

function renderPokemon(pokemon) {
    const pokemonHTMLString = pokemon.map((poke) => `
    <li class="card" >
        <img class="card-image" src ="${poke.image}"/>
        <button class="card-title card-btn">${poke.name}</button>
    </li>
    `
    ).join('');
    pokemonGalleryRef.insertAdjacentHTML('beforeend',pokemonHTMLString);
}

async function selectPokemon(name) {
    const emptyArrey = [];
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    const pok = {
        name: pokeman.name,
        id: pokeman.id,
        image: pokeman.sprites['front_default'],
        type: pokeman.types.map((type) => type.type.name).join(', '),
        statsName: pokeman.stats.map((stat) => stat.stat.name),
        statsValue: pokeman.stats.map((stat) => stat.base_stat)
    }
    emptyArrey.push(pok);
    // console.log(emptyArrey);
    // console.log(pokeman);
    renderModalPokemon(emptyArrey)
}


function onClickCard(event) {
    if (!event.target.classList.contains("card-title")) {
        return
    }
    const pick = event.target.textContent;
        console.log(pick);
    selectPokemon(pick);
    modal.classList.toggle('is-hidden')
}

function renderModalPokemon(pokemon) {
    const pokemonHTML = pokemon.map(poke => `
    <div class="popup">
        <div class="card-popup">
        <button class="modal-btn" id="closeBtn">Close</button>
        <h3>Card ID#${poke.id}</h3>
            <img class="card-image" src ="${poke.image}"/>
            <h2 class="card-title">${poke.id}. ${poke.name}</h2>
            <p class="card-text">Type:${poke.type}</p>
            <p class="card-text">Basic info:${poke.statsName[0]}:${poke.statsValue[0]} | ${poke.statsName[1]}:${poke.statsValue[1]} |${poke.statsName[2]}:${poke.statsValue[2]} |${poke.statsName[3]}:${poke.statsValue[3]} |${poke.statsName[4]}:${poke.statsValue[4]} |${poke.statsName[5]}:${poke.statsValue[5]} </p>
            <p><small></small></p>
        </div>
    </div>
    `).join('');
    modal.innerHTML = pokemonHTML;
    
}

function closeModal() {
    modal.classList.toggle('is-hidden') 
}

