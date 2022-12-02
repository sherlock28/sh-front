export const getRandomTags = (preferences) => {

    let tags = [];
    const { genremovies, genremusic, hobbies, pets, sport } = preferences;

    tags.push(genremovies[Math.floor(Math.random() * genremovies.length)].name);
    tags.push(genremusic[Math.floor(Math.random() * genremusic.length)].name);
    tags.push(hobbies[Math.floor(Math.random() * hobbies.length)].name);
    tags.push(pets[Math.floor(Math.random() * pets.length)].name);
    tags.push(sport[Math.floor(Math.random() * sport.length)].name);

    return tags;
}