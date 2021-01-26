import RickMortyImg from "../images/project-01-rick-morty.PNG";
import SeriesFinderImg from "../images/project-02-series-finder.png";
import FridaKardsImg from "../images/project-03-frida-kards.PNG";
import SurrenderImg from "../images/project-04-surrender.PNG";
import NinjaCodersImg from "../images/project-05-ninja-coders.PNG";
import HangmanGameImg from "../images/project-06-hangman-game.PNG";

const DATA = [
  {
    id: 1,
    title: "Rick and Morty character finder",
    description:
      "Buscador de personajes de la serie Rick y Morty que permite filtrar por nombre y acceder a una ficha detalle de cada uno mediante el uso de React Router. Además, se puede filtrar por especie y ordenar los resultados alfabéticamente.",
    image: RickMortyImg,
    skills: ["HTML", "SASS", "REACT"],
    githubLink: "https://github.com/crisgarm/rick-morty-characters-finder",
    webLink: "https://crisgarm.github.io/rick-morty-characters-finder/#/",
  },
  {
    id: 2,
    title: "Series finder",
    description:
      "Aplicación web de búsqueda de series que, a través de la API TV Maze, permite buscar series por su título, marcar y desmarcarlas como favoritas y guardarlas en localStorage.",
    image: SeriesFinderImg,
    skills: ["HTML", "SASS", "JS"],
    githubLink: "https://github.com/crisgarm/series-finder",
    webLink: "https://crisgarm.github.io/series-finder/",
  },
  {
    id: 3,
    title: "Frida Kards",
    description:
      "Aplicación web interactiva que permite crear una tarjeta de visita personalizada, pudiendo elegir colores, contenido e imagen. Además de compartir la tarjeta creada en Twitter.",
    image: FridaKardsImg,
    skills: ["HTML", "SASS", "JS"],
    githubLink: "https://github.com/crisgarm/project-promo-k-module-2-team-8",
    webLink: "https://beta.adalab.es/project-promo-k-module-2-team-8/",
  },
  {
    id: 4,
    title: "<!SURRENDER/>",
    description:
      "Refactorización de código heredado, implementando React para dividir el código en componentes y mejorar las interacciones de los usuarios.",
    image: SurrenderImg,
    skills: ["HTML", "SASS", "REACT"],
    githubLink: "https://github.com/crisgarm/project-promo-k-module-3-team-5",
    webLink: "https://beta.adalab.es/project-promo-k-module-3-team-5/#/",
  },
  {
    id: 5,
    title: "Ninja Coders",
    description:
      "Web grupal responsive para presentar al equipo. Maquetada en mobile first, contiene una breve descripción de cada una de las integrantes del equipo y un formulario de contacto.",
    image: NinjaCodersImg,
    skills: ["HTML", "CSS", "SASS"],
    githubLink: "https://github.com/crisgarm/ninja-coders",
    webLink: "https://crisgarm.github.io/ninja-coders/",
  },
  {
    id: 6,
    title: "Hangman game",
    description:
      "Desarrollo del juego del ahorcado, donde la persona debe adivinar una palabra escogida al azar. Juego realizado en vanilla JavaScript con el objetivo de seguir practicando.",
    image: HangmanGameImg,
    skills: ["HTML", "CSS", "JS"],
    githubLink: "https://github.com/crisgarm/hangman-game",
    webLink: "https://crisgarm.github.io/hangman-game/",
  },
];

export default DATA;
