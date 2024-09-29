import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/img1.webp";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.avif";
import Img4 from "../../assets/img4.webp";
import Img5 from "../../assets/imgg5.jpg";
import Img6 from "../../assets/img6.avif";

const PlacesData = [
  {
    img: Img1,
    title: "Chikmangalur",
    location: "India",
    description: "Chikmagalur is a scenic hill station in Karnataka, India, known for its lush coffee plantations, serene landscapes, and pleasant climate.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Himalayas",
    location: "India",
    description:
      "The Himalayas are a majestic mountain range in Asia, home to the world's highest peaks, including Mount Everest.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Eiffel Tower",
    location: "Paris",
    description:
      "The Eiffel Tower is an iconic iron structure in Paris, France, symbolizing French art, culture, and architecture",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "London Bridge",
    location: "London",
    description: "London Bridge is a historic and famous bridge over the River Thames, connecting the City of London with Southwark",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Pyramids",
    location: "Egypt",
    description:
      "The Pyramids of Giza in Egypt are ancient, monumental tombs, representing one of the Seven Wonders of the Ancient World",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Maldives Island",
    location: "Maldives",
    description:
      "The Maldives is a tropical paradise in the Indian Ocean, renowned for its crystal-clear waters, coral reefs, and luxury resorts",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-light py-5">
      <section className="container">
        <h1 className="my-4 border-start border-4 border-primary py-2 ps-3">
          Best Places to Visit 
        </h1>
        <div className="row g-4">
          {PlacesData.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <PlaceCard handleOrderPopup={handleOrderPopup} {...item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;
