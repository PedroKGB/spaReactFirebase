import { makeStyles, Slider, Typography } from '@material-ui/core'
import { useState } from 'react'
import mockData from '../mockData'
import { Resultados } from './Resultados'
import { useSelector } from 'react-redux'
import { selectStart } from '../features/startSlice'
import { selectEnd } from '../features/endSlice'

const Searchpage = () => {
  const classes = useStyle()
  const [value, setValue]= useState(200)
  const start = useSelector(selectStart)
  const end = useSelector(selectEnd)

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Servicios disponibles para reservar
      </Typography>

      <div className={classes.selector}>
        <Typography gutterBottom>
          Ajusta tu presupuesto
        </Typography>
        <Slider value={value} onChange={handleChange}   aria-labelledby="continuous-slider" min= {20} max= {200} valueLabelDisplay= "auto"
        color= "secondary"
        />
      </div>

        {
        mockData
        .filter((data) => data.price < value)
        .filter((data)=> end < data.notAvailablestart || start > data.notAvailableend)
        .map(({src, title, description, price}, index) => (
          <Resultados title= {title}
          key= {index}
          src= {src}
          description= {description}
          price= {price}
          />
      ))
      }
      
    </div>
  )
      



}

const useStyle = makeStyles((theme)=> ({
  root:{
      
  },
  selector: {
    width: "300px",
    margin: theme.spacing(3),
  },
}))

export default Searchpage