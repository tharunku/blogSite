import React from "react";
import { createMuiTheme } from "@material-ui/core";

const arcWhite="#ffffff";
const arcOrange="#6e00c2";

export default createMuiTheme({
    palette:{
        common:{
            white : `${arcWhite}`,
            Orange :`${arcOrange}`
        },
        primary:{
            main:`${arcOrange}`
        },
        secondary:{
            main:`${arcWhite}`
        }
    }
})