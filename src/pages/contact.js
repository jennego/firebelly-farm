import * as React from "react";
import ResponsiveAppBar from "../components/menu";
import Footer from "../components/footer";
import { Box, Button, Container, Grid } from "@mui/material";
import { TextField } from "@mui/material";

const ContactPage = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="heading-header">
        <div className="heading-header-text">
          <h2>Contact</h2>
        </div>
      </div>
      <Container
        className="content-orange-full"
        maxWidth="false"
        style={{
          minHeight: "90vh",
        }}
      >
        <div className="text-container" style={{ marginTop: "1rem" }}>
          <Grid container spacing={3} direction="column">
            <Grid>
              <TextField id="Name" label="Name" variant="filled" fullWidth />
            </Grid>
            <Grid>
              <TextField fullWidth id="Email" label="Email" variant="filled" />
            </Grid>
            <Grid xs={12}>
              <TextField
                id="body"
                label="Message"
                multiline
                rows={5}
                maxRows={10}
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid>
              <Button variant="contained" style={{ background: "black" }}>
                {" "}
                Submit{" "}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default ContactPage;
