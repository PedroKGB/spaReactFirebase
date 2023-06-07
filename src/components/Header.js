import { AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import logo from "../fotos/logo1.jpg"
import SearchIcon from "@material-ui/icons/Search"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "react-router-dom"
import Login from "./Login"
import { useStateValue } from "./Stateprovider"
import { actionTypes } from "./reducer"



const Header = () => {
    const [tablet, setTablet] = useState(true)
    const [draweropen, setDraweropen] = useState(false)
    const classes= useStyle()
    const [{isopen}, dispatch] = useStateValue(); 
    const toggleMenu = () =>{
          dispatch({
            type:actionTypes.TOGGLE_MENU,
            isopen:!isopen,
          })
    }

 

    useEffect(()=>{
        const responsiveness = ()=> window.innerWidth < 900 ? setTablet(true) : setTablet(false)
        responsiveness();
        window.addEventListener("resize", ()=> responsiveness())
    },[])

    const displayTablet = () => {
        const handleDrawerOpen = ()=> {
            setDraweropen(true)
        }
        const handleDrawerClose = ()=> {
            setDraweropen(false)
        }
        const headersData = ["Mis Reservas", "Calendario", "Salir"]
        const getDrawerChoices = ()=> {
            return headersData.map((data)=>{
                return (
                    <List>
                        <ListItem>{data}</ListItem>
                    </List>
                )
            })
        }

        return(
            <Toolbar className={classes.toolbar} >
            <IconButton {...{
                edge: "start",
                color: "#ccc",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
            }}>
                <MenuIcon fontSize="large"/>
            </IconButton>
            <Drawer {...{
                anchor: "left",
                open: draweropen,
                onClose: handleDrawerClose,
            }}>
                <div>{getDrawerChoices()}</div>
            </Drawer>
            <Link  to="/">
                <img src={logo} className={classes.logo} atl= "logo1"/>
            </Link>
            
            <div className={classes.right}>
            <Login/>
                
            </div>
        </Toolbar>
        )

        
    }

    
    const displayDesktop = () => (
        
        

        <Toolbar className={classes.toolbar}>
            <Link  to="/">
                <img src={logo} className={classes.logo} atl= "logo1"/>
            </Link>
            <div className={classes.center}>
                <InputBase fullWidth placeholder="Buscar..." inputProps={{className: classes.input}}/>
                <SearchIcon/>
            </div>
            <div className={classes.right}>
                <Login/>
            </div>

        </Toolbar>
    )
    

return (
    <AppBar className= {classes.root}>
        {
            tablet ? displayTablet() : displayDesktop()
        }
    </AppBar>
)
}
const useStyle = makeStyles((theme)=> ({
    root:{
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 99,
        width: "100%",
        height: "70px",
    },
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",


    },
    logo :{

        height: "100px",
        margin: theme.spacing(1, 0, 0, 2),
        objectFit: "contain",
    },
    input: {
        fontSize: "1.2rem",
        padding: theme.spacing(1, 5, 1, 5,),

    },
    center: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        border: "1px solid lightgray",
        borderRadius: "999px",
        minWidth: "300px"

    },
    right: {
        color: "#333",
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(2),
    },
    avatar: {
       
        

    },


}))

export default Header