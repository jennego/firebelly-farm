import * as React from "react";
import ResponsiveAppBar from "../components/menu";
import Footer from "../components/footer";
import { Container } from "@mui/material";

const CampPage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="heading-header">
        <div className="heading-header-text">
          <h2>Camps</h2>
        </div>
      </div>
      <Container
        className="content-orange-full"
        maxWidth="false"
        style={{
          minHeight: "90vh",
        }}
      >
        <p>Working on getting content from the markdown file</p>
      </Container>

      <Footer />
    </div>
  );
};

export default CampPage;
