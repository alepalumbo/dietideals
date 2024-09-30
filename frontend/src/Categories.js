import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { CssBaseline, Box, Container, Typography, Breadcrumbs, Link, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonIcon from '@mui/icons-material/Person';
import GavelIcon from '@mui/icons-material/Gavel';
import { StyledCard, CardTypography } from './styles';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const StyledLink = styled(RouterLink)({
     textDecoration: 'none',
});

const categoryTypes = [
    { name: 'Elettronica', caption: 'Roba di elettronica', icon: <AddIcon />, backgroundColor: '#1E88E5' },
    { name: 'TV, audio e video', caption: 'Roba di TV, audio e video', icon: <FilterListIcon />, backgroundColor: '#00ACC1' },
    { name: 'Articoli da collezione', caption: 'Roba di collezione', icon: <PersonIcon />, backgroundColor: '#FB8C00' },
    { name: 'Strumenti musicali', caption: 'Roba di Strumenti musicali', icon: <GavelIcon />, backgroundColor: '#52C41A' },
    { name: 'Elettrodomestici', caption: 'Roba di Elettrodomestici', icon: <AddIcon />, backgroundColor: '#617371' },
    { name: 'Sport e viaggi', caption: 'Roba di Sport e viaggi', icon: <FilterListIcon />, backgroundColor: '#9C27B0' },
    { name: 'Articoli per giardinaggio', caption: 'Roba di Articoli per giardinaggio', icon: <PersonIcon />, backgroundColor: '#3F51B5' },
    { name: 'Musica, CD e Vinili', caption: 'Roba di Musica, CD e Vinili', icon: <GavelIcon />, backgroundColor: '#FFC107' },
    { name: 'Arredamento e bricolage', caption: 'Roba di Arredamento e bricolage', icon: <AddIcon />, backgroundColor: '#FF5722' },
    { name: 'Arte ed antiquariato', caption: 'Roba di Arte ed antiquariato', icon: <FilterListIcon />, backgroundColor: '#4CAF50' },
    { name: 'Informatica', caption: 'Roba di Informatica', icon: <PersonIcon />, backgroundColor: '#F44336' },
    { name: 'Fotografia', caption: 'Roba di Fotografia', icon: <GavelIcon />, backgroundColor: '#607D8B' },
    { name: 'Auto, moto e altri veicoli', caption: 'Roba di Auto, moto e altri veicoli', icon: <AddIcon />, backgroundColor: '#795548' },
    { name: 'Videogiochi e console', caption: 'Roba di Videogiochi e console', icon: <FilterListIcon />, backgroundColor: '#009688' },
    { name: 'Fumetti, manga e memorabilia', caption: 'Roba di Fumetti, manga e memorabilia', icon: <PersonIcon />, backgroundColor: '#E91E63' }
];

export default function Categories() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ minHeight: '100vh', py: 4 }}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/">                                
                                <HomeIcon sx={{ mr: 0.5, color: '#1E88E5' }} fontSize='inherit'/>
                                Home
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <Typography variant="h4" sx={{ my: 1 }}>
                        Categorie
                    </Typography>
                    <Grid container spacing={12} sx={{ my: 1, justifyContent: 'center' }}>
                        {categoryTypes.map((auction, index) => (
                            <Grid item key={index}>
                                <StyledLink to={`/vendi/${auction.name.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <StyledCard variant="outlined" color={auction.backgroundColor}>
                                        <Box sx={{ ml: 1, flex: 1 }}>
                                            <Typography variant='h6'>{auction.name}</Typography>
                                            <CardTypography >{auction.caption}</CardTypography>
                                        </Box>
                                        {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48 }}>
                                            {auction.icon}
                                        </Box> */}
                                    </StyledCard>
                                </StyledLink>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}
