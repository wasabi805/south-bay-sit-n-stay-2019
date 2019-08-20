import React from "react";
import { styled } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { ThemeProvider } from "@material-ui/styles";
import { cb_img_right_context_left } from "../common/Themes/themes-common";

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up("md")]: {
            background: "cyan"
        }
    },

    circleImg: {
        position: "relative",
        height: "20vw",
        width: "20vw",
        margin: "auto",

        borderRadius: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
}));

const CommonBodyContextRightImgLeft = props => {
    const { context } = props;
    const classes = useStyles();

    const MainWrapper = styled(Grid)({});

    const Container = styled(Box)({
        position: "absolute",
        // marginLeft: "-12%",
        // top: "24%"
        color: "white",
        zIndex: 1,
        background: "#00000047",
        top: "32%",
        marginRight: "22%",
        padding: "6%"
    });

    const Header = styled(Typography)({
        fontWeight: "400",

        color: "534e59",
        textShadow: "0 1px 1px #111111"
        // padding: "0.5rem"
    });

    const Text = styled(Typography)({
        fontWeight: "400",
        // color: "#534e59",
        color: "white",
        textShadow: "0 1px 1px #111111",
        padding: "1rem",
        width: "100%",
        fontSize: "2rem"
    });

    let bgImg = props.context.image;

    const ImageWrapper = styled(Grid)({
        position: "relative",
        padding: "7%",
        zIndex: 1
    });

    const TextWrapper = styled(Grid)({
        position: "relative"
    });

    return (
        <MainWrapper container className={`${context.wrapperColor}`}>
            <ImageWrapper item xs={5}>
                {/*{console.log('What is the bg pos?' , props)}*/}
                {console.log("WHat is  context ?", context.bgImgPos)}

                <div
                    className={classes.circleImg}
                    style={{
                        backgroundImage: `url("${props.circleImg}")`,
                        backgroundPosition: `${context.bgImgPos}`
                    }}
                />
            </ImageWrapper>

            <TextWrapper item xs={7} style={{ position: "relative" }}>
                <ThemeProvider theme={cb_img_right_context_left}>
                    <Container>
                        <Header variant={"h2"}>{context.header}</Header>
                        <Text variant={"body1"}>{context.context}</Text>
                    </Container>
                </ThemeProvider>
            </TextWrapper>
        </MainWrapper>
    );
};

export default CommonBodyContextRightImgLeft;