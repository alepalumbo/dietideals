import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import Typography from '@mui/material/Typography';
import Gavel from '@mui/icons-material/Gavel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { getCategories } from './api/api';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Timer = [
    { label: '1H', time: 1 },
    { label: '2H', time: 2 },
    { label: '3H', time: 3 },
    { label: '5H', time: 5 },
];

export default function ReverseAuction() {
    const [condition, setCondition] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categoryData = await getCategories();
                setCategories(categoryData);
            } catch (error) {
                console.error('Errore nel recupero delle categorie:', error);
            }
        }
        fetchCategories();
    }, []);

    const handleChange = (event) => {
        setCondition(event.target.value);
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages((prevImages) => [...prevImages, ...files]);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="full">
                <Box sx={{ bgcolor: 'white', height: '100vh' }}>
                    <Box>
                        <div role="presentation" onClick={handleClick}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/"
                                >
                                    <HomeIcon sx={{ mr: 0.5, color: 'disabled' }} />
                                    <Typography variant="h6" color="disabled">
                                        Home
                                    </Typography>
                                </Link>
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/compra"
                                >
                                    <PaymentIcon sx={{ mr: 0.5, color: 'disabled' }} />
                                    <Typography variant="h6" color="disabled">
                                        Compra
                                    </Typography>
                                </Link>
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/compra"
                                >
                                    <Gavel sx={{ mr: 0.5, color: '#1E88E5' }} />
                                    <Typography variant="h6" color="#1E88E5">
                                        Asta al ribasso
                                    </Typography>
                                </Link>
                            </Breadcrumbs>
                        </div>
                        <Typography variant="h4" sx={{ my: 1 }}>
                            Asta al ribasso
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ flex: 1 }}>
                            <Box sx={{ m: 3 }}>
                                <Typography variant="h6" sx={{ my: 1 }}>
                                    Nome Prodotto
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Nome prodotto" variant="outlined" />
                                </Box>
                                <Typography variant="h6" sx={{ my: 1 }}>
                                    Descrizione breve
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Descrizione breve" variant="outlined" />
                                </Box>
                                <Typography variant="h6" sx={{ my: 1 }}>
                                    Foto
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Foto" variant="outlined" />
                                </Box>
                                <Typography variant="h6" sx={{ my: 1 }}>
                                    Descrizione dettagliata
                                </Typography>
                                
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { my: 3, width: '40ch', ml: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Descrizione"
                                            multiline
                                            rows={4}
                                            defaultValue=""
                                        />
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ flexShrink: 0, width: '300px', mr: 20, my: 2 }}>
                                <Typography variant="h6" sx={{ my: 1 }}>
                                    Categoria e condizione
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', ml: 1 }}>
                                    {/* Autocomplete con le categorie dinamiche */}
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-categories"
                                        options={categories.map((cat) => ({ label: cat.name }))}
                                        sx={{ width: '20ch' }}
                                        renderInput={(params) => <TextField {...params} label="Categorie" />}
                                    />
                                    <Box sx={{ minWidth: '18ch' }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Condizione</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={condition}
                                                label="Condizione"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={0}>Nuovo</MenuItem>
                                                <MenuItem value={1}>Usato</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Box>
                            <Typography variant="h6" sx={{ my: 1 }}>
                                Prezzo iniziale
                            </Typography>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Prezzo</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                    label="Prezzo"
                                />
                            </FormControl>
                            <Typography variant="h6" sx={{ my: 1 }}>
                                Prezzo minimo
                            </Typography>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Prezzo</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                    label="Prezzo"
                                />
                            </FormControl>
                            <Typography variant="h6" sx={{ my: 1 }}>
                                Decremento
                            </Typography>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Prezzo</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                    label="Prezzo"
                                />
                            </FormControl>
                            <Typography variant="h6" sx={{ my: 1 }}>
                                Timer
                            </Typography>
                            <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        
                                        options={Timer}
                                        sx={{ width: '20ch', m: 1 }}
                                        renderInput={(params) => <TextField {...params} label="1H (Predefinito)" />}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
                        <Button 
                            variant="contained" 
                            sx={{ width: '100%', maxWidth: '400px', backgroundColor: '#2b3e5b' }}
                        >
                        AGGIUNGI ASTA
                        </Button>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
