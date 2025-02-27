const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength


const initPlayers = (players) => {
    let detailedPlayers = [];

    for (let i = 0; i < players.length; i++) {
        if(i%2==0){
            var type1="hero"
        }else{
            type1="villain"
        }
        let player = {
            name: players[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`,
            type:type1
        };
        detailedPlayers.push(player);
    }

    return detailedPlayers;
}

// Getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';

    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += `
                <div class="player"><img src="${players[i].image}"alt=""><div class="name">${players[i].name}</div><div class="strength">${players[i].strength}</div></div>`;
        }
    }

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}