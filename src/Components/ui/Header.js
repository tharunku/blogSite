import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import ytlogo2 from "../../assests/ytlogo2.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    logo:{
        widhth:"20em",
        height:"5em",
    },
    tabContainer:{
        marginLeft:"auto"
    },
    tab:{
        fontFamily:"Raleway",
        textTransform:"none",
        fontWeight:700,
        fontSize:"1rem",
        minWidth:10,
        marginLeft:"40px",
        color:"white"
    },
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom:"2em"
    }
}))

export default function Header(props){
    const classes=useStyles();
    const [value, setValue]=useState(0);

    const handleCHange=(e,value) =>{
        setValue(value);
    };

    return(
        <React.Fragment>
        <AppBar >
            <Toolbar disableGutters>
                <img alt="logo" className={classes.logo} src={ytlogo2} />
                <h2> Tasty Yummiest </h2>
                <Tabs value={value} onChange={handleCHange} className={classes.tabContainer}>
                    <Tab className={classes.tab} component={Link} to="/home"  label="Home" />
                    <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                    <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                </Tabs>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}></div>
        </React.Fragment>

    );
}