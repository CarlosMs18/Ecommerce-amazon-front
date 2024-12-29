import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import blog from '../images/blog-1.jpg'
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
      <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blogs' className="d-flex align-items-center gap-10" >
                  <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                </Link>
                <h3 className="title">A Beautiful Sunday Morning Renaissnce</h3>
                <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                <p>
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2
                </p>
              </div>
            </div>
          </div>
      </Container>
     {/*  <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blogs' className="d-flex align-items-center gap-10" >
                  <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
                </Link>
                <h3 className="title">A Beautiful Sunday Morning Renaissnce</h3>
                <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                <p>
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2 lorem123 sinpdn cwel
                  FDksms wd j 123 d2 lorem123 sinpdn cwel FDksms wd j 123 d2
                  lorem123 sinpdn cwel FDksms wd j 123 d2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SingleBlog;
