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
  category: string;
}

export const musics: Music[] = [
  {
    id: 1,
    name: "Dollaz on my head",
    image: require("@/assets/images/image-1.jpg"),
    imgPath: "@/assets/images/image-1.jpg",
    artist: "Gunna",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: "Music",
  },
  {
    id: 2,
    name: "Dollaz on my head",
    image: require("@/assets/images/image-2.jpg"),
    imgPath: "@/assets/images/image-2.jpg",
    artist: "Gunna",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: "Music",
  },
  {
    id: 3,
    name: "Dollaz on my head",
    image: require("@/assets/images/image-3.jpg"),
    imgPath: "@/assets/images/image-3.jpg",
    artist: "Gunna",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: "Music",
  },
  {
    id: 4,
    name: "Dollaz on my head",
    image: require("@/assets/images/image-4.jpg"),
    imgPath: "@/assets/images/image-4.jpg",
    artist: "Gunna",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: "Music",
  },
  {
    id: 5,
    name: "Dollaz on my head",
    image: require("@/assets/images/image-5.jpg"),
    imgPath: "@/assets/images/image-5.jpg",
    artist: "Gunna",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: "Music",
  },
  {
    id: 6,
    name: "Dollaz on my head",
    image: require("@/assets/images/image-6.jpg"),
    imgPath: "@/assets/images/image-6.jpg",
    artist: "Gunna",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: "Music",
  },
  {
    id: 7,
    name: "Dollaz on my head",
    image: require("@/assets/images/image-7.jpg"),
    imgPath: "@/assets/images/image-7.jpg",
    artist: "Gunna",
    duration: "3:45",
    saveCount: 100,
    playCount: 1000,
    category: "Music",
  },
];
