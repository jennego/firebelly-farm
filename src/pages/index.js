import * as React from "react";
import { Container } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/menu.js";

const IndexPage = () => {
  return (
    <div>
      <ResponsiveAppBar> </ResponsiveAppBar>

      <Grid container className="header-container">
        <Grid className="header-solid" size={{ xs: 1, md: 3 }}></Grid>

        <Grid size={{ xs: 11, md: 9 }}>
          <StaticImage
            src="../images/mares.jpg"
            objectFit="cover"
            layout="fullWidth"
            style={{ maxHeight: "50vh" }}
          />
        </Grid>

        <div className="overlay">
          <h1>
            Firebelly <br /> <span className="italic"> Farm </span>
          </h1>
        </div>
      </Grid>

      <Container
        className="content-orange-full"
        maxWidth="false"
        style={{
          height: "40vh",
        }}
      >
        <div className="text-container">
          <h2>Welcome to Firebelly Farm</h2>

          <p>
            Firebelly Farm is small family farm with horses and chickens in
            North Cowichan.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
