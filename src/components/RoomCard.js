import { Button, makeStyles, Typography } from "@material-ui/core"


export const RoomCard = ({src, title, description}) => {
  const classes= useStyle()
  return (
    <div className={classes.root}>
      <figure className={classes.imageWrapper}>
        <img className={classes.media} src={src} alt= {title}/>
      </figure>
      <Typography variant="h5" color="textPrimary">
        {title}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {description}
      </Typography>
      <Button className={classes.button}>Reservar</Button>

    </div>
  )
}


const useStyle = makeStyles((theme)=> ({
  root:{
    margin: theme.spacing(4,0,2,0),
    [theme.breakpoints.down("sm")]: {
      "& h6": {
        wordWrap: "break-word",
      }
    },
  },
  imageWrapper:{
    overflow: "hidden",

  },
  media: {
    height: "400px",
    width: "400px",
    objectFit: "cover",
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