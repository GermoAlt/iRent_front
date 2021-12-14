import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./racketEdit.css";

export default function RacketEdit() {
    return (
        <div>

        <Card className={"div1"} sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                height="140"
                image="src/resources/images/raquetabab.jpg"
            />
            <CardContent >
                <Typography className={"info-card-title-2"} variant="body2" color="text.secondary">
                    Raqueta Babolat Pure Aero 100
                </Typography>
            </CardContent>
            <div className={"line-separator-small"}/>
            <CardActions>
                <Button size="small">Más Información</Button>
                <Button size="small">Elegir</Button>
            </CardActions>
        </Card>
            <br></br>
            <Card className={"div1"} sx={{ maxWidth: 250 }}>

                <CardMedia
                    component="img"
                    height="140"
                    image="src/resources/images/raquetabab.jpg"
                />
                <CardContent >
                    <Typography className={"info-card-title-2"} variant="body2" color="text.secondary">
                        Raqueta De Tenis Wilson Blade Sw 104 Autograph V7.0
                    </Typography>
                </CardContent>
                <div className={"line-separator-small"}/>
                <CardActions>
                    <Button size="small">Más Información</Button>
                    <Button size="small">Elegir</Button>
                </CardActions>
            </Card>
</div>
);
}
