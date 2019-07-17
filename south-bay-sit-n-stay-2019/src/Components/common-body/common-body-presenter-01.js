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

const CommonBodyPresenter01 = props => {
  const CommonBody01Grid = styled(Grid)({
    padding: "0 10%"
  });

  const RowTop = styled(Grid)({
    minHeight: "30rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
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

  const ItemContext = styled(Box)({
    position: "relative",
    display: "inline-block",
    width: "50%",
    left: "-5rem"
  });

  const ItemBottom = styled(Grid)({
    minHeight: "30rem"
    // border: "1px solid yellow",
  });

  const TraitsList = styled(List)({
    display: "inline-block",
    // border: "1px solid blue",
    textAlign: "start"
  });

  const showImage = context => {
    if (context) {
      return (
        <img className={context.imageClassName} src={context.image} alt={""} />
      );
    }
  };

  console.log(props, "common-body-presenter");

  let { className, context, list } = props.body_01;

  return (
    <CommonBody01Grid id={"its-me"} container direction="row">
      <RowTop item xs={12} className={className}>
        {showImage(context)}

        <ItemContext className={"our-mission"}>
          <Typography variant={"h1"}>{context.header}</Typography>
          <Typography variant={"body1"}>{context.body}</Typography>
        </ItemContext>
      </RowTop>

      {list.map(items => {
        return (
          <ItemBottom
            item
            key={items.id}
            xs={12}
            sm={4}
            className={items.listWrapperStyle}
            // style={{ border: "1px solid red" }}
          >
            {/*List Title*/}
            <Box>
              <Avatar>
                <FolderIcon />
              </Avatar>
              <ListHeader variant={"h6"} display={"inline"}>
                {items.header}
              </ListHeader>
            </Box>

            {/*Ordered List*/}
            <TraitsList>
              {items.listText.map((item, index) => {
                return (
                  <ListItem
                    key={item + index}
                    // style={{ border: "1px solid yellow" }}
                  >
                    <Typography variant={"body1"} align={"center"}>
                      {item}
                    </Typography>
                  </ListItem>
                );
              })}
            </TraitsList>
            {/*END List*/}
          </ItemBottom>
        );
      })}
    </CommonBody01Grid>
  );
};

export default CommonBodyPresenter01;

CommonBodyPresenter01.propTypes = {};
