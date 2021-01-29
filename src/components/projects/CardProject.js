import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';


export const CardProject = ({title, used, explanation, navigation}) => {
    
    const useStyles = makeStyles({
      root: {
        minWidth: 275,
        background:"#77D3E1",
        color:"white",
        "&:hover":{
          background:"#79B8C1",
        }

      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: "28px",
      },
      body: {
        textAlign:"center",
        width:"80%",
        margin:"0 auto"
      },
      pos: {
        marginBottom: 12,
        color:"#3D516B"
      },
    });




  const classes = useStyles();

  return (
    <div>

    <Card className={classes.root} variant="outlined">
      <CardContent>

        <Typography className={classes.title} variant="h5" component="h2">
         {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         {used}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
         {explanation}
         
        </Typography>
      </CardContent>
      <NavLink exact={true} to={navigation} >
        <Button size="large" variant="outlined" style={ { marginBottom:"1rem" } }>Learn More</Button>
      </NavLink>
    </Card>
    </div>
  );
}
