import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms And Conditions"} />
      <BreadCrumb title="Terms And Conditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
      {/*   <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'>

                    </div>
                </div>
            </div>
        </div>
    </section> */}
    </>
  );
};

export default TermsAndConditions;
