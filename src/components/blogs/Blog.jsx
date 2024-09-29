import BlogCard from "./BlogCard";
import Img1 from "../../assets/img1.webp";
import Img2 from "../../assets/img4.webp";
import Img3 from "../../assets/img3.avif";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top Places to Visit in India",
    description: "Chikmagalur is a scenic hill station in Karnataka, India.",
    content: 
      "1. **Taj Mahal, Agra** - A UNESCO World Heritage Site, the Taj Mahal is an exquisite white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, symbolizing love and beauty.\n\n" +
      "2. **Jaipur, Rajasthan** - Known as the Pink City, Jaipur is famous for its stunning palaces, forts, and vibrant bazaars, showcasing the rich heritage of Rajasthan.\n\n" +
      "3. **Varanasi, Uttar Pradesh** - One of the oldest cities in the world, Varanasi is a spiritual hub known for its ghats along the Ganges River, where pilgrims perform rituals and ceremonies.\n\n" +
      "4. **Goa** - Renowned for its beautiful beaches, vibrant nightlife, and Portuguese heritage, Goa is a popular destination for relaxation and adventure.\n\n" +
      "5. **Kerala Backwaters** - A network of serene lagoons, canals, and lakes, the Kerala Backwaters offer a tranquil escape and unique houseboat experiences amidst lush greenery.\n\n" +
      "6. **Rishikesh, Uttarakhand** - Known as the Yoga Capital of the World, Rishikesh offers spiritual experiences, adventure sports, and breathtaking views of the Himalayas.\n\n" +
      "7. **Mysore, Karnataka** - Famous for its royal heritage and magnificent palaces, including the iconic Mysore Palace, it is a city rich in culture and history.\n\n" +
      "8. **Andaman and Nicobar Islands** - Chikmagalur is a scenic hill station in Karnataka, India, known for its lush coffee plantations, serene landscapes, and pleasant climate.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Top Places to Visit in London",
    description: "London Bridge is a historic and famous bridge over the River Thames.",
    content: 
      "1. **The British Museum** - A treasure trove of art and antiquities, featuring collections from around the world, including the Rosetta Stone and Egyptian mummies.\n\n" +
      "2. **Tower of London** - A historic castle and former royal palace, known for its Crown Jewels and intriguing history of imprisonment and execution.\n\n" +
      "3. **Buckingham Palace** - The official residence of the British monarch, famous for the Changing of the Guard ceremony.\n\n" +
      "4. **The London Eye** - A giant Ferris wheel offering stunning panoramic views of the city skyline, especially beautiful at sunset.\n\n" +
      "5. **Covent Garden** - A vibrant area known for its shops, street performers, and lively atmosphere, making it a perfect spot for shopping and dining.\n\n" +
      "6. **Westminster Abbey** - A Gothic church with a rich history, famous for royal ceremonies and numerous burials of notable figures.\n\n" +
      "7. **St. Paul’s Cathedral** - An iconic landmark with a stunning dome, offering beautiful interiors and panoramic views from its dome.\n\n" +
      "8. **Natural History Museum** - A fascinating museum showcasing a vast range of specimens from various segments of natural history.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Top Places to Visit in Paris",
    description: "The Eiffel Tower is an iconic iron structure in Paris.",
    content: 
      "1. **Eiffel Tower** - An iconic symbol of Paris, offering breathtaking views of the city from its observation decks.\n\n" +
      "2. **Louvre Museum** - The world’s largest art museum, home to thousands of works, including the Mona Lisa and the Venus de Milo.\n\n" +
      "3. **Notre-Dame Cathedral** - A masterpiece of French Gothic architecture, known for its stunning stained glass windows and historical significance.\n\n" +
      "4. **Montmartre** - A charming district known for its artistic history, featuring the stunning Basilica of Sacré-Cœur and vibrant street art.\n\n" +
      "5. **Champs-Élysées** - A famous avenue lined with shops, cafes, and theaters, leading to the Arc de Triomphe, perfect for a leisurely stroll.\n\n" +
      "6. **Palace of Versailles** - A magnificent palace known for its opulent architecture, beautiful gardens, and rich history.\n\n" +
      "7. **Sainte-Chapelle** - A stunning Gothic chapel famous for its magnificent stained glass windows.\n\n" +
      "8. **Musée d'Orsay** - A museum housed in a former railway station, featuring an extensive collection of Impressionist masterpieces.",
    author: "Someone",
    date: "April 22, 2022",
  },
  // Add more blog entries if needed
];



const BlogsComp = () => {
  return (
    <div className="text-dark py-5">
      <section className="container">
        <h1 className="my-4 border-start border-4 border-primary py-2 ps-3">
          Our Latest Blogs
        </h1>

        <div className="row justify-content-center">
          {BlogsData.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
