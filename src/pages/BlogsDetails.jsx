import { useLocation } from "react-router-dom";
import Blog from "../components/blogs/Blog";
import ReactMarkdown from 'react-markdown';

const BlogsDetails = (props) => {
  const location = useLocation();
  
  const { image, date, title, description, author, content } =
    location.state || {};
  console.log(content, "Heyy");

  return (
    <div className="pt-5 container mt-5"> {/* Add margin-top here */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="overflow-hidden" style={{ height: "400px" }}>
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 h-100 object-fit-cover transition duration-700 hover:scale-110"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-muted small">
          Written by <strong>{author}</strong> on <strong>{date}</strong>
        </p>
        <h1 className="text-dark fw-bold">{title}</h1>
        <p className="text-muted">{description}</p>
      </div>
      
      <div className="bg-light p-4 rounded shadow mt-4">
        <div className="text-dark">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>

      {/* All Blogs Section */}
      <Blog />
    </div>
  );
};

export default BlogsDetails;
