/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../../components1/MDBox";
import MDTypography from "../../components1/MDTypography";

// Material Dashboard 2 PRO React base styles
import typography from "../../assets/theme/base/typography";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer({ company, links }) {
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <MDBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <MDTypography variant="button" fontWeight="regular" color="text">
            {link.name}
          </MDTypography>
        </Link>
      </MDBox>
    ));

    return (
      <MDBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
        px={1.5}
      >
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color="text"
          fontSize={size.sm}
          px={1.5}
        >
          &copy; {new Date().getFullYear()}, made with
          <MDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </MDBox>
          by
          <Link href={href} target="_blank">
            <MDTypography variant="button" fontWeight="medium">
              &nbsp;{name}&nbsp;
            </MDTypography>
          </Link> & Design Inspiration by 
          <Link href={href} target="_blank">
          <MDTypography variant="button" fontWeight="medium">
            &nbsp;E-JAB&nbsp;
          </MDTypography>
        </Link>
          for a better future.
        </MDBox>
        <MDBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,
  
            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
        <MDBox fontSize={size.md} color="text" mb={-0.5} mx={1.0}>
        <Link href="https://twitter.com/jessybandya" target="__blank">
        <TwitterIcon color="inherit" fontSize="inherit"/>
        </Link>
      </MDBox>
      <MDBox fontSize={size.md} color="text" mb={-0.5} mx={1.0}>
      <Link href="https://www.instagram.com/jessybandya/" target="__blank">
      <InstagramIcon color="inherit" fontSize="inherit"/>
      </Link>
    </MDBox>
    <MDBox fontSize={size.md} color="text" mb={-0.5} mx={1.0}>
    <Link href="https://www.linkedin.com/in/jessy-bandya-7934a01b4/" target="__blank">
    <LinkedInIcon color="inherit" fontSize="inherit"/>
    </Link>
  </MDBox>
  <MDBox fontSize={size.md} color="text" mb={-0.5} mx={1.0}>
  <Link href="https://github.com/jessybandya" target="__blank">
  <GitHubIcon color="inherit" fontSize="inherit"/>
   </Link>
</MDBox>
        </MDBox>
                {/* Scroll To Top Start */}

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
      </MDBox>
    );
  }
  
  // Setting default values for the props of Footer
  Footer.defaultProps = {
    company: { href: "https://laughing-darwin-c668f3.netlify.app/", name: "Jessy Bandya" },
  };
  
  // Typechecking props for the Footer
  Footer.propTypes = {
    company: PropTypes.objectOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.object),
  };

export default Footer;
