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
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';
import GavelIcon from '@mui/icons-material/Gavel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardContent from '@mui/material/CardContent';
import { Divider, FormGroup, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BreadcrumbLink, StyledBuyCard } from './styles';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

// const StyledCard = styled(Card)(({ theme }) => ({
//     maxWidth: 345,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     transition: 'transform 0.3s ease',
//     '&:hover': {
//         transform: 'scale(1.05)',
//     },
// }));

export default function BuyPage() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'background.paper', minHeight: '100vh', py: 4 }}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <BreadcrumbLink isActive={false} label={"Home"} Icon={HomeIcon}/>
                        <BreadcrumbLink isActive={true} label={"Compra"} Icon={ShoppingCartIcon}/>    
                    </Breadcrumbs>
                    <Typography variant="h4" gutterBottom>
                        Compra
                    </Typography>
                    <Box sx={{ display: 'flex', py: 4 }}>
                        {/* Sidebar dei filtri */}
                        <Box sx={{ width: '20vw' }}>
                            <Paper variant="outlined" sx={{ p: 2 }}>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Categorie
                                </Typography>
                                <Divider />
                                <FormGroup sx={{ my: 2 }}>
                                    <FormControlLabel control={<Checkbox />} label="Elettronica" />
                                    <FormControlLabel control={<Checkbox />} label="Articoli da collezione" />
                                    <FormControlLabel control={<Checkbox />} label="Elettrodomestici" />
                                    <FormControlLabel control={<Checkbox />} label="Sport e viaggi" />
                                    <FormControlLabel control={<Checkbox />} label="Fotografia" />
                                    <FormControlLabel control={<Checkbox />} label="Musica" />
                                    <FormControlLabel control={<Checkbox />} label="Auto e moto" />
                                    <FormControlLabel control={<Checkbox />} label="Informatica" />
                                </FormGroup>
                                <Divider />
                                <FormGroup sx={{ my: 2 }}>
                                    <FormLabel component="legend">Tipo Asta</FormLabel>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="A tempo fisso" />
                                    <FormControlLabel control={<Checkbox />} label="Inversa" />
                                    <FormControlLabel control={<Checkbox />} label="Al ribasso" />
                                    <FormControlLabel control={<Checkbox />} label="All'inglese" />
                                    <FormControlLabel control={<Checkbox />} label="Silenziosa" />
                                </FormGroup>
                                <Divider />
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    Prezzo
                                </Typography>
                                <Box sx={{ mt: 1 }}>
                                    <TextField 
                                        label="min" 
                                        variant="outlined" 
                                        name="min"
                                        sx={{ width: '45%', mr: 1 }}
                                    />
                                    <TextField 
                                        label="max" 
                                        variant="outlined" 
                                        name="max"
                                        sx={{ width: '45%'}}
                                    />
                                </Box>
                            </Paper>
                        </Box>

                        {/* Griglia di prodotti */}
                        <Box sx={{ flexGrow: 1, ml: 3 }}>
                            <Grid container spacing={2} columns={3} justifyContent={'center'}>
                                {Array.from(Array(6)).map((_, index) => (
                                    <Grid item  key={index}>
                                        <StyledBuyCard name="Nome Prodotto" description="Descrizione prodotto" price="150.00 $"  time="12H 10M 10S"/>
                                    </Grid>
                                ))}
                            </Grid>
                            {/* Paginazione */}
                            <Stack spacing={2} sx={{ alignItems: 'center', mt: 3 }}>
                                <Pagination count={10} shape="rounded" color="primary" />
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
