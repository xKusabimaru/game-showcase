import { useState } from "react";
import "./App.css";
import CardView from "./components/CardView";
import ListView from "./components/ListView";

function App() {
  const games = [
    [
      ["Demon's Souls", "Demons-Souls-pic.jpg"],
      ["Dark Souls", "Dark-Souls-pic.jpg"],
      ["Nioh", "Nioh-pic.jpg"],
      ["Elden Ring", "Elden-Ring-pic.jpg"],
    ],
    [
      ["Elden Ring", "Elden-Ring-pic.jpg"],
      [
        "The Legend of Zelda: Breath of the Wild",
        "zelda-breath-of-the-wild-pic.jpg",
      ],
      ["Red Dead Redemption 2", "red-dead-redemption-2-pic.jpg"],
    ],
    [
      ["Hitman", "Hitman-pic.jpg"],
      ["Metal Gear Solid", "mgssolid-pic.jpg"],
      ["Tenchu", "Tenchu-pic.jpg"],
    ],
    [
      ["Company of Heros 3", "Company_of_Heroes_3_pic.jpg"],
      ["StarCraft", "StarCraft_II_-_pic.jpg"],
    ],
    [
      ["Doom", "doom_eternal_pic.jpg"],
      ["Call of Duty", "cod-pic.jpg"],
      ["PayDay 2", "PayDay-pic.jpg"],
    ],
    [
      ["Persona 5", "P5R-pic.jpg"],
      ["The witcher 3", "The-witcher3-pic.jpg"],
    ],
    [
      ["Fifa", "fifa-pic.jpg"],
      ["Forza Horizon", "forza-pic.jpg"],
    ],
    [
      ["Pummel Party", "pummel-party-pic.jpg"],
      ["Mario Party", "mario-party-pic.jpg"],
    ],
    [
      ["God Of War", "gow-pic.jpg"],
      ["Ratchet And Clank", "rac-pic.jpg"],
    ],
    [
      ["Portal", "Portal2-pic.jpg"],
      ["We Were Here", "wwh-pic.jpg"],
    ],
    [
      ["Devil May Cry", "Devil_May_Cry_5-pic.jpg"],
      ["Hades", "hades-pic.jpg"],
      ["Nier Automata", "NieR-Automata-pic.jpg"],
    ],
    [
      ["Rust", "rust-pic.jpg"],
      ["DayZ", "dayz-pic.jpg"],
      ["ARK: Survival Evolved", "ark-pic.jpg"],
    ],
    [
      ["Outlast", "Outlast-pic.jpg"],
      ["resident evil 4", "re4-pic.jpg"],
    ],
    [["resident evil 4", "re4-pic.jpg"]],
    [
      ["Celeste", "celeste-pic.jpg"],
      ["Crash Bandicoot", "crash-pic.jpg"],
    ],
    [
      ["PayDay 2", "PayDay-pic.jpg"],
      ["We Were Here", "wwh-pic.jpg"],
    ],
    [
      ["Call of Duty", "cod-pic.jpg"],
      ["PayDay 2", "PayDay-pic.jpg"],
      ["Company of Heros 2", "Company_of_Heroes_3_pic.jpg"],
      ["StarCraft", "StarCraft_II_-_pic.jpg"],
    ],
    [["Minecraft", "minecraft-pic.jpg"]],
    [
      ["Hollow Knight", "hollow-knight-pic.jpg"],
      ["Celeste", "celeste-pic.jpg"],
    ],
  ];
  const genres = [
    "Souls-Like",
    "Open World",
    "Stealth",
    "Real-time strategy",
    "Shooters",
    "Role-playing",
    "Sport",
    "Party games",
    "Action-adventure",
    "Puzzlers",
    "Action",
    "Survival",
    "Horror",
    "Survival horror",
    "Platformer",
    "co-op",
    "Online multiplayer",
    "Sandbox",
    "Indie",
  ];

  const [genresIndex, setGenresIndex] = useState(-1);

  const callbackGenres = (childData: number) => {
    setGenresIndex(childData);
  };

  return (
    <div className="App">
      <div className="HeaderDiv" id="HeaderDiv">
        <h5>Game Showcase</h5>
      </div>

      <div className="GenresList" id="GenresList">
        <h1>Genres</h1>
        <div className="GenresItems">
          <ListView items={genres} onClick={callbackGenres}></ListView>
        </div>
      </div>
      <div className="GamesList">
        {genresIndex === -1 ? (
          <div className="NoGenre">
            <h1>Welcome to Game Showcase Website</h1>
            <h2>Please pick a genre</h2>
          </div>
        ) : (
          <CardView items={games[genresIndex]}></CardView>
        )}
      </div>

      <div className="FooterDiv" id="FooterDiv">
        <h5>This is a basic website to get more familiar with react</h5>
      </div>
    </div>
  );
}

export default App;
