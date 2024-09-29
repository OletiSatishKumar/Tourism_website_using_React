import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  handleOrderPopup,
}) => {
  return (
    <>
      <div
        className="card shadow-lg transition-all cursor-pointer"
        onClick={handleOrderPopup}
        style={{ transition: "all 0.5s ease" }}
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="card-img-top"
            style={{
              height: "220px",
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.7s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title text-truncate">{title}</h5>
          <div className="d-flex align-items-center mb-2 text-muted">
            <IoLocationSharp />
            <span className="ms-2">{location}</span>
          </div>
          <div className="d-flex justify-content-between border-top pt-3 mt-3">
            <div className="text-muted">
              <p>{type}</p>
            </div>
            <div>
              <p className="h5 fw-bold">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
