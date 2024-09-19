import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UploadFile } from '@mui/icons-material';
import { getCategories, createFixedTimeAuction } from './api/api';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function FixedTimeAuction() {
    const [condition, setCondition] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [endTime, setEndTime] = useState(null);
    const [minPrice, setMinPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null); 
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
    const navigate = useNavigate();

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


    const handleSubmit = async () => {
        if (isNaN(price) || isNaN(minPrice)) {
            console.error("Prezzo o soglia minima non validi");
            return;
        }
        //const formattedEndTime = endTime ? dayjs(endTime).format('MM/DD/YYYY hh:mm a') : null;
        const formattedEndTime = new Date(endTime).toISOString();

        const auctionData = {
            title,
            description,
            price: parseFloat(price),
            minPrice: parseFloat(minPrice),
            endTime: formattedEndTime,
            condition,
            category: selectedCategory?.label,
        };

        try {
            console.log(auctionData);
            await createFixedTimeAuction(auctionData);
            setOpenSuccessDialog(true);
        } catch (error) {
            console.error('Errore nella creazione dell\'asta:', error);
        }
    };


    const handleCloseSuccessDialog = () => {
        setOpenSuccessDialog(false);
        navigate('/fixeddetail');
    };

    const handleDateChange = (date) => {
        console.log("Data selezionata:", date);
        console.log("Data selezionata (ISO):", date?.toISOString());
        const formattedDate = date ? date.format('YYYY-MM-DD') : null;
        console.log("Data selezionata (formattata):", formattedDate);  
        // setUserProfile({
        //   ...auctionData,
        //   dateOfBirth: date,
        // });
      };

      const handleNumberInput = (setter) => (event) => {
        const value = event.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setter(value);
        }
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
                                    <Typography variant="h6" color="disabled">Home</Typography>
                                </Link>
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/compra"
                                >
                                    <PaymentIcon sx={{ mr: 0.5, color: 'disabled' }} />
                                    <Typography variant="h6" color="disabled">Compra</Typography>
                                </Link>
                                <Link
                                    underline="hover"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    color="inherit"
                                    href="/compra"
                                >
                                    <Gavel sx={{ mr: 0.5, color: '#1E88E5' }} />
                                    <Typography variant="h6" color="#1E88E5">Asta a tempo fisso</Typography>
                                </Link>
                            </Breadcrumbs>
                        </div>
                        <Typography variant="h4" sx={{ my: 1 }}>Asta a tempo fisso</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ flex: 1 }}>
                            <Box sx={{ m: 3 }}>
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
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
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
                                        onChange={handleImageUpload}
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
                                <Typography variant="h6" sx={{ my: 1 }}>Descrizione dettagliata</Typography>
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
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ flexShrink: 0, width: '300px', mr: 20, my: 2 }}>
                            <Typography variant="h6" sx={{ my: 1 }}>Prezzo iniziale</Typography>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Prezzo</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                    label="Prezzo"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </FormControl>
                            <Typography variant="h6" sx={{ my: 1 }}>Categoria e condizione</Typography>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', ml: 1 }}>
                                {/* Autocomplete con le categorie dinamiche */}
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-categories"
                                    options={categories.map((cat) => ({ label: cat.name }))}
                                    sx={{ width: '20ch' }}
                                    onChange={(event, newValue) => setSelectedCategory(newValue)} // Setta la categoria selezionata
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
                                            onChange={(e) => setCondition(e.target.value)}
                                        >
                                            <MenuItem value={'Nuovo'}>Nuovo</MenuItem>
                                            <MenuItem value={'Usato'}>Usato</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Typography variant="h6" sx={{ my: 1 }}>Soglia minima</Typography>
                            <FormControl sx={{ m: 1, width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Soglia minima</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                    type="number"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    label="Soglia minima"
                                />
                            </FormControl>
                            <Typography variant="h6" sx={{ my: 1 }}>Tempo limite</Typography>
                            <Box sx={{ width: '100%', m: 1 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        label="Scegli data e ora"
                                        value={endTime}
                                        onChange={(newValue) => setEndTime(newValue)}    
                                    />
                                    {console.log({endTime})}
                                </LocalizationProvider>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
                        <Button 
                            variant="contained" 
                            sx={{ width: '100%', maxWidth: '400px', backgroundColor: '#2b3e5b' }}
                            onClick={handleSubmit}
                        >
                        AGGIUNGI ASTA
                        </Button>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
