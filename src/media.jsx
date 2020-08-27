import { generateMedia } from "styled-media-query";

const media = generateMedia({
  smMobile: "320px",
  lgMobile: "480px",
  tablet: "768px",
  smScreen: "1024px",
  mdScreen: "1200px",
  lgScreen: "1400px",
});

export default media;
