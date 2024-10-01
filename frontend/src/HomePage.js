import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {CssBaseline, Box, Container, Typography, Breadcrumbs, Link, Grid, Card, CardMedia} from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import GavelIcon from '@mui/icons-material/Gavel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledCard, CardTypography } from './styles';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};

const customStyles = {
    position: 'relative',
    '& .slick-dots': {
        bottom: 10,
    },
    '& .slick-dots li button:before': {
        color: 'white',
    },
};

const MenuVoices = [
    { name: 'Nuova Asta', caption: 'Crea una nuova asta e metti in vendita il tuo prodotto/servizio', icon: <AddIcon />, backgroundColor: '#1E88E5' },
    { name: 'Categorie', caption: 'Cerca un prodotto/servizio tra le tante catgorie disponibili', icon: <FilterListIcon />, backgroundColor: '#00ACC1' },
    { name: 'Profilo', caption: 'Qui puoi visualizzare la pagina del tuo profilo', icon: <PersonIcon />, backgroundColor: '#FB8C00' },
    { name: 'Le mie aste', caption: 'Qui puoi visualizzare le aste alle quali stai partecipando', icon: <GavelIcon />, backgroundColor: '#52C41A' }
];

const StyledLink = styled(RouterLink)({
    textDecoration: 'none',
});

export default function HomePage() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ py: 4}}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                underline="none"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                            >
                                <HomeIcon sx={{ mr: 0.5, color: '#1E88E5' }} fontSize='inherit' />
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <Typography variant="h4" sx={{ my: 1 }}>
                        Home
                    </Typography>
                    <Grid container spacing={4} sx={{ my: 8, justifyContent: 'center' }}>
                        {MenuVoices.map((menu, index) => (
                            <Grid item key={index}>
                                <StyledLink to={`/${menu.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <StyledCard variant="outlined" color={menu.backgroundColor}>
                                        <Box sx={{ ml: 1, flex: 1 }}>
                                            <Typography variant='h6'>{menu.name}</Typography>
                                            <CardTypography >{menu.caption}</CardTypography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 2 }}>
                                            {menu.icon}
                                        </Box>
                                    </StyledCard>
                                </StyledLink>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container columnSpacing={16} sx={{ m: 0, justifyContent: 'left'}}>
                    {/* <Box sx={{ display: 'flex', m: 8, justifyContent: 'center' }}> */}
                        <Grid item key={1}>
                            <Box sx={{ width: 700, ...customStyles }}>
                                <Slider {...settings}>
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image="https://react.semantic-ui.com/images/wireframe/image-square.png"
                                            alt="Slide 1"
                                        />
                                    </div>
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image="https://react.semantic-ui.com/images/wireframe/image-square.png"
                                            alt="Slide 1"
                                        />
                                    </div>
                                    <div>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image="https://react.semantic-ui.com/images/wireframe/image-square.png"
                                            alt="Slide 1"
                                        />
                                    </div>
                                </Slider>
                            </Box>
                        </Grid>
                        <Grid item key={2}>
                            <Box sx={{ width: 400, ...customStyles }}>
                                <Slider {...settings}>
                                    <div>
                                        <Card variant="outlined" sx={{ p: 2, backgroundColor: '#233044', color: 'white', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='h5'>Asta recente n.1</Typography>
                                            <Typography variant='caption'>Description for slide 1</Typography>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card variant="outlined" sx={{ p: 2, backgroundColor: '#233044', color: 'white', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='h5'>Asta recente n.2</Typography>
                                            <Typography variant='caption'>Description for slide 2</Typography>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card variant="outlined" sx={{ p: 2, backgroundColor: '#233044', color: 'white', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='h5'>Asta  recente n.3</Typography>
                                            <Typography variant='caption'>Description for slide 3</Typography>
                                        </Card>
                                    </div>
                                </Slider>
                            </Box>
                        </Grid>                        
                    {/* </Box> */}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}