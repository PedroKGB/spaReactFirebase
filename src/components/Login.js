import { Button } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './Stateprovider'

function Login() {
    const [{user}, dispatch] = useStateValue()
    const classes= useStyle()

    const signing = () => {
        auth.singInWithpopup(provider).then(result=> dispatch ({
            type: actionTypes.SET_USER,
            user: result.user
        })).catch((err)=> alert(err.message))
    }

  return (
    
    <div className='login'>
        <Button variant='contained' color='primary' onClick={signing}>
            Registrate con Google          
        </Button>
    </div>
  )
}

export default Login

const useStyle = makeStyles((theme)=> ({
    Login: {
       
    }
}))
    