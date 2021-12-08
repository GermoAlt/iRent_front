import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SideMenu = () => {
    const menu = ['Mis datos personales', 'Mis metodos de pago', 'Mis articulos publicados', 'Mis alquileres', 'Mis cursos']

    return(
        <List>
            {menu.map((menuItem)=> (
                <ListItem button key={menuItem}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={menuItem} />
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
                sx={{ width: 250, height: 250, borderRadius: '45px' }}
                image={"https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                alt="Card Image"
            />
            <Box sx={{ display: 'flex' ,flex: '1 0 auto'}}>
                <CardContent sx={{ flex: '1 0 auto'}}>
                    <Box sx={{justifyContent: 'center'}}>
                        <Typography component="div" variant="h3" style={{height: '50%'}}>
                            Juan Perez
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="div" style={{height: '30%'}}>
                            juanperez@gmail.com
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
            'titulo': 'Raqueta de Tenis',
            'descripcion': 'Raqueta profiesional tamaño grande',
            'precio': '$5600',
            'imagen': 'https://images.unsplash.com/photo-1615117572888-49e8520c4d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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

const BasicGrid = () => {
    return (
        <Box size={"xl"} sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Item>
                        <ProfileHeader />
                    </Item>
                </Grid>
                <Divider />
                <Grid item xs={4}>
                    <Item>
                        <SideMenu />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <DisplayedCards />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

const ProfileContent = () => {
    return(
        <BasicGrid/>
    );
}

export default ProfileContent;