import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CssBaseline, Box, Container, Breadcrumbs, Link, Typography, TextField, Autocomplete, InputLabel, MenuItem, FormControl, Select, Button, Grid, Paper} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import Gavel from '@mui/icons-material/Gavel';
import { UploadFile } from '@mui/icons-material';
import { getCategories, createFixedTimeAuction } from './api/api';
import { AuctionField, AuctionTitle, AuctionPriceField, AuctionDatePicker, AuctionPhoto } from './styles';

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
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'white', height: '100%', py: 4 }}>
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
                                    <Typography color="#1E88E5">Asta a tempo fisso</Typography>
                                </Link>
                            </Breadcrumbs>
                        </div>
                        <Typography variant="h4" sx={{ my: 2 }}>Asta a tempo fisso</Typography>
                    </Box>
                    <Grid container spacing={1} sx={{ my: 4, justifyContent: 'center' }}>
                        <Grid item key={0} >
                        <Paper elevation={0} sx={{p: 2, border: 1, borderColor: '#E0E0E0'}} >
                            <Box sx={{width: '60ch'}}>
                                <AuctionTitle name="Titolo"/>
                                <AuctionField name="Titolo">                                        
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                </AuctionField>  
                                <AuctionTitle name="Descrizione breve"/> 
                                <AuctionField name="Descrizione breve">
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                </AuctionField>                          
                                <AuctionTitle name="Foto"/>
                                <AuctionPhoto>
                                    onChange={handleImageUpload}
                                    {selectedImages.map((file, index) => (
                                            <Typography key={index} variant="body2">
                                                {file.name}
                                            </Typography>
                                        ))}
                                </AuctionPhoto>
                                {/* <Box
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
                                </Box> */}
                                <AuctionTitle name="Descrizione dettagliata"/>
                                <AuctionField name="Descrizione dettagliata" nrows={4}>
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                </AuctionField>
                            </Box>
                            </Paper>
                        </Grid>
                        <Grid item key={1} >
                            <Paper elevation={0} sx={{p: 2, border: 1, borderColor: '#E0E0E0'}} >
                                <Box sx={{width: '60ch'}}>
                                    <AuctionTitle name="Prezzo iniziale"/>
                                    <AuctionPriceField name="Prezzo" />
                                    <AuctionTitle name="Categoria e Condizione"/>
                                    <Grid container columnSpacing={2} sx={{ justifyContent: 'left', ml: -1 }}>
                                        <Grid item key={0}>

                                        <Autocomplete
                                                disablePortal
                                                id="combo-box-categories"
                                                options={categories.map((cat) => ({ label: cat.name }))}
                                                sx={{ width: '20ch', bgcolor: '#42A5F5', borderRadius: 1,  boxShadow: 2, }}
                                                onChange={(event, newValue) => setSelectedCategory(newValue)} // Setta la categoria selezionata
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
                                                        onChange={(e) => setCondition(e.target.value)}
                                                    >
                                                        <MenuItem value={'Nuovo'}>Nuovo</MenuItem>
                                                        <MenuItem value={'Usato'}>Usato</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <AuctionTitle name="Soglia minima"/>
                                    <AuctionPriceField name="Soglia minima" />
                                    <AuctionTitle name="Tempo limite"/>
                                    <AuctionDatePicker>
                                        value={endTime}
                                        onChange={(newValue) => setEndTime(newValue)} 
                                    </AuctionDatePicker>                                    
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
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
