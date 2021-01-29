import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const CustomButton = ({text, background}) => {

const useStyles = makeStyles(({
    root: {
     color:"#242B33",
     marginRight:"20px",
     marginBottom:"10px",
     textTransform:"none",
     "&:hover":{
         background:`${background}`,
         color:"white",
     }
    }
    }));

    const classes = useStyles();

    return (
          <Button variant="outlined" className={classes.root} > {text}</Button>
        )

}

export default CustomButton;



