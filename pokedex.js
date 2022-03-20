// 1 enlazarlo con el HTLM
const listPokedex = document.getElementById("pokedex");

const getPokemons = () => {
    const promises = []

    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
      }
    // sacar los valores que quieres de la api
      Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites.other.dream_world.front_default,
            //result.sprites["front_default"],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            height: result.height,
            
            
        }));
            displayPokemon(pokemon);
     });
}
    // paso 3 crear los elementos en el DOM
    const displayPokemon = (user) => {
       console.log(user)
      const myUser = user
        .map(
            (newUser) =>
            `
        <li class="card">
            <h2 class="card-title">${newUser.id} . ${newUser.name}</h2>
            <img class= "card-image" src="${newUser.image}">
            <p class="card-subtitle">Type: ${newUser.type}</p>
            <p> Height : ${newUser.height}</p>
            

        </li>
        `
        )
        .join("");
      listPokedex.innerHTML = myUser;
    };
  
    getPokemons();

