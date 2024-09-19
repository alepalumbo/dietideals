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
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import GavelIcon from '@mui/icons-material/Gavel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const StyledCard = styled(Card)(({ color }) => ({
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

export default function SellPage() {
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
                        Nuova Asta
                    </Typography>
                    <Grid container spacing={3} sx={{ my: 8, justifyContent: 'center' }}>
                        <Grid item>
                            <StyledLink to="/vendi/astatempofisso">
                                <StyledCard variant="outlined" color='#1E88E5'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Asta a tempo fisso</Typography>
                                        <Typography variant='caption'>Crea una nuova asta e metti in vendita il tuo prodotto/servizio</Typography>
                                    </Box>
                                    <AddIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                        <Grid item>
                            <StyledLink to="/vendi/astaribasso">
                                <StyledCard variant="outlined" color='#00ACC1'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Asta al ribasso</Typography>
                                        <Typography variant='caption'>Crea una nuova asta e metti in vendita il tuo prodotto/servizio</Typography>
                                    </Box>
                                    <FilterListIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                        <Grid item>
                            <StyledLink to="/inverse-auction">
                                <StyledCard variant="outlined" color='#FB8C00'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Asta inversa</Typography>
                                        <Typography variant='caption'>Crea una nuova asta e metti in vendita il tuo prodotto/servizio</Typography>
                                    </Box>
                                    <PersonIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                        <Grid item>
                            <StyledLink to="/english-auction">
                                <StyledCard variant="outlined" color='#52C41A'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Asta all'inglese</Typography>
                                        <Typography variant='caption'>Crea una nuova asta e metti in vendita il tuo prodotto/servizio</Typography>
                                    </Box>
                                    <GavelIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                        <Grid item>
                            <StyledLink to="/silent-auction">
                                <StyledCard variant="outlined" color='#617371'>
                                    <Box sx={{ ml: 1 }}>
                                        <Typography variant='h5'>Asta silenziosa</Typography>
                                        <Typography variant='caption'>Crea una nuova asta e metti in vendita il tuo prodotto/servizio</Typography>
                                    </Box>
                                    <GavelIcon sx={{ ml: 2 }} />
                                </StyledCard>
                            </StyledLink>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}
