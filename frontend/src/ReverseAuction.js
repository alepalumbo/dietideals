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
import { Grid, Paper } from '@mui/material';
import { UploadFile } from '@mui/icons-material';


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
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'white', height: '100%', py: 4}}>
                    <Box>
                        <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/"
                                >
                                    <HomeIcon sx={{ mr: 0.5, color: 'disabled' }} fontSize="inherit"/>
                                    <Typography color="disabled">Home</Typography>
                                </Link>
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/compra"
                                >
                                    <PaymentIcon sx={{ mr: 0.5, color: 'disabled' }} fontSize="inherit"/>
                                    <Typography  color="disabled">Vendi</Typography>
                                </Link>
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/compra"
                                >
                                    <Gavel sx={{ mr: 0.5, color: '#1E88E5' }} fontSize="inherit"/>
                                    <Typography color="#1E88E5">Asta al ribasso</Typography>
                                </Link>
                            </Breadcrumbs>
                        </div>
                        <Typography variant="h4" sx={{ my: 1 }}>
                            Asta al ribasso
                        </Typography>
                    </Box>
                    <Grid container columnSpacing={1} sx={{ my: 4, justifyContent: 'center' }}>
                        <Grid item key={0} >
                        <Paper elevation={0} sx={{p: 2, border: 1, borderColor: '#E0E0E0'}} >
                            <Box sx={{width: '60ch'}}>
                                <Typography variant="h6" sx={{ my: 1 }}>Titolo</Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '40ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Nome prodotto"
                                        variant="outlined"
                                        // value={title}
                                        // onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Box>
                                <Typography variant="h6" sx={{ my: 1 }}>Descrizione breve</Typography>
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
                                <Typography variant="h6" sx={{ my: 1 }}>Foto</Typography>
                                {/* Box di upload immagini */}
                                <Box
                                    sx={{
                                        border: '2px dashed #ccc',
                                        borderRadius: '8px',
                                        padding: '16px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        width: '40ch',
                                        m: 1
                                    }}
                                >
                                    <input
                                        accept="image/*"
                                        id="upload-images"
                                        type="file"
                                        multiple
                                        style={{ display: 'none' }}
                                        // onChange={handleImageUpload}
                                    />
                                    <label htmlFor="upload-images">
                                        <Button
                                            variant="outlined"
                                            component="span"
                                            startIcon={<UploadFile />}
                                        >
                                            Carica Immagini
                                        </Button>
                                    </label>
                                    <Box>
                                        {selectedImages.map((file, index) => (
                                            <Typography key={index} variant="body2">
                                                {file.name}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                                <Typography variant="h6" sx={{ my: 2 }}>Descrizione dettagliata</Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': {  width: '40ch', ml: 1 },
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
                                            // value={description}
                                            // onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </Box>
                            </Box>
                            </Paper>
                        </Grid>
                        <Grid item key={1} >
                            <Paper elevation={0} sx={{p: 2, border: 1, borderColor: '#E0E0E0'}} >
                                <Box sx={{width: '60ch'}}>
                                    <Typography variant="h6" sx={{ my: 1 }}>Prezzo iniziale</Typography>
                                    <FormControl sx={{ m: 1, width: '192' }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Prezzo</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                            label="Prezzo"
                                            type="number"
                                            // value={price}
                                            // onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </FormControl>
                                    <Typography variant="h6" sx={{ my: 1 }}>Categoria e condizione</Typography>
                                    <Grid container columnSpacing={2} sx={{ justifyContent: 'left', ml: -1 }}>
                                        <Grid item key={0}>
                                        <Autocomplete
                                                disablePortal
                                                id="combo-box-categories"
                                                options={categories.map((cat) => ({ label: cat.name }))}
                                                sx={{ width: '20ch', bgcolor: '#42A5F5', borderRadius: 1,  boxShadow: 2, }}
                                                // onChange={(event, newValue) => setSelectedCategory(newValue)} // Setta la categoria selezionata
                                                renderInput={(params) => <TextField {...params} label="Categorie" 
                                                    variant='outlined'
                                                    InputLabelProps={{
                                                        sx: {
                                                            color: 'white', // Label text color
                                                        },
                                                    }}
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        sx: {
                                                            "& .MuiOutlinedInput-notchedOutline": {
                                                                border: "none", // Remove the border here
                                                            },
                                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                                border: "none", // Ensure no border on hover
                                                            },
                                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                border: "none", // Ensure no border when focused
                                                            },
                                                            "& .MuiSvgIcon-root": {
                                                                color: "white", // Set the icon color to white
                                                            }
                                                        }
                                                    }}
                                                />}
                                            />
                                        </Grid>
                                        <Grid item key={1}>
                                            <Box sx={{ minWidth: '18ch' }}>
                                                <FormControl fullWidth sx={{width: '20ch', backgroundColor:'#42A5f5', borderRadius: 1, boxShadow: 2}}>
                                                    <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Condizione</InputLabel>
                                                    <Select                                                        
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={condition}
                                                        label="Condizione" 
                                                        sx={{
                                                            color: 'white', // Set the text color to white
                                                            '& .MuiInputLabel-root': {
                                                                color: 'white', // Set the label color to white
                                                            },
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none', // Remove the border
                                                            },
                                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none', // No border on hover
                                                            },
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                border: 'none', // No border when focused
                                                            },
                                                            '& .MuiSvgIcon-root': {
                                                                color: 'white', // Set the dropdown arrow icon color to white
                                                            }
                                                         }}
                                                        // onChange={(e) => setCondition(e.target.value)}
                                                    >
                                                        <MenuItem value={'Nuovo'}>Nuovo</MenuItem>
                                                        <MenuItem value={'Usato'}>Usato</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            {/* <Button variant="contained" size="large" endIcon={<ArrowDropDownIcon />} sx={{bgcolor: '#42A5F5'}}>
                                                Condizione
                                            </Button> */}
                                        </Grid>
                                    </Grid>
                                    <Typography variant="h6" sx={{ my: 1 }}>Soglia minima</Typography>
                                    <FormControl sx={{ m: 1, width: '192' }}>
                                        <InputLabel htmlFor="outlined-adornment-amount">Soglia minima</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-amount"
                                            startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                            type="number"
                                            // value={minPrice}
                                            // onChange={(e) => setMinPrice(e.target.value)}
                                            label="Soglia minima"
                                        />
                                    </FormControl>
                                    <Typography variant="h6" sx={{ my: 1 }}>Tempo limite</Typography>
                                    <Box sx={{ width: '100%', m: 1 }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                label="Scegli data e ora"
                                                // value={endTime}
                                                // onChange={(newValue) => setEndTime(newValue)}    
                                            />
                                            {/* {console.log({endTime})} */}
                                        </LocalizationProvider>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                        {/* <Box sx={{ flexShrink: 0, width: '300px', mr: 20, my: 2 }}>
                                <Typography variant="h6" sx={{ my: 1 }}>
                                    Categoria e condizione
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', ml: 1 }}>
                                   
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
                        </Box> */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
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
