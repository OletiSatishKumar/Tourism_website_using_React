import Bannerpic from "../components/banner/bannerpic"
import Banner2 from "../assets/bannerimg1.jpg"

const About = () => {
  return (
    <>
      <div className="bg-light py-5">
        {/* About Us Section */}
        <div className="py-10">
        <h1 className="my-4 border-start border-4 border-primary py-2 ps-3">
          About
        </h1>
          <p>
            At <strong>Prakruthi</strong>, we believe that travel is more than
            just visiting new places it’s about creating unforgettable
            experiences. Since our establishment in [Year], our mission has been
            to curate travel experiences that take you beyond the ordinary.
            Whether you’re seeking adventure, relaxation, cultural immersion, or
            a perfect blend of all, we’re here to make every journey memorable.
          </p>
          <br />
          <p>
            Our vision is to inspire and connect people through the joy of
            travel, fostering a deep appreciation for the world’s diverse
            cultures and natural beauty. We work with passion and dedication to
            ensure that your trips leave a lasting impression.
          </p>
          <br />
          <p>
            Why choose us? We offer personalized travel experiences, a
            passionate and experienced team, 24/7 customer support, and a
            commitment to sustainable tourism. Every adventure is tailored to
            your unique preferences.
          </p>
        </div>
      </div>

      {/* Blogs Component */}
      <Bannerpic img={Banner2} />
    </>
  );
};

export default About;
