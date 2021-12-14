import './userProfile.css'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import {Redirect} from "react-router";
import React, {useState} from "react";
import useUser from "../../../hooks/useUser";
import {Accordion, AccordionTab} from "primereact/accordion";
import {Calendar} from "primereact/calendar";
import UserInformationPanel from "./UserInformationPanel";
import ResponsiveDrawer from "./Drawer";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MisArticulos from "./MisArticulos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './userProfile.css'
import MisExperienciasPrevias from "./MisExperienciasPrevias";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SideMenu = ({id,setId}) => {
    const menu = [
    {item:'Mis datos personales', id:1},
    {item:'Mis direcciones', id:2},
    {item:'Metodos de pago', id:3},
    {item:'Mis experiencias previas', id:4},
    {item:'Mis articulos publicados', id:5},
    {item:'Mis servicios publicados', id:6}
    ]

    const handleClick=(id)=> {
        setId(id)
    }

    return(
        <List>
            {menu.map((menuItem)=> (
                <ListItem className={"listItem"} onClick={()=>handleClick(menuItem.id)} button key={menuItem.id} sx={{backgroundColor: id===menuItem.id?"#A183BC":"", height: "60px",border: 1, borderColor: 'grey.500'}}>
                    <ListItemIcon style={{color: "#3E3D3D", fontWeight: "bold"}}>
                        <ArrowForwardIosIcon/>
                    </ListItemIcon>
                    <Typography style={{color: "#2C2C2C", fontWeight: "bold"}}>
                        {menuItem.item}
                    </Typography>
                </ListItem>
            ))}
        </List>
    );
}

const ProfileHeader = () => {
    return (
        <Card sx={{ display: 'flex' }} style={{margin: '1%'}}>
            <CardMedia
                component="img"
                sx={{ width: 250, height: 250, borderRadius: '140px' }}
                image={"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                alt="Card Image"
            />
            <Box >
                <CardContent >
                    <Box sx={{justifyContent: "flex-start", alignItems: "center", alignContent: "center", marginTop:"15%"}}>
                        <Typography component="div" variant="h3" style={{height: '100%'}}>
                            Pablo Suarez
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="div" style={{height: '30%'}}>
                            pablosuarez85@gmail.com
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}

const DisplayedCards = () => {
    const cards = [
        {
            'id': 1,
            'titulo': 'RAQUETA TENIS WILSON ULTRA POWER 100',
            'descripcion': 'Raqueta perfecta para dominar el punto desde fondo de pista. Gran manejabilidad y confort en cada golpeo.',
            'peso': '284g',
            'empuñadura': 'L2',
            'precio': '$5600',
            'imagen': 'https://padelcoronado.com/wp-content/uploads/2020/01/Raqueta-Wilson-Ultra-Power-100.jpg',
        },
        {
            'id': 2,
            'titulo': 'Raqueta de Tenis',
            'descripcion': 'Raqueta profiesional tamaño grande',
            'precio': '$6700',
            'imagen': 'https://images.unsplash.com/photo-1615117572888-49e8520c4d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            'id': 3,
            'titulo': 'Raqueta de Tenis',
            'descripcion': 'Raqueta profiesional tamaño grande',
            'precio': '$3900',
            'imagen': 'https://images.unsplash.com/photo-1615117572888-49e8520c4d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'        },
    ]

    return(
        <>
            {cards.map((card) => (
                <Card sx={{ display: 'flex' }} key={card.id} style={{margin: '1%'}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={card.imagen}
                        alt="Card Image"
                    />
                    <Box sx={{ display: 'flex' ,flex: '1 0 auto' , alignItems: 'center', justifyContent: 'center'}}>
                        <CardContent sx={{ flex: '1 0 auto' , alignItems: 'center', justifyContent: 'center'}}>
                            <Box sx={{justifyContent: 'center'}}>
                                <Typography component="div" variant="h5" style={{height: '50%'}}>
                                    {card.titulo}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" style={{height: '30%'}}>
                                    {card.descripcion}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div" style={{height: '20%'}}>
                                    {card.precio}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
            ))}
        </>
    );
}


const UserProfile = () => {
    const {user, changeUser} = useUser();
    const {activeIndex, setActiveIndex} = useState(0)

    const[id, setId]= useState(1)

    let nombre = user.nombre;
    let apellido = user.apellido;
    let domicilio = user.domicilio;
    let du = user.du;
    let telefono = user.telefono;

    /*if(user.tipo !== "user"){
        return <Redirect to={"/"}/>
    }*/

    const guardarCambios = () => {

    }


    const generateTab = (method) => {
        return <AccordionTab header={"header"}>test</AccordionTab>
    }


    function generatePaymentMethodTabs(data){
        data.forEach(method => generateTab(method));
    }

    const getCurrentTab = (id) => {
        switch(id) {
            case 1:
                return <div>Mis datos Personales</div>
                break;
            case 2:
                return <div>Mis direcciones</div>
                break;
            case 3:
                return <div>Metodos de Pago</div>
                break;
            case 4:
                return <MisExperienciasPrevias />
                break;
            case 5:
                return <MisArticulos />
                break;
            case 6:
                return <div>Mis servicios Publicados</div>
                break;
            default:
                return <div> No se ha podido visualizar contenido </div>;
                break;
        }
    }

    return(
        <div className={"userProfile"}>
            {/*<UserInformationPanel></UserInformationPanel>*/}
            <Box size={"xl"} sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ border: 0 }}>
                        <Item>
                            <ProfileHeader />
                        </Item>
                    </Grid>
                    <Divider />
                    <Grid item xs={4} sx={{ border: 0 }}>
                        <Item style={{color: "#3E3D3D"}}>
                            <SideMenu id={id} setId={(value)=>setId(value)}/>
                        </Item>
                    </Grid>
                    <Grid item xs={8} sx={{ border: 0 }}>
                        <Item>
                            {getCurrentTab(id)}
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Accordion className={"checkout-accordion"} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            </Accordion>
        </div>
    )
}

/*
username:
password:
tipo: req.
nombre: re
apellido:
du: req.bo
domicilio:
telefono:
status: re
 */

export default UserProfile