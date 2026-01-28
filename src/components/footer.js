import * as React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Copyright } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      style={{ background: "#000", color: "#fff", height: "10vh" }}
    >
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "space-evenly", paddingTop: "1rem" }}
      >
        <Grid>
          <Copyright /> Firebelly Farm
        </Grid>
        <Grid>
          {" "}
          <FacebookIcon />{" "}
        </Grid>
        <Grid>
          North Cowichan, BC, Canada <br /> firebellymama at gmail.com
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
