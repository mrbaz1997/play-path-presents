import game1 from "@/assets/game1.jpg";
import game2 from "@/assets/game2.jpg";
import game3 from "@/assets/game3.jpg";

export interface Game {
  title: string;
  description: string;
  image: string;
  genre: string;
  status: string;
  tags: string[];
}

export const games: Game[] = [
  {
    title: "Mystic Realms",
    description: "Embark on an epic fantasy adventure through mystical landscapes filled with ancient magic and legendary creatures.",
    image: game1,
    genre: "Fantasy RPG",
    status: "Released",
    tags: ["Adventure", "Magic", "Open World"]
  },
  {
    title: "Stellar Command",
    description: "Command your fleet in this strategic space warfare game featuring real-time tactical combat and empire building.",
    image: game2,
    genre: "Strategy",
    status: "In Development",
    tags: ["Strategy", "Sci-Fi", "Multiplayer"]
  },
  {
    title: "Pixel Quest",
    description: "A nostalgic platformer adventure with modern gameplay mechanics and charming retro-inspired pixel art.",
    image: game3,
    genre: "Platformer",
    status: "Released",
    tags: ["Retro", "Platformer", "Indie"]
  }
];