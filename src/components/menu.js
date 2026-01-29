import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { navigate } from "gatsby";

const pages = [
  { name: "Camps", slug: "/camps" },
  { name: "Horses", slug: "/horses" },
  { name: "Other Animals", slug: "/animals" },
  { name: "Contact", slug: "/contact" },
  { name: "Home", slug: "/" },
];

function ResponsiveAppBar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isCurrent = ({ isCurrent }) => {
    return isCurrent ? { className: "nav-active" } : { className: "nav-link" };
  };
  const FullNavLink = (props) => (
    <Link getProps={isCurrent} {...props}>
      {props.children}
    </Link>
  );

  return (
    <AppBar position="static" style={{ background: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu "
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <Link className="mobile-nav" to={page.slug}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            style={{ justifyContent: "center" }}
          >
            {pages.map((page) => (
              <FullNavLink getProps={isCurrent} {...page} to={page.slug}>
                {page.name}
              </FullNavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
