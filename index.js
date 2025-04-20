//DESARROLLA AQUI TUS SOLUCIONES
const getRandomPokemon = async () => {
  try {
    const id = Math.floor(Math.random() * 898) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("ha habido un error", error);
  }
};

const getImageAndName = async (name = "pikachu") => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    return {
      img: data.sprites.front_default,
      name: data.name,
    };
  } catch (error) {
    throw new Error("ha habido un error", error);
  }
};
const printImageAndName = async () => {
  try {
    const { img, name } = await getImageAndName();
    return `
<section>
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
</section>
`.trim();
  } catch (error) {
    throw new Error("ha habido un error", error);
  }
};

const getRandomDogImage = async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    return data.message;
  } catch (error) {
    throw new Error("ha habido un error", error);
  }
};
const getRandomPokemonImage = async () => {
  try {
    const id = Math.floor(Math.random() * 898) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data.sprites.front_default;
  } catch (error) {
    throw new Error("ha habido un error", error);
  }
};

const getRandomCharacter = async () => {
  try {
    const id = Math.floor(Math.random() * 826) + 1;
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("ha habido un error", error);
  }
};
const getRandomCharacterInfo = async () => {
  try {
    const character = await getRandomCharacter();

    const episodeUrls = character.episode;
    const firstEpisodeUrl = episodeUrls[0];

    const firstEpRes = await fetch(firstEpisodeUrl);
    const firstEpData = await firstEpRes.json();

    return {
      img: character.image,
      name: character.name,
      episodes: episodeUrls,
      firstEpisode: firstEpData.name,
      dateEpisode: firstEpData.air_date,
    };
  } catch (error) {
    throw new Error("ha habido un error", error);
  }
};
