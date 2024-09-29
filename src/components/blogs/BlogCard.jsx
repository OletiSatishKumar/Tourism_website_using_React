import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogCard = ({ image, date, title, description, author, content }) => {
  return (
    <Link
      to={`/blogs/${title}`}
      onClick={() => window.scrollTo(0, 0)}
      state={{ image, date, title, description, author, content }} // Ensure content is included
      className="text-decoration-none"
    >
      <div className="card border-0 shadow-sm mb-4 transition-all hover-shadow">
        <div className="overflow-hidden" style={{ height: "250px" }}>
          <img
            src={image}
            alt="Blog"
            className="card-img-top"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div className="card-body p-3">
          <div className="d-flex justify-content-between text-muted mb-2">
            <small>{date}</small>
            <small>By {author}</small>
          </div>

          <h5 className="card-title text-dark fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
