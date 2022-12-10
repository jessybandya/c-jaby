import React from 'react'
import "./styles.css"


function Test() {
  return (
    <div>
    {/* Loader Start */}
    <div className="loader-box">
      <div className="loader">
        <div className="loader__figure" />
        <p className="loader__label">Loading...</p>
      </div>
    </div>
    {/* Loader End */}
    {/* Header Start */}
    <header className="site-header">
      {/* Top start */}
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="top-contact">
                <div className="top-location">
                  <div className="top-location-icon">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </div>
                  <div className="top-location-content">
                    <a href="javascript:void(0);" title="location"><p>12/7 Aabot, Poor Street, Mumbai</p></a>
                  </div>
                </div>
                <div className="top-mail">
                  <div className="top-mail-icon">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </div>
                  <div className="top-mail-content">
                    <a href="javascript:void(0);" title="mail"><p>info@gmail.com</p></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="Social-midea">
                <a href="javascript:void(0);" title="Facebook"><i className="fa fa-facebook" aria-hidden="true" /></a>
                <a href="javascript:void(0);" title="Instagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
                <a href="javascript:void(0);" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                <a href="javascript:void(0);" title="Pinterest"><i className="fa fa-pinterest-p" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top End */}
      {/*Navbar Start  */}
      <div className="header-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              {/* Sit Logo Start */}
              <div className="site-branding">
                <a href="index.html" title="Educater">
                  <img src="assets2/images/logo.png" alt="Logo" />
                </a>
              </div>
              {/* Sit Logo End */}
            </div>
            <div className="col-lg-9">
              <div className="header-menu">
                <nav className="main-navigation">
                  <button className="toggle-button">
                    <span />
                    <span className="toggle-width" />
                    <span />
                  </button>
                  <ul className="menu">
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li className="sub-items">
                      <a href="javascript:void(0);" title="Courses">Courses</a>
                      <ul className="sub-menu">
                        <li><a href="courses.html" title="Courses">Courses List</a></li>
                        <li><a href="course-detail.html" title="Courses detail">Courses Detail</a></li>
                      </ul>
                    </li>
                    <li className="sub-items">
                      <a href="javascript:void(0);" title="Pages">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="event-detaill.html" title="Event Detail">Event Detail</a></li>
                        <li><a href="instructor.html" title="Instructor">Instructor</a></li>
                        <li><a href="instructor-detail.html" title="Instructor Detail">Instructor Detail</a></li>
                        <li><a href="pricing.html" title="Pricing">Pricing</a></li>
                        <li><a href="faq.html" title="FAQ">FAQ</a></li>
                      </ul>
                    </li>
                    <li className="sub-items">
                      <a href="javascript:void(0);" title="Blog">Blog</a>
                      <ul className="sub-menu">
                        <li><a href="blog-list.html" title="Blog List">Blog List</a></li>
                        <li><a href="blog-detail.html" title="Blog Detail">Blog Detail</a></li>
                      </ul>
                    </li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                  </ul> 
                </nav>
                <div className="black-shadow" />
                <div className="header-btn">
                  <a href="contact-us.html" className="sec-btn">Try For Free</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar End  */}
    </header>
    {/* Header End */}
    {/*Banner Start*/}
    <section className="main-banner">
      <span className="shape-1 animate-this">
        <img src="assets2/images/shape-1.png" alt="shape" />
      </span>
      <span className="shape-2 animate-this">
        <img src="assets2/images/shape-2.png" alt="shape" />
      </span>
      <span className="shape-3 animate-this">
        <img src="assets2/images/shape-3.png" alt="shape" />
      </span>
      <span className="shape-4 animate-this">
        <img src="assets2/images/shape-4.png" alt="shape" />
      </span>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h2 className="h2-subtitle wow fadeInUp animated" data-wow-delay=".4s">Welcome To Online Coaching</h2>
              <h1 className="h1-title wow fadeInUp animated" data-wow-delay=".5s">Get Class From Top <span>Instructor <img src="assets2/images/banner-line.png" alt="line" /></span></h1>
              <p className="wow fadeInUp animated" data-wow-delay=".6s">Integer in magna in est ultrices bibendum eget enim et dui imperdiet faucibus. Fusce eu tristique felis.</p>
              <div className="banner-btn wow fadeInUp animated" data-wow-delay=".7s">
                <a href="about-us.html" className="sec-btn">Explore Courses</a>
                <a href="contact-us.html" className="sec-btn btn-2">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img-box wow fadeInRight animated" data-wow-delay=".4s">
              <div className="aliment-1">
                <div className="aliment-icon-red">
                  <img src="assets2/images/banner-aliment-icon-1.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">Congratulations</h3>
                  <p>Your admission completed</p>
                </div>
              </div>
              <div className="aliment-2">
                <div className="aliment-icon-purple">
                  <img src="assets2/images/banner-aliment-icon-2.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">User Experience Class</h3>
                  <p>Tomorrow is our</p>
                </div>
              </div>
              <div className="aliment-3">
                <div className="aliment-icon-green">
                  <img src="assets2/images/banner-aliment-icon-3.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">578k</h3>
                  <p>Assisted Student</p>
                </div>
              </div>
              <div className="aliment-4">
                <img src="assets2/images/banner-aliment-icon-4.png" alt="icon" />
              </div>
              <div className="banner-img">
                <img src="assets2/images/banner-img.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Banner End*/}
    {/*Course Category Start*/}
    <section className="main-course-category">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="course-category-title">
              <h2 className="h2-subtitle">Course Category</h2>
              <h2 className="h2-title">Explore Popular Courses</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-1.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-1-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="courses.html"><h3 className="h3-title">Learn Data Science</h3></a>
                <p>Data is Everything</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-2.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-2-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="courses.html"><h3 className="h3-title">Business Strategy</h3></a>
                <p>Improve your business</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-3.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-3-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="courses.html"><h3 className="h3-title">Learn Art &amp; Design</h3></a>
                <p>Fun &amp; Challenging</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-4.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-4-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="courses.html"><h3 className="h3-title">Learn Lifestyle</h3></a>
                <p>New Skills, New You</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-5.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-5-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="courses.html"><h3 className="h3-title">Learn Marketing</h3></a>
                <p>Improve your business</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-icon">
                <img className="dis-yes" src="assets2/images/course-category-icon-6.png" alt="icon" />
                <img className="dis-no" src="assets2/images/course-category-icon-6-w.png" alt="icon" />
              </div>
              <div className="course-category-content">
                <a href="courses.html"><h3 className="h3-title">Learn Finance</h3></a>
                <p>Fun &amp; Challenging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Course Category End*/}
    {/*About Us Start*/}
    <section className="main-about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img-box wow fadeInLeft animated" data-wow-delay=".4s">
              <div className="aliment-1">
                <div className="aliment-icon-red">
                  <img src="assets2/images/banner-aliment-icon-1.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">Congratulations</h3>
                  <p>Your admission completed</p>
                </div>
              </div>
              <div className="aliment-3">
                <div className="aliment-icon-green">
                  <img src="assets2/images/banner-aliment-icon-3.png" alt="icon" />
                </div>
                <div className="aliment-content">
                  <h3 className="h3-title">578k</h3>
                  <p>Assisted Student</p>
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
                <h2 className="h2-subtitle">About Us</h2>
                <h2 className="h2-title">We Have Best Online Education</h2>
              </div>
              <p>Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa vel, porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <ul>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                <li><i className="fa fa-check-circle" aria-hidden="true" /><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
              </ul>
              <a href="about-us.html" className="sec-btn">Explore More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*About Us End*/}
    {/*Partner Logo Start*/}
    <div className="main-partner-logo">
      <div className="container">
        <div className="row partner-bg partner-slider">
          <div className="col-lg-3">
            <div className="partners-box">
              <img src="assets2/images/brand-1.png" alt="brand-1" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
              <img src="assets2/images/brand-2.png" alt="brand-2" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
              <img src="assets2/images/brand-3.png" alt="brand-3" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
              <img src="assets2/images/brand-4.png" alt="brand-4" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
              <img src="assets2/images/brand-5.png" alt="brand-5" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="partners-box">
              <img src="assets2/images/brand-6.png" alt="brand-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Partner Logo End*/}
    {/*Online Courses Start*/}
    <section className="main-online-courses">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="online-courses-title">
              <h2 className="h2-subtitle">Our Online Courses</h2>
              <h2 className="h2-title">Find The Right Online Course For You</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="online-courses-title-btn">
              <a href="courses.html" className="sec-btn">View All Course</a>
            </div>
          </div>
        </div>
        <div className="row courses-slider">
          <div className="col-lg-4">
            <div className="course-box">
              <div className="course-img">
                <img src="assets2/images/course-1.jpg" alt="course" />
                <ul>
                  <li><a href="javascript:void(0);" className="course-tag-orange">Business</a></li>
                  <li><a href="javascript:void(0);" className="course-tag-blue">Marketing</a></li>
                </ul>
              </div>
              <div className="course-content">
                <a href="course-detail.html">
                  <h3 className="h3-title">Become product manager learn skills.</h3>
                </a>
                <div className="course-instructor-review">
                  <div className="course-instructor-box">
                    <div className="course-instructor-img">
                      <img src="assets2/images/course-instructor-img.jpg" className="rounded-circle" alt="instructor" />
                    </div>
                    <a href="instructor-detail.html">Lillian Wals</a>
                  </div>
                  <div className="course-review-box">
                    <i className="fa fa-star" aria-hidden="true" />
                    <p>5.0 (2k)</p>
                  </div>
                </div>
                <div className="course-line" />
                <div className="course-price-student-box">
                  <div className="course-price-box">
                    <span>$50.00</span>
                  </div>
                  <div className="course-student-box">
                    <div className="course-student-icon">
                      <img src="assets2/images/student-icon.png" alt="icon" />
                    </div>
                    <p>600k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-box">
              <div className="course-img">
                <img src="assets2/images/course-2.jpg" alt="course" />
                <ul>
                  <li><a href="javascript:void(0);" className="course-tag-orange">Business</a></li>
                  <li><a href="javascript:void(0);" className="course-tag-blue">Marketing</a></li>
                </ul>
              </div>
              <div className="course-content">
                <a href="course-detail.html">
                  <h3 className="h3-title">Fashion and luxury fashion in a changing.</h3>
                </a>
                <div className="course-instructor-review">
                  <div className="course-instructor-box">
                    <div className="course-instructor-img">
                      <img src="assets2/images/course-instructor-img.jpg" className="rounded-circle" alt="instructor" />
                    </div>
                    <a href="instructor-detail.html">Lillian Wals</a>
                  </div>
                  <div className="course-review-box">
                    <i className="fa fa-star" aria-hidden="true" />
                    <p>5.0 (2k)</p>
                  </div>
                </div>
                <div className="course-line" />
                <div className="course-price-student-box">
                  <div className="course-price-box">
                    <span>$50.00</span>
                  </div>
                  <div className="course-student-box">
                    <div className="course-student-icon">
                      <img src="assets2/images/student-icon.png" alt="icon" />
                    </div>
                    <p>600k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-box">
              <div className="course-img">
                <img src="assets2/images/course-3.jpg" alt="course" />
                <ul>
                  <li><a href="javascript:void(0);" className="course-tag-orange">Business</a></li>
                  <li><a href="javascript:void(0);" className="course-tag-blue">Marketing</a></li>
                </ul>
              </div>
              <div className="course-content">
                <a href="course-detail.html">
                  <h3 className="h3-title">Learning to write as a professional.</h3>
                </a>
                <div className="course-instructor-review">
                  <div className="course-instructor-box">
                    <div className="course-instructor-img">
                      <img src="assets2/images/course-instructor-img.jpg" className="rounded-circle" alt="instructor" />
                    </div>
                    <a href="instructor-detail.html">Lillian Wals</a>
                  </div>
                  <div className="course-review-box">
                    <i className="fa fa-star" aria-hidden="true" />
                    <p>5.0 (2k)</p>
                  </div>
                </div>
                <div className="course-line" />
                <div className="course-price-student-box">
                  <div className="course-price-box">
                    <span>$50.00</span>
                  </div>
                  <div className="course-student-box">
                    <div className="course-student-icon">
                      <img src="assets2/images/student-icon.png" alt="icon" />
                    </div>
                    <p>600k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-box">
              <div className="course-img">
                <img src="assets2/images/course-4.jpg" alt="course" />
                <ul>
                  <li><a href="javascript:void(0);" className="course-tag-orange">Business</a></li>
                  <li><a href="javascript:void(0);" className="course-tag-blue">Marketing</a></li>
                </ul>
              </div>
              <div className="course-content">
                <a href="course-detail.html">
                  <h3 className="h3-title">Improving accessibility of Your markdown.</h3>
                </a>
                <div className="course-instructor-review">
                  <div className="course-instructor-box">
                    <div className="course-instructor-img">
                      <img src="assets2/images/course-instructor-img.jpg" className="rounded-circle" alt="instructor" />
                    </div>
                    <a href="instructor-detail.html">Lillian Wals</a>
                  </div>
                  <div className="course-review-box">
                    <i className="fa fa-star" aria-hidden="true" />
                    <p>5.0 (2k)</p>
                  </div>
                </div>
                <div className="course-line" />
                <div className="course-price-student-box">
                  <div className="course-price-box">
                    <span>$50.00</span>
                  </div>
                  <div className="course-student-box">
                    <div className="course-student-icon">
                      <img src="assets2/images/student-icon.png" alt="icon" />
                    </div>
                    <p>600k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-box">
              <div className="course-img">
                <img src="assets2/images/course-5.jpg" alt="course" />
                <ul>
                  <li><a href="javascript:void(0);" className="course-tag-orange">Business</a></li>
                  <li><a href="javascript:void(0);" className="course-tag-blue">Marketing</a></li>
                </ul>
              </div>
              <div className="course-content">
                <a href="course-detail.html">
                  <h3 className="h3-title">Master query in a short period of time.</h3>
                </a>
                <div className="course-instructor-review">
                  <div className="course-instructor-box">
                    <div className="course-instructor-img">
                      <img src="assets2/images/course-instructor-img.jpg" className="rounded-circle" alt="instructor" />
                    </div>
                    <a href="instructor-detail.html">Lillian Wals</a>
                  </div>
                  <div className="course-review-box">
                    <i className="fa fa-star" aria-hidden="true" />
                    <p>5.0 (2k)</p>
                  </div>
                </div>
                <div className="course-line" />
                <div className="course-price-student-box">
                  <div className="course-price-box">
                    <span>$50.00</span>
                  </div>
                  <div className="course-student-box">
                    <div className="course-student-icon">
                      <img src="assets2/images/student-icon.png" alt="icon" />
                    </div>
                    <p>600k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-box">
              <div className="course-img">
                <img src="assets2/images/course-6.jpg" alt="course" />
                <ul>
                  <li><a href="javascript:void(0);" className="course-tag-orange">Business</a></li>
                  <li><a href="javascript:void(0);" className="course-tag-blue">Marketing</a></li>
                </ul>
              </div>
              <div className="course-content">
                <a href="course-detail.html">
                  <h3 className="h3-title">Business Intelligence analyst Course 2022.</h3>
                </a>
                <div className="course-instructor-review">
                  <div className="course-instructor-box">
                    <div className="course-instructor-img">
                      <img src="assets2/images/course-instructor-img.jpg" className="rounded-circle" alt="instructor" />
                    </div>
                    <a href="instructor-detail.html">Lillian Wals</a>
                  </div>
                  <div className="course-review-box">
                    <i className="fa fa-star" aria-hidden="true" />
                    <p>5.0 (2k)</p>
                  </div>
                </div>
                <div className="course-line" />
                <div className="course-price-student-box">
                  <div className="course-price-box">
                    <span>$50.00</span>
                  </div>
                  <div className="course-student-box">
                    <div className="course-student-icon">
                      <img src="assets2/images/student-icon.png" alt="icon" />
                    </div>
                    <p>600k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Online Courses End*/}
    {/*Event Start*/}
    <section className="main-event">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-5">
            <div className="event-img-box wow fadeInLeft animated" data-wow-delay=".4s">
              <div className="event-img">
                <img src="assets2/images/event-img.jpg" alt="event" />
              </div>
              <div className="event-video-play-box">
                <div className="event-play-btn">
                  <a href="https://www.youtube.com/watch?v=-lQ1dNicM3k" className="event-play-icon popup-youtube" title="Play Video"><span><i className="fa fa-play" aria-hidden="true" /></span></a>
                </div>
                <div className="event-video-content">
                  <h3 className="h3-title">Watch Us !</h3>
                </div>  
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="event-content-box">
              <div className="event-title">
                <h2 className="h2-subtitle">Our Events</h2>
                <h2 className="h2-title">Join Our Upcoming Events</h2>
              </div>
              <div className="event-box">
                <div className="event-date-day">
                  <div className="event-date">
                    <p>30</p>
                  </div>
                  <div className="event-day">
                    <p>Dec, 2021</p>
                  </div>
                </div>
                <div className="event-text-line" />
                <div className="event-content-text">
                  <div className="event-time-place">
                    <div className="event-time">
                      <p>10:30am To 2:30pm</p>
                    </div>
                    <div className="event-text-line" />
                    <div className="event-place">
                      <p>Poland</p>
                    </div>
                  </div>
                  <a href="event-detaill.html"><h3 className="h3-title">Business creativity workshops</h3></a>
                </div>
              </div>
              <div className="event-box">
                <div className="event-date-day">
                  <div className="event-date">
                    <p>15</p>
                  </div>
                  <div className="event-day">
                    <p>Jan, 2022</p>
                  </div>
                </div>
                <div className="event-text-line" />
                <div className="event-content-text">
                  <div className="event-time-place">
                    <div className="event-time">
                      <p>10:30am To 2:30pm</p>
                    </div>
                    <div className="event-text-line" />
                    <div className="event-place">
                      <p>Poland</p>
                    </div>
                  </div>
                  <a href="event-detaill.html"><h3 className="h3-title">Street Performance: Call for Art.</h3></a>
                </div>
              </div>
              <div className="event-box mb-0">
                <div className="event-date-day">
                  <div className="event-date">
                    <p>28</p>
                  </div>
                  <div className="event-day">
                    <p>Fab, 2022</p>
                  </div>
                </div>
                <div className="event-text-line" />
                <div className="event-content-text">
                  <div className="event-time-place">
                    <div className="event-time">
                      <p>10:30am To 2:30pm</p>
                    </div>
                    <div className="event-text-line" />
                    <div className="event-place">
                      <p>Poland</p>
                    </div>
                  </div>
                  <a href="event-detaill.html"><h3 className="h3-title">Digital transformation conference</h3></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Event End*/}
    {/*Pricing Start*/}
    <section className="main-pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pricing-title">
              <h2 className="h2-subtitle">Pricing Table</h2>
              <h2 className="h2-title">All Inclusive Pricing</h2>
            </div>
          </div>
        </div>
        <div className="row pricing-slider">
          <div className="col-lg-4">
            <div className="pricing-box">
              <h3 className="h3-title">Sliver Plan</h3>
              <p>Perfect for small marketing teams</p>
              <h2 className="h2-title">$59<span>/Month</span></h2>
              <div className="pricing-box-line" />
              <ul>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Course Discussions</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Content Librar</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>1-hour Mentorship</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Online Course</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Support 24x7</p></li>
              </ul>
              <a href="contact-us.html" className="sec-btn">Choose Plan</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-box">
              <div className="pricing-popular-tag">
                <p>Popular</p>
              </div>
              <h3 className="h3-title">Gold Plan</h3>
              <p>Perfect for small marketing teams</p>
              <h2 className="h2-title">$69<span>/Month</span></h2>
              <div className="pricing-box-line" />
              <ul>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Course Discussions</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Content Librar</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>1-hour Mentorship</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Online Course</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Support 24x7</p></li>
              </ul>
              <a href="contact-us.html" className="sec-btn">Choose Plan</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-box">
              <h3 className="h3-title">Diamond Plan</h3>
              <p>Perfect for small marketing teams</p>
              <h2 className="h2-title">$79<span>/Month</span></h2>
              <div className="pricing-box-line" />
              <ul>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Course Discussions</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Content Librar</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>1-hour Mentorship</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Online Course</p></li>
                <li><i className="fa fa-check" aria-hidden="true" /><p>Support 24x7</p></li>
              </ul>
              <a href="contact-us.html" className="sec-btn">Choose Plan</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Pricing End*/}
    {/*Core Features Start*/}
    <section className="main-core-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="core-features-content">
              <div className="core-features-title">
                <h2 className="h2-subtitle">Core Features</h2>
                <h2 className="h2-title">See What Our Mission Are</h2>
              </div>
              <div className="core-features-box">
                <div className="core-feature-icon feature-blue">
                  <img src="assets2/images/feature-icon-1.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">Student Life</h3>
                  <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                </div>
              </div>
              <div className="core-features-box">
                <div className="core-feature-icon feature-pink">
                  <img src="assets2/images/feature-icon-2.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">Best Online Class</h3>
                  <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                </div>
              </div>
              <div className="core-features-box mb-0">
                <div className="core-feature-icon feature-purple">
                  <img src="assets2/images/feature-icon-3.png" alt="icon" />
                </div>
                <div className="core-feature-text">
                  <h3 className="h3-title">24x7 Program</h3>
                  <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="core-features-img" style={{backgroundImage: 'url(assets2/images/coure-features-img.jpg)'}} />
    </section>
    {/*Core Features End*/}
    {/*Instructor Start*/}
    <section className="main-instructor">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="instructor-title">
              <h2 className="h2-subtitle">Best coach</h2>
              <h2 className="h2-title">Our Expert Instructor</h2>
            </div>
          </div>
        </div>
        <div className="row instructor-slider">
          <div className="col-lg-3">
            <div className="instructor-box">
              <div className="instructor-img">
                <img src="assets2/images/instructor-1.jpg" alt="Instructor" />
                <ul>
                  <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <a href="instructor-detail.html"><h3 className="h3-title">Kelly Franklin</h3></a>
              <p>Instructor</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="instructor-box">
              <div className="instructor-img">
                <img src="assets2/images/instructor-2.jpg" alt="Instructor" />
                <ul>
                  <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <a href="instructor-detail.html"><h3 className="h3-title">Indigo Violet</h3></a>
              <p>Instructor</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="instructor-box">
              <div className="instructor-img">
                <img src="assets2/images/instructor-3.jpg" alt="Instructor" />
                <ul>
                  <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <a href="instructor-detail.html"><h3 className="h3-title">Jason Response</h3></a>
              <p>Instructor</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="instructor-box">
              <div className="instructor-img">
                <img src="assets2/images/instructor-4.jpg" alt="Instructor" />
                <ul>
                  <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <a href="instructor-detail.html"><h3 className="h3-title">Jonquil Von</h3></a>
              <p>Instructor</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="instructor-box">
              <div className="instructor-img">
                <img src="assets2/images/instructor-5.jpg" alt="Instructor" />
                <ul>
                  <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                </ul>
              </div>
              <a href="instructor-detail.html"><h3 className="h3-title">Kelly Franklin</h3></a>
              <p>Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Instructor End*/}
    {/*Testimonial Start*/}
    <section className="main-testimonial">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="testimonial-title">
              <h2 className="h2-subtitle">Testimonial</h2>
              <h2 className="h2-title">What Our Client Says About Us</h2>
              <p>Proin et lacus eu odio tempor porttitor id vel augue. Vivamus volutpat vehicula sem, et imperdiet enim tempor id. Phasellus lobortis efficitur nisl eget vehicula. Donec viverra blandit nunc, nec tempor ligula ullamcorper venenatis.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-slider">
              <div className="testimonial-box">
                <p>"Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus".</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                      <img src="assets2/images/client-1.jpg" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                    <h3 className="h3-title">Christine Rose</h3>
                    <span>Customer</span>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img src="assets2/images/quote.png" alt="quote" />
                </div>
              </div>
              <div className="testimonial-box">
                <p>"Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus".</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                      <img src="assets2/images/client-2.jpg" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                    <h3 className="h3-title">Christine Rose</h3>
                    <span>Customer</span>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img src="assets2/images/quote.png" alt="quote" />
                </div>
              </div>
              <div className="testimonial-box">
                <p>"Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus".</p>
                <div className="testimonial-client">
                  <div className="testimonial-client-img-box">
                    <div className="testimonial-img">
                      <img src="assets2/images/client-3.jpg" alt="client" />
                    </div>
                  </div>
                  <div className="testimonial-client-name">
                    <h3 className="h3-title">Christine Rose</h3>
                    <span>Customer</span>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <img src="assets2/images/quote.png" alt="quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Testimonial End*/}
    {/*Blog Start*/}
    <section className="main-blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-title">
              <h2 className="h2-subtitle">Our Blog</h2>
              <h2 className="h2-title">Latest Blog &amp; News</h2>
            </div>
          </div>
        </div>
        <div className="row blog-slider">
          <div className="col-lg-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets2/images/blog-1.jpg" alt="blog" />
              </div>
              <div className="blog-content">
                <a href="blog-detail.html"><h3 className="h3-title">Proin feugiat tortor non neque eleifend.</h3></a>
                <div className="blog-box-line" />
                <div className="blog-date-comment">
                  <div className="blog-date">
                    <div className="blog-date-icon">
                      <img src="assets2/images/calendar.png" alt="icon" />
                    </div>
                    <a href="javascript:void(0);"><p>07 Jan, 2022</p></a>
                  </div>
                  <div className="blog-box-line" />
                  <div className="blog-comment">
                    <div className="blog-comment-icon">
                      <img src="assets2/images/comment.png" alt="icon" />
                    </div>
                    <a href="javascript:void(0);"><p>3 Comments</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets2/images/blog-2.jpg" alt="blog" />
              </div>
              <div className="blog-content">
                <a href="blog-detail.html"><h3 className="h3-title">Proin feugiat tortor non neque eleifend.</h3></a>
                <div className="blog-box-line" />
                <div className="blog-date-comment">
                  <div className="blog-date">
                    <div className="blog-date-icon">
                      <img src="assets2/images/calendar.png" alt="icon" />
                    </div>
                    <a href="javascript:void(0);"><p>07 Jan, 2022</p></a>
                  </div>
                  <div className="blog-box-line" />
                  <div className="blog-comment">
                    <div className="blog-comment-icon">
                      <img src="assets2/images/comment.png" alt="icon" />
                    </div>
                    <a href="javascript:void(0);"><p>3 Comments</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src="assets2/images/blog-3.jpg" alt="blog" />
              </div>
              <div className="blog-content">
                <a href="blog-detail.html"><h3 className="h3-title">Proin feugiat tortor non neque eleifend.</h3></a>
                <div className="blog-box-line" />
                <div className="blog-date-comment">
                  <div className="blog-date">
                    <div className="blog-date-icon">
                      <img src="assets2/images/calendar.png" alt="icon" />
                    </div>
                    <a href="javascript:void(0);"><p>07 Jan, 2022</p></a>
                  </div>
                  <div className="blog-box-line" />
                  <div className="blog-comment">
                    <div className="blog-comment-icon">
                      <img src="assets2/images/comment.png" alt="icon" />
                    </div>
                    <a href="javascript:void(0);"><p>3 Comments</p></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Blog End*/}
    {/*Cta Start*/}
    <section className="main-cta">
      <div className="container">
        <div className="row align-items-center cta-bg">
          <div className="cta-bg-img">
            <img src="assets2/images/cta-bg-img.png" alt="bg" />
          </div>
          <div className="col-lg-6">
            <div className="cta-title">
              <h2 className="h2-title">Start Your Best Online Classes With Us</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cta-btn">
              <a href="contact-us.html" className="sec-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Cta End*/}
    {/*Footer Start*/}
    <section className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-content">
              <a href="index.html"><img src="assets2/images/logo-footer.png" alt="Educater" /></a>
              <p>Duis a tempor magna. Maecenas ligula felis, imperdiet quis arcu eget, blandit ultricies risus. Vivamus fringilla urna vel risus congue accumsan.</p>
              <ul>
                <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-our-link">
              <h3 className="h3-title">Our Link</h3>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="blog-list.html">Blog</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-other-link">
              <h3 className="h3-title">Other Link</h3>
              <ul>
                <li><a href="instructor.html">Instructor</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="event-detaill.html">Event</a></li>
                <li><a href="about-us.html">Privacy Policy</a></li>
                <li><a href="about-us.html">Term &amp; Condition</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-subscribe">
              <h3 className="h3-title">Subscribe Now</h3>
              <div className="footer-subscribe-form">
                <input type="email" name="email" className="form-input subscribe-input" placeholder="Email Address" required />
                <button type="submit" className="sec-btn"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="copyright-text">Copyright © 2021 <a href="index.html">ShivaayThemes.</a> All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Footer End*/}
    {/* Scroll To Top Start */}
    <a href="#main-banner" className="scroll-top" id="scroll-to-top">
      <i className="fa fa-arrow-up" aria-hidden="true" />
    </a>
    {/* Scroll To Top End*/}
    {/* Bubbles Animation Start */}
    <div className="bubbles_wrap">
      <div className="bubble x1" />
      <div className="bubble x2" />
      <div className="bubble x3" />
      <div className="bubble x4" />
      <div className="bubble x5" />
      <div className="bubble x6" />
      <div className="bubble x7" />
      <div className="bubble x8" />
      <div className="bubble x9" />
      <div className="bubble x10" />
    </div>
    {/* Bubbles Animation End*/}
    {/* Jquery JS Link */}
    {/* Bootstrap JS Link */}
    {/* Custom JS Link */}
    {/* Slick Slider JS Link */}
    {/* Wow Animation JS */}
    {/*Banner Bg Animation JS*/}
    {/*Magnific Popup JS*/}
  </div>
  )
}

export default Test