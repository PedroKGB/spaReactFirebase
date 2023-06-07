import { Button, makeStyles,} from "@material-ui/core"
import { Link } from "react-router-dom"
import Background_image from "../fotos/logo.jpg"

const Banner = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <div className= {classes.info}>
        <Link to = "/search">
          <Button variant= "contained">Ver Catalogo</Button>
        </Link>
      </div>
    </div>
  )
}

const useStyle = makeStyles((theme) =>({

  root: {
    height: "50vh",
    position: "relative",
    backgroundImage: `url(${Background_image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

  },
  info: {
    color: "#000",
    width: "350px",
    padding: theme.spacing(2),
    "& h3": {
      marginBottom: theme.spacing(4),
    },
    "& button": {
      backgroundColor: "rgba(255,103,31)",
      color: "#000",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& button:hover": {
      backgroundColor: "#fff",
      color: "rgba(255,103,31)", 
    },
  },

}))



export default Banner