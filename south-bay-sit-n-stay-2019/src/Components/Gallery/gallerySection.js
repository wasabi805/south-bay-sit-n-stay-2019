import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    // background: "url('https://sb-sit-2019.s3.amazonaws.com/dog-paws-trail.png')",
    backgroundRepeat: "no-repeat",
    paddingBottom: '8rem',
    textAlign: 'end',
  },
  gridList: {
    width: 900,
    height: 590
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const tileData = [
  //https://placedog.net/
  {
    img: "https://placedog.net/500",
    title: "Dash",
    author: "Jess G."
  },
  {
    img: "https://placedog.net/501",
    title: "Mickey",
    author: "Walt D."
  },
  {
    img: "https://placedog.net/502",
    title: "Sparty",
    author: "Byron"
  },
  {
    img: "https://placedog.net/503",
    title: "Lassie",
    author: "Timmy T."
  },
  {
    img: "https://placedog.net/504",
    title: "Ghost",
    author: "John Snow"
  },
  {
    img: "https://placedog.net/505",
    title: "Simba",
    author: "Raymond H."
  },

  {
    img: "https://placedog.net/506",
    title: "Bolt",
    author: "Jenn D."
  },

  {
    img: "https://placedog.net/507",
    title: "Oscar",
    author: "Bob B."
  },

  {
    img: "https://placedog.net/508",
    title: "Shayla",
    author: "Matt R."
  },

  {
    img: "https://placedog.net/509",
    title: "Fido",
    author: "John Doe"
  }
];

const GallerySection = () => {
  const classes = useStyles();

  return (
    <Box id={'gallery'} className={classes.root} pt={"5rem"} pr={"5rem"}>
      <Box>
        <Typography variant={"h1"}>
          Meet some of our previous guest and pals
        </Typography>
      </Box>

      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">The Peanut Gallery</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>owner: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
};

export default GallerySection;
