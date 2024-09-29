import Banner from "../components/banner/Banner";
import Bannerpic from "../components/banner/bannerpic";
import Banner1 from "../assets/banner.webp";
import Banner2 from "../assets/bannerimg1.jpg";
import Testimonial from "../components/testimonial/Testimonial";
import Places from "../components/places/Place";
import Blog from "../components/blogs/Blog";
function Home() {
  return (
    <div>
      <Banner />
      <Places />
      <div className="text-center mb-5"> 
        <h1 className="my-2 py-2 ps-3">Explore The India</h1>
      </div>
      <Bannerpic img={Banner1} />
      <Blog />
      <div className="text-center mb-5"> 
        <h1 className="my-2 py-2 ps-3">Explore The World</h1>
      </div>
      <Bannerpic img={Banner2} />
      <Testimonial />
    </div>
  );
}

export default Home;
