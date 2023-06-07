import { Button, makeStyles, Paper, Typography } from '@material-ui/core'
import accounting from 'accounting'

export const Resultados = ({src, title, description, price}) => {
    const classes= useStyle()
  return (
        <Paper className= {classes.root}>
            <div className= {classes.left}>
                <img src= {src} className= {classes.image} alt = {title}/>
            </div>
            <div className={classes.right}>
                <Typography variant= "h6">
                    {title}
                </Typography>
                <Typography variant= "body1">
                    {description}
                </Typography>
                <Typography variant= "body1"> Precio: {" "}
                    <span>{accounting.formatMoney(price) }</span>
                </Typography>
                <Button className={classes.button}>Reservar</Button>

            </div>

        </Paper>



  )
}


const useStyle = makeStyles((theme)=> ({
    root:{
        display: "flex",
        justifyContent: "flexStart",
        margin: theme.spacing(1),
    },
    left: {
        margin: theme.spacing(2,5,5,5),
    },
    image: {
        maxWidth: "400px",
        height: "auto",
        borderRadius: "10px",
        transform: "scale(0.9)",
        WebkitTransform: "scale(0.9)",
        transition: ".3s ease-in-out",
        WebkitTransition: ".3s ease-in-out",
        "&:hover": {
        transform: "scale(1)",
        WebkitTransform: "scale(1)",
        },
    },
  }))