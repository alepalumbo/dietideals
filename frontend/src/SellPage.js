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
import PaymentIcon from '@mui/icons-material/Payment';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import GavelIcon from '@mui/icons-material/Gavel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import chroma from 'chroma-js';
import { StyledCard } from './styles';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const MenuVoices = [
    { name: 'Asta a tempo fisso', caption: 'Crea una nuova asta e metti in vendita il tuo prodotto/servizio', icon: <AddIcon />, backgroundColor: '#1E88E5' },
    { name: 'Asta al ribasso', caption: 'Crea una nuova asta e metti in vendita il tuo prodotto/servizio', icon: <FilterListIcon />, backgroundColor: '#00ACC1' },
    { name: 'Asta inversa', caption: 'Crea una nuova asta e metti in vendita il tuo prodotto/servizio', icon: <PersonIcon />, backgroundColor: '#FB8C00' },
    { name: 'Asta all Inglese', caption: 'Crea una nuova asta e metti in vendita il tuo prodotto/servizio', icon: <GavelIcon />, backgroundColor: '#52C41A' },
    { name: 'Asta silenziosa', caption: 'Crea una nuova asta e metti in vendita il tuo prodotto/servizio', icon: <GavelIcon />, backgroundColor: '#617371' }
];


const StyledLink = styled(RouterLink)({
    textDecoration: 'none',
});

export default function SellPage() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ minHeight: '100vh', py: 4 }}>
                <div role="presentation" onClick={handleClick}>                            
                            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/"
                                    onClick={handleClick}
                                >
                                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                    Home
                                </Link>
                                <Typography
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="#1E88E5"
                                >
                                    <PaymentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                        Vendi
                                </Typography>
                            </Breadcrumbs>
                        </div>
                    <Typography variant="h4" sx={{ my: 1 }}>
                        Nuova Asta
                    </Typography>
                    <Grid container spacing={4} sx={{ my: 8, justifyContent: 'center' }}>
                        {MenuVoices.map((menu, index) => (
                            <Grid item key={index}>
                                <StyledLink to={`/nuova-asta/${menu.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <StyledCard name={menu.name} caption={menu.caption} icon={menu.icon} color={menu.backgroundColor}/>
                                </StyledLink>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}
