import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {styled} from "@material-ui/styles"
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import {header_and_buttons_only} from "./Themes/themes-common"


import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({
    root:{
        // background: 'cyan',
        minHeight: '20vh',
        padding: '2rem 0',
        color: 'white',
        backgroundColor: '#de0063',
        backgroundImage: 'radial-gradient(circle farthest-side at left top, #00bcde, #640487 125%)',

        position: 'relative',
        transform: 'translate(0px, -20px)',

        [theme.breakpoints.up('lg')] : {

        }
    },

    buttonContainer: {
        position: "relative",
        // border: "1px solid red",
        minHeight: '7rem',

        display: "inline-block",
        width: '65%',
        left: '50%',
        transform : 'translateX(-50%)',
        textAlign: "center"
    },

    button:{
        padding: '2rem 6rem',
        color: 'white',
        background: '#673ab7d9',
        margin: '2rem 4rem',
        textDecoration: 'none',
        fontSize: '2rem',
        border: '1px solid white',
        borderRadius: '4rem',
    },

    header:{
        [theme.breakpoints.up('lg')] : {
            fontSize: '2rem'
        }
    }
}));

const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
    });
};

const Header = styled(Typography)({
    textAlign: 'center',
    padding: '2rem 0',
    marginBottom: '3%',

});



const HeaderAndButtonsOnly = (props)=>{
    let {context } = props

    const classes = useStyles();

    return(
        <div  id={'service-book-now-btn-container'} className={classes.root} >
            <Header variant={'h2'} className={classes.header} >{context.header}</Header>

            <div className={classes.buttonContainer}>
                {context.buttons.map(btn=>{
                    return(
                        <Link className={classes.button} to={"/#book-now"} scroll={(el)=>scrollWithOffset(el,70)}

                              id={btn.id} key={btn.id} >{btn.name}</Link>
                    )
                })}
            </div>

        </div>


    )
};


export default HeaderAndButtonsOnly