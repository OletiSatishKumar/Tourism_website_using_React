import "bootstrap/dist/css/bootstrap.min.css";

const Bannerpic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "400px",
  };

  return (
    <div
      data-aos="zoom-in"
      className="container-fluid p-0"
    >
      {/* Responsive class to control height based on screen size */}
      <div
        className="bannerpic bg-cover bg-center"
        style={bgImage}
      ></div>
    </div>
  );
};

export default Bannerpic;
