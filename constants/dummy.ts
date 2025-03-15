export const categories = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Podcasts",
  },
  {
    id: 3,
    name: "Music",
  },
  {
    id: 4,
    name: "ASMR",
  },
];

export interface Music {
  id: number;
  name: string;
  image: any;
  imgPath: string;
  artist: string;
  duration: string;
  saveCount: number;
  playCount: number;
  category: string[];
}

export const musics: Music[] = [
  {
    id: 1,
    name: "Meurtre par strangulation",
    image: require("@/assets/images/image-1.jpg"),
    imgPath: "@/assets/images/image-1.jpg",
    artist: "Maître Gims",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: ["Music", "All"],
  },
  {
    id: 2,
    name: "Thriller",
    image: require("@/assets/images/image-2.jpg"),
    imgPath: "@/assets/images/image-2.jpg",
    artist: "Michael Jackson",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: ["Music", "All", "ASMR"],
  },
  {
    id: 3,
    name: "Disque d'Or",
    image: require("@/assets/images/image-3.jpg"),
    imgPath: "@/assets/images/image-3.jpg",
    artist: "Sexion d'Assaut",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: ["Music", "All", "Podcasts"],
  },
  {
    id: 4,
    name: "Disciple dans la ville",
    image: require("@/assets/images/image-4.jpg"),
    imgPath: "@/assets/images/image-4.jpg",
    artist: "KS Bloom",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: ["Music", "All", "Podcasts"],
  },
  {
    id: 5,
    name: "Bad",
    image: require("@/assets/images/image-5.jpg"),
    imgPath: "@/assets/images/image-5.jpg",
    artist: "Michael Jackson",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: ["Music", "All", "Podcasts", "ASMR"],
  },
  {
    id: 6,
    name: "Symphony No. 9",
    image: require("@/assets/images/image-6.jpg"),
    imgPath: "@/assets/images/image-6.jpg",
    artist: "Ludwig van Beethoven",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: ["Music", "All", "Podcasts"],
  },
  {
    id: 7,
    name: "Symphony No. 9",
    image: require("@/assets/images/image-7.jpg"),
    imgPath: "@/assets/images/image-7.jpg",
    artist: "Mozart",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: ["Music", "All", "Podcasts"],
  },
];
