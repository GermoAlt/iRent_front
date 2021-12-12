import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Divider} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Grid from "@mui/material/Grid";

const MisArticulos = () => {
    const cards = [
        {
            'id': 1,
            'titulo': 'Raqueta de tenis Wilson Ultra Power 100',
            'descripcion': 'Raqueta perfecta para dominar el punto desde fondo de pista. Gran manejabilidad y confort en cada golpeo.',
            'peso': '284g',
            'empuñadura': 'L2',
            'precio': '$5600',
            'imagen': 'https://padelcoronado.com/wp-content/uploads/2020/01/Raqueta-Wilson-Ultra-Power-100.jpg',
        },
        {
            'id': 2,
            'titulo': 'Raqueta HEAD Graphene Tpuch  Radical S',
            'descripcion': 'Raqueta de tenis de competición de color azul oscuro y naranja con la que marcarás un antes y un después  en tu juego. Te aportará la máxima potencia sin renunciar a un perfecto confort.',
            'peso': '280g',
            'empuñadura': 'L2',
            'precio': '$6700',
            'imagen': 'https://padelcoronado.com/wp-content/uploads/2020/08/Graphene-Radical-S.jpg',
        },
        {
            'id': 3,
            'titulo': 'Raqueta tenis Tecnifibre Bullit 25 RS',
            'descripcion': 'Raqueta de tenis junior perfecta para iniciarse. Ideal para niños de entre 9 y 10 años.',
            'peso': '235g',
            'empuñadura': '3 7/8',
            'precio': '$3900',
            'imagen': 'https://padelcoronado.com/wp-content/uploads/2019/12/raqueta-bullit-25rs-padelcoronado.jpg'        },
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
                    <Box >
                        <CardContent >
                                <Typography component="div" variant="h5" style={{height: '50%'}}>
                                    {card.titulo}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div" style={{height: '30%'}}>
                                    {card.descripcion}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div" style={{height: '20%'}}>
                                    {card.precio}
                                </Typography>
                                <Divider/>
                            {/*<div className={"cardStyle"}>
                                    <span className={"card-item"}>
                                        <PauseCircleIcon/>
                                    </span>
                                    <span className={"card-item"}>
                                        <EditIcon/>
                                        <DeleteIcon/>
                                    </span>
                                </div>*/}
                            <Grid container spacing={30} className={"actions-grid"}>
                                <Grid item xs={6} sx={{ border: 0 , alignItems:'left'}}>
                                    <PauseCircleIcon/>
                                </Grid>
                                <Divider />
                                <Grid item xs={6} sx={{ border: 0 , alignItems:'right'}}>
                                    <EditIcon/>
                                    <DeleteIcon/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Box>
                </Card>
            ))}
        </>
    );
}

export default MisArticulos;