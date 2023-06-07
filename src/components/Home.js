import { Button, CssBaseline, Grid, makeStyles } from '@material-ui/core'
import { useState } from 'react'
import mockData from "../mockData"
import Banner from './Banner'
import DatePicker from './DatePicker'
import { RoomCard } from './RoomCard'



const Home = () => {
  const classes = useStyle()
  const [showdates, setShowdates] = useState(false)
  return (
    <>
    <CssBaseline/>
    <div className={classes.root}>
        <div className={classes.dates}>
          <Button onClick={ ()=>setShowdates(!showdates)}>
            {
              showdates ? "Ocultar Calendario" : "Ver Calendario"
            }
          </Button>
          
        </div>
        {
          showdates && <DatePicker/>

        }
        <Banner/>
        <Grid container className={classes.section} spacing= {3}>
          {
            mockData.map(({src, title, description}, index) => (
              <Grid item sm="6" md="4" lg= "3">
                  <RoomCard src= {src} title={title} description={description} key= {index}/>
              </Grid>
            ))
          }
        </Grid>
    </div>
    </>
  )
}




const useStyle = makeStyles((theme)=> ({
  root:{
      display: "flex",
      flexDirection: "column",
      margin: theme.spacing(2),
  },
  dates: {
    display: "flex",
    flexDirection: "column",
    "& button": {
      border: "1px solid #ccc",
      backgroundColor: "rgba(255,103,31,0.4)",
      color: "#fff",
      textTransform: "inherit",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& button:hover": {
      backgroundColor: "#fff",
      color: "rgba(255,103,31,0.4)",
    },
  },


}))









export default Home