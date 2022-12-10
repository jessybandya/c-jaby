import React from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../components1/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import MDTypography from '../../components1/MDTypography';

function AboutUs() {
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
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section className="">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="about-img-box wow fadeInLeft animated" data-wow-delay=".4s">
        <div className="aliment-1">
        <div className="aliment-icon-red">
          <img src="assets2/images/banner-aliment-icon-1.png" alt="icon" />
        </div>
        <div className="aliment-content">
          <h3 className="h3-title">Past Papers</h3>
          <p>With Solutions within!!!</p>
        </div>
      </div>
          <div className="aliment-2">
            <div className="aliment-icon-purple">
              <img src="assets2/images/banner-aliment-icon-2.png" alt="icon" />
            </div>
            <div className="aliment-content">
              <h3 className="h3-title">Final Year Projects</h3>
              <p>With Solutions within!!!</p>
            </div>
          </div>
          <div className="about-img">
            <img src="assets2/images/about-img.png" alt="about us" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-us-content">
          <div className="about-us-title">
            <h2 className="h2-title">We Have E-Pastpapers and E-Projects</h2>
          </div>
          <p>We provide best online past papers across all engineering departments plus online final year projects with solutions.</p>
          <ul>
            <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Civil & Construction Engineering.</p></li>
            <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Electrical & Information Engineering.</p></li>
            <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Geospatial & Space Technology Engineering.</p></li>
            <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Mechanical & Manufacturing Engineering.</p></li>
            <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Environmental & Biosystems Engineering.</p></li>
          </ul>
          <a href="#" className="sec-btn">Explore More</a>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  </MDBox>
  <Footer />
</DashboardLayout>
  </div>;

}

export default AboutUs;
