import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import GavelIcon from '@mui/icons-material/Gavel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardContent from '@mui/material/CardContent';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import chroma from 'chroma-js';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const getDarkerColor = (color) => chroma(color).darken(1.2).hex();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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

const StyledCard = styled(Card)(({ theme, color }) => ({
    width: 294,
    display: 'flex',
    alignItems: 'center',
    p: 2,
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    backgroundColor: color,
    color: 'white',
    '&:hover': {
        backgroundColor: getDarkerColor(color),
        transform: 'scale(1.05)',
    },
}));

const StyledLink = styled(RouterLink)({
    textDecoration: 'none',
});

export default function HomePage() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="full">
                <Box sx={{ minHeight: '100vh', py: 4 }}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                href="/"
                            >
                                <HomeIcon sx={{ mr: 0.5, color: '#1E88E5' }} />
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <Typography variant="h4" sx={{ my: 1 }}>
                        Home
                    </Typography>
                    <Grid container spacing={3} sx={{ my: 8, justifyContent: 'center' }}>
                        <Grid item>
                            <StyledLink to="/vendi">
                                <StyledCard variant="outlined" color='#1E88E5'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Nuova Asta</Typography>
                                        <Typography variant='caption'>Crea una nuova asta e metti in vendita il tuo prodotto/servizio</Typography>
                                    </Box>
                                    <AddIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                        <Grid item>
                            <StyledLink to="/categorie">
                                <StyledCard variant="outlined" color='#00ACC1'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Categorie</Typography>
                                        <Typography variant='caption'>Cerca un prodotto/servizio tra le tante catgorie disponibili</Typography>
                                    </Box>
                                    <FilterListIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                        <Grid item>
                            <StyledLink to="/profile">
                                <StyledCard variant="outlined" color='#FB8C00'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Profilo</Typography>
                                        <Typography variant='caption'>Qui puoi visualizzare la pagina del tuo profilo</Typography>
                                    </Box>
                                    <PersonIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                        <Grid item>
                            <StyledLink to="/my-auctions">
                                <StyledCard variant="outlined" color='#52C41A'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Le mie aste</Typography>
                                        <Typography variant='caption'>Qui puoi visualizzare le aste alle quali stai partecipando</Typography>
                                    </Box>
                                    <GavelIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', m: 8, justifyContent: 'center' }}>
                        <Box sx={{ width: 800, my: 4, mr: 10, ...customStyles }}>
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
                        <Box sx={{ width: 400, my: 4, ...customStyles }}>
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
                    </Box>
                </Box>
            </Container>
        </div>
    );
}