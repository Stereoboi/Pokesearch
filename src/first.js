const searchFormRef = document.querySelector('#search-form');
const pokemonGalleryRef = document.querySelector('.pokemog-gallery')
searchFormRef.addEventListener('submit', onSearchPokemon);

function onSearchPokemon(event) {
    event.preventDefault();
    const searchParameter = event.currentTarget.elements.searchQuery.value;

    const promises = [];
    const randonNumber = Math.random() * (15 - 1) + 1;
    for (let i = 1; i <= randonNumber; i++) {    
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
        
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', ')
        }));
        renderPokemon(pokemon);
        console.log(results);
    })
}
    

function renderPokemon(pokemon) {
    const pokemonHTMLString = pokemon.map((poke) => `
    <li class="card">
        <img class="card-image" src ="${poke.image}"/>
        <h2 class="card-title">${poke.id} ${poke.name}</h2>
        <p class="card-subtitle">Type:${poke.type}</p>
    </li>
    `
    ).join('');
    pokemonGalleryRef.insertAdjacentHTML('beforeend',pokemonHTMLString);
}