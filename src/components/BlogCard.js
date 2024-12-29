import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
  /*   <div className="col-3"> */
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec, 2022</p>
          <h5 className="title">A beatiful sunday morning renaissnce</h5>
          <p className="desc">
            lorem xdws sde lorem xdws sdelorem xdws sdelorem xdws sdelorem xdws
            sdelorem xdws sdelorem xdws sdelorem xdws sdelorem xdws sdelorem
            xdws sdelorem xdws sdelorem xdws sde{" "}
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
   /*  </div> */
  );
};

export default BlogCard;
