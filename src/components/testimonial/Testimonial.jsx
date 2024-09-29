import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    name: "Sai",
    text: "I have had a leadership and problem-solving skills have been instrumental to our team's success. His ability to think critically and communicate effectively makes him an invaluable asset. John's work ethic and positive attitude consistently inspire everyone around him.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Devi",
    text: "Michael is an incredibly dedicated professional who approaches every task with enthusiasm and a commitment to excellence. His technical expertise and collaborative spirit have been key in driving our initiatives forward. I can always rely on him to get the job done.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Harika",
    text: "Emily's strategic mindset and problem-solving abilities have been instrumental in overcoming challenges. Her dedication and strong interpersonal skills have not only improved team dynamics but have also delivered outstanding results on every project she has worked on.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="my-4 py-2 ps-3">Testimonials</h1>
          <p className="text-muted">
            Hear what our clients have to say about their experience working
            with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <Slider {...settings}>
          {testimonialData.map(({ id, name, text, img }) => (
            <div key={id} className="px-3">
              <Card className="shadow-lg p-4 border-0 rounded d-flex flex-row align-items-center">
                <div className="me-4">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <FaQuoteLeft
                    className="mb-3"
                    style={{
                      fontSize: "3rem",
                      color: "#6c757d",
                    }}
                  />
                  <Card.Body className="p-0">
                    <Card.Title className="font-weight-bold">{name}</Card.Title>
                    <Card.Text className="text-muted">{text}</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
