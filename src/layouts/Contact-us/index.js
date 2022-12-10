import React from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../components1/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import MDTypography from '../../components1/MDTypography';

function ContactUs() {
  return <div>
  <DashboardLayout>
  <DashboardNavbar />
  <MDBox py={3}>
  <div>

  {/*Banner Breadcrum Start*/}
  <div className="main-banner-breadcrum">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-breadcrum">
            <ul>
              <li><i className="fa fa-angle-right" aria-hidden="true" /></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Banner Breadcrum End*/}
  {/*Contact Us Start*/}
  <section className="main-contact-page-in">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
        <div className="get-touch-box">
        <div className="get-touch-title">
          <h2 className="h2-subtitle">Get In Touch</h2>
          <MDTypography variant="h6" fontWeight="medium" className="h1-title wow fadeInUp animated" data-wow-delay=".5s">
          <span style={{fontSize:28}}>Ready To Get Started</span>
        </MDTypography>
        </div>
        <div className="get-touch-form">
          <form>
            <div className="row">
              <div className="col-md-12">
                <div className="form-box">
                  <input type="text" name="Full Name" className="form-input" placeholder="Full Name" required />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-box">
                  <input type="email" name="EmailAddress" className="form-input" placeholder="Email Address" required />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-box">
                  <input type="text" name="Phone No" className="form-input" placeholder="Phone No." required />
                </div>
              </div>
              <div className="col-12">
                <div className="form-box">
                  <textarea className="form-input" placeholder="Message..." defaultValue={""} />
                </div>
              </div>
              <div className="col-12">
                <div className="form-box mb-0">
                  <button type="submit" className="sec-btn"><span>Submit Now</span></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
        </div>
        <div className="col-lg-7">
        <div className="contact-detail-box">
        <h3 className="h3-title">Contact Detail</h3>
        <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
        <ul>
          <li>
            <div className="contact-detail-icon">
              <img src="assets2/images/contact-location.png" alt="location" />
            </div>
            <div className="contact-detail-content">
              <p>Our Address:</p>
              <h3 className="contact-text">Harry Thuku road, Nairobi, Kenya</h3>
            </div>
          </li>
          <li>
            <div className="contact-detail-icon">
              <img src="assets2/images/contact-mail.png" alt="location" />
            </div>
            <div className="contact-detail-content">
              <p>Our Mailbox:</p>
              <h3 className="contact-text">bandya@students.uonbi.ac.ke</h3>
            </div>
          </li>
          <li>
            <div className="contact-detail-icon">
              <img src="assets2/images/contact-call.png" alt="location" />
            </div>
            <div className="contact-detail-content">
              <p>Our Phones:</p>
              <h3 className="contact-text">+254 746 749 07</h3>
            </div>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </div>
  </section>
  {/*Contact Us End*/}


</div>
  </MDBox>
  <Footer />
</DashboardLayout>
  </div>;

}

export default ContactUs;
