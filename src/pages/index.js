import * as React from "react";
import { Container } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/menu.js";
import Footer from "../components/footer.js";

const IndexPage = () => {
  return (
    <div>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <ResponsiveAppBar> </ResponsiveAppBar>

      <Grid
        container
        className="header-container"
        style={{ backgroundColor: "#b50e1a" }}
      >
        <Grid className="header-solid" size={{ xs: 1, md: 3 }}></Grid>

        <Grid size={{ xs: 11, md: 9 }}>
          <StaticImage
            src="../images/sleepinghorses.jpg"
            objectFit="cover"
            layout="fullWidth"
            objectPosition="50% 90%"
            style={{
              height: "50vh",
              width: "100%",
            }}
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
          minHeight: "40vh",
        }}
      >
        <div className="text-container" style={{ textAlign: "center" }}>
          <h2>Welcome to Firebelly Farm</h2>

          <p>
            Firebelly Farm is small family farm with horses and chickens in
            North Cowichan.
          </p>

          <p>
            Firebelly Farm is the home of Leora and her 3 human kids, and an
            assortment of animals. Leora is a certified BC Teacher currently
            teaching at Queen Margaret's School and an certified Equestrian
            Canada coach.
          </p>
          <p>
            We run farm camps for kids in the summer and occasionally have some
            availability for beginner riding lessons.
          </p>
          <p>
            We do not currently have a riding arena so our riding facilities are
            seasonal.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
