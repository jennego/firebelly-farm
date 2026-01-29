import * as React from "react";
import ResponsiveAppBar from "../components/menu";
import Footer from "../components/footer";
import { Container } from "@mui/material";

const HorsesPage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="heading-header">
        <div className="heading-header-text">
          <h2>Horses</h2>
        </div>
      </div>
      <Container
        className="content-orange-full"
        maxWidth="false"
        style={{
          minHeight: "90vh",
        }}
      >
        <p>
          Working on getting content from the markdown file and if it should be
          an additonal item or not
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default HorsesPage;
