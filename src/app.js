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
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];

// Player Class
class Player {
    constructor(id, name, type) {
        // Create member variables and assign values
        // Type your code
        this.id = id;
        this.name = name;
        this.strength = this.getRandomStrength();
        this.image = `images/super-${id+1}.png`;
        this.type = type;

    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
        let player = document.createElement("div");
        player.classList.add("player");
        player.classList.add("flex", "flex-col", "items-center", "justify-center", "bg-slate-400", "w-40", "h-48", "border-2", "border-black", "rounded-2xl");
        player.setAttribute("data-id", this.id);

        let img = document.createElement("img");
        img.setAttribute("src", this.image);
        img.classList.add("w-24","h-24")
        player.appendChild(img);

        let name = document.createElement("div");
        name.classList.add("name", "text-lg");
        name.innerHTML = this.name;
        player.appendChild(name);

        let strength = document.createElement("div");
        strength.classList.add("strength", "text-3xl");
        strength.innerHTML = this.strength;
        player.appendChild(strength);

        return player;
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
        this.players  = players.map((player, i) => {
            return new Player(i, player, player.length > 6 ? "hero" : "villain")
        })
    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =
            this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players
            .filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
}