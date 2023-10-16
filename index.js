//1.
async function getRandomPokemon() {
    let num = parseInt(Math.random()*1000);
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
        let data = await res.json();
        return data;
    } catch (error) {
        alert('Error')
    }
}

// 2.
async function getImageAndName() {
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        let poke = await res.json();
        return {img: poke.sprites.front_default, name: poke.name};
    } catch (error) {
        alert('Error')
    }
    
}

// 3.
async function printImageAndName() {
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        let poke = await res.json();
        let doc = document.getElementById('test')
        return `<section>
                    <img src="${poke.sprites.front_default}" alt="${poke.name}">
                    <h1>${poke.name}</h1>
                </section>`;
        /* return doc.innerHTML += `<section>
                                    <img src="${poke.sprites.front_default}" alt="${poke.name}">
                                    <h1>${poke.name}</h1>
                                </section>`; */
    } catch (error) {
        alert('Error')
    }
}

// 4.
async function getRandomDogImage() {
    try {
        let res = await fetch(`https://dog.ceo/api/breeds/image/random`);
        let dog = await res.json();
        return dog.message;
    } catch (error) {
        alert('Error')
    }
}

// 5.
async function getRandomPokemonImage() {
    let num = parseInt(Math.random()*1000);
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
        let poke = await res.json();
        return poke.sprites.front_default;
    } catch (error) {
        alert('Error')
    }
}

// 6.
/* async function printPugVsPikachu() {
    let dogRes = await fetch(`https://dog.ceo/api/breed/pug/images/random`);
    let dog = await dogRes.json();
    let pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    let poke = await pokeRes.json();
    let doc = document.getElementById('test')
    return doc.innerHTML += `<section>
                                <p><img src="${dog.message}" alt="pug">VS<img src="${poke.sprites.front_default}" alt="${poke.name}"></p>
                            </section>`
} */

// 7.
async function getRandomCharacter() {
    let num = parseInt(Math.random()*826)
    try {
        let res = await fetch(`https://rickandmortyapi.com/api/character/${num}`);
        let character = res.json();
        return character;
    } catch (error) {
        alert('Error')
    }
}

// 8.
async function getRandomCharacterInfo() {
    let num = parseInt(Math.random()*826)
    try {
        let res = await fetch(`https://rickandmortyapi.com/api/character/${num}`);
        let character = await res.json();
        let img = character.image;
        let name = character.name;
        let episodes = character.episode;
        let firstEpisode = character.episode[0];
        let episodeRes = await fetch(firstEpisode);
        let episodeData = await episodeRes.json();
        let dateEpisode = episodeData.air_date

        /* let doc = document.getElementById('test');
        doc.innerHTML += `<section>
                            <img src="${img}" alt="${name}">
                            <h1>${name}</h1>
                            <p>Total episodes appearances: ${episodes.length}</p>
                            <p>First episode appearance: "${episodeData.name}", ${dateEpisode}</p>
                        </section>` */

        return {img, name, episodes, firstEpisode, dateEpisode}
    } catch (error) {
        alert('Error')
    }
}

