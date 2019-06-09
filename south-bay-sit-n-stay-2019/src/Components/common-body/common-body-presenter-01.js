import React from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import CommonBodyPres01Styles from "../../assets/style/components/common-body-presenter-01.scss";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/People";

const CommonBodyPresenter01 = () => {
  const CommonBody01Grid = styled(Grid)({
    // background: 'lime'
  });

  const RowTop = styled(Grid)({
    minHeight: "30rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  });

  const ItemBottom = styled(Grid)({
    minHeight: "30rem",
    textAlign: "center",
    // border: "1px solid yellow",
    position: "relative"
  });

  const ItemContext = styled(Box)({
    position: "relative",
    display: "inline-block",
    width: "50%",
    left: "-5rem"
  });

  let Avatar = styled(ListItemIcon)({
    left: "-44px",
    display: "inline-block",
    position: "relative"
  });

  let ListHeader = styled(Typography)({
    left: "-35px",
    position: "relative"
  });

  return (
    <CommonBody01Grid container direction="row">
      <RowTop item xs={12}>
        <ItemContext>
          <Typography variant={"h1"}>Our Mission</Typography>

          <Typography variant={"body1"}>
            Lorem ipsum is a pseudo-Latin text used in web design,typography,
            layout, and printing in place of English to emphasise design
            elements over content. It's also called placeholder (or filler)
            text.
          </Typography>
        </ItemContext>
      </RowTop>

      <ItemBottom item xs={12} sm={4}>
        <List className={CommonBodyPres01Styles["grey-box"]}>
          <Box>
            <Avatar>
              <FolderIcon />
            </Avatar>

            <ListHeader variant={"h6"} display={"inline"}>
              We Are
            </ListHeader>
          </Box>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 1
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 2
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 3
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 4
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </ItemBottom>

      {/*=====    ======  ======  ======  =====   =====   ====    */}

      <ItemBottom item xs={12} sm={4}>
        <List className={CommonBodyPres01Styles["grey-box"]}>
          <Box>
            <Avatar>
              <FolderIcon />
            </Avatar>

            <ListHeader
              variant={"h6"}
              display={"inline"}
              style={{ width: "75%" }}
            >
              We Are Not
            </ListHeader>
          </Box>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 1
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 2
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 3
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 4
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </ItemBottom>

      {/*=====    ======  ======  ======  =====   =====   ====    */}

      <ItemBottom item xs={12} sm={4}>
        <List>
          <Box>
            <Avatar>
              <FolderIcon />
            </Avatar>

            <ListHeader variant={"h6"} display={"inline"}>
              What We Do
            </ListHeader>
          </Box>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 1
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 2
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 3
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant={"body1"} align={"center"}>
                List item text 4
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </ItemBottom>
    </CommonBody01Grid>
  );
};

export default CommonBodyPresenter01;

CommonBodyPresenter01.propTypes = {};
