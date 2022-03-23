import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import logo from "../../../assets/images/Blinkist.png";
import NavButton from "../../molecules/NavButton/index";
import { Link } from "react-router-dom";
import ExploreModal from "../../molecules/ExploreModal";
import icon from "../../../assets/images/icon"
import BlinkIcon from  "../../atoms/BlinkIcon";
import Avatar from "../../atoms/BlinkAvatar";

const Header = () => {
  const [exploreModal, setExploreModal] = useState(false);

  const arrowDownIcon = (
    <BlinkIcon d={icon.downArrowIcon} width="20" height="20" viewBox="0 0 20 20" />
  );

  const arrowUpIcon = (
    <BlinkIcon d={icon.upArrowIcon} width="14" height="8" viewBox="0 0 14 8" />
  );

  const toggleExplore = () => {
    setExploreModal(!exploreModal);
  };

  return (
      <Box
        data-testid="header"
        sx={{
          zIndex: 100,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: 1,
          mb: 5,
          margin: "20px 0 20px 0"
        }}
      >
        <Container sx={{ width: "70%" }}>
          <Grid
            container
            sx={{ display: "flex", alignItems: "center" }}
            spacing={2}
          >
            <Grid item xs={1.75}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </Grid>
            <Grid item xs={1}>
              <NavButton
                preElement={
                  <BlinkIcon
                    d={icon.searchIcon}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  />
                }
                textColor="grey.700"
                hoverColor="background.default"
                hoverTextColor="primary.300"
              />
            </Grid>
            <Grid item xs={1.5}>
              <NavButton
                children="Explore"
                postElement={exploreModal ? arrowUpIcon : arrowDownIcon}
                textColor="textColors.highEmphasis"
                textVariant="body1"
                hoverColor="background.default"
                hoverTextColor="primary.300"
                onClick={toggleExplore}
              />
            </Grid>
            <Grid item >
              <NavButton
                children="My Library"
                textColor="textColors.highEmphasis"
                textVariant="body1"
                hoverColor="background.default"
                hoverTextColor="primary.300"
              />
            </Grid>
            <Grid item xs>
              <NavButton
                children="Highlights"
                textColor="textColors.highEmphasis"
                textVariant="body1"
                hoverColor="background.default"
                hoverTextColor="primary.300"
              />
            </Grid>
            <Grid item >
              <NavButton
                children={<Avatar aHeight={30} aWidth={30} letter="B"/>}
                postElement={arrowDownIcon}
                textColor="textColors.highEmphasis"
                textVariant="body1"
                hoverColor="background.default"
                hoverTextColor="primary.300"
              />
            </Grid>
          </Grid>
          {exploreModal && (
            <Box
              sx={{
                position: "fixed",
                zIndex: 1,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <ExploreModal />
            </Box>
          )}
        </Container>
      </Box>
  );
};

export default Header;
