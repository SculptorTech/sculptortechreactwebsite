import gallery1 from "../assets/gallery.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery7 from "../assets/gallery7.jpeg";
import gallery8 from "../assets/gallery8.jpeg";
import gallery9 from "../assets/gallery9.jpeg";
import gallery10 from "../assets/gallery10.jpeg";
import gallery11 from "../assets/gallery11.jpeg";
// import gallery12 from "../assets/gallery12.jpeg";

// Fisher-Yates shuffle function
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const baseImages = [
  {
    id: 1,
    img: gallery1,
    height: 700,
    url: "#"
  },
  {
    id: 2,
    img: gallery2,
    height: 400,
    url: "#"
  },
  {
    id: 3,
    img: gallery3,
    height: 700,
    url: "#"
  },
  {
    id: 4,
    img: gallery4,
    height: 400, 
    url: "#"
  },
  {
    id: 5,
    img: gallery5,
    height: 750,
    url: "#"
  },
  {
    id: 6,
    img: gallery6,
    height: 750,
    url: "#"
  },
  {
    id: 7,
    img: gallery7,
    height: 450,
    url: "#"
  },
  {
    id: 8,
    img: gallery8,
    height: 450,
    url: "#"
  },
  {
    id: 9,
    img: gallery9,
    height: 700,
    url: "#"
  },
  {
    id: 10,
    img: gallery10,
    height: 700,
    width: 700,
    url: "#"
  },
  {
    id: 11,
    img: gallery11,
    height: 700,
    url: "#"
  },
  // {
  //   id: 12,
  //   img: gallery12,
  //   height: 700,
  //   url: "#"
  // },
];

// Export shuffled array
export const galleryImages = shuffleArray(baseImages);