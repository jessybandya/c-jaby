import React from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../components1/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";

function Billing() {
  return <div>
  <DashboardLayout>
  <DashboardNavbar />
  <MDBox py={3}>
  <h1>This is Main Messages Page</h1>
  </MDBox>
  <Footer />
</DashboardLayout>
  </div>;

}

export default Billing;
