import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'; // Import your CSS file

function Banner() {
  return (
    <div className="banner-container"> {/* Added className here */}
      <Carousel>
        <Carousel.Item>
          <div className="banner-image-container">
            <img
              src="https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg"
              className="d-block w-100 banner-image"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
             <h1>Araku Valley</h1> {/* Nature place title */}
            <p>Beautiful hill station located in the Eastern Ghats of India, known for its lush green forests and coffee plantations.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner-image-container">
            <img
              src="https://images3.alphacoders.com/853/thumb-1920-853174.jpg"
              className="d-block w-100 banner-image"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
          <h1>Taj Mahal</h1>
          <p>An iconic symbol of love, located in Agra, India. One of the most famous monuments in the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner-image-container">
            <img
              src="https://img.freepik.com/free-photo/nature-landscape-with-black-sand-beach_23-2151380329.jpg"
              className="d-block w-100 banner-image"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
          <h1>Maldives</h1> {/* Nature place title */}
          <p>A tropical paradise known for its crystal-clear waters, stunning beaches, and luxury resorts.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
