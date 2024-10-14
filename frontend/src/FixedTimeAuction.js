import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CssBaseline, Box, Container, Breadcrumbs, Link, Typography, TextField, Autocomplete, InputLabel, MenuItem, FormControl, Select, Button, Grid, Paper} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import Gavel from '@mui/icons-material/Gavel';
import { UploadFile } from '@mui/icons-material';
import { getCategories, createFixedTimeAuction } from './api/api';
import { AuctionField, AuctionTitle, AuctionPriceField, AuctionDatePicker, AuctionPhoto, AuctionAutoC, AuctionFormC } from './styles';
import SuccessDialog from './SuccessDialog'; 

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

    const isFormValid = () => {
        return  title.trim() !== '' && // Titolo
                price.trim() !== '' && // Prezzo
                minPrice.trim() !== '' && // Soglia minima
                selectedCategory !== null && // Categoria
                description.trim() !== '' && // Descrizione
                endTime !== null && // Tempo limite
                condition.trim() !== ''; // Condizione
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
            const auctionId = await createFixedTimeAuction(auctionData);
            setOpenSuccessDialog(true);
            handleCloseSuccessDialog(auctionId);
        } catch (error) {
            console.error('Errore nella creazione dell\'asta:', error);
        }
    };


    const handleCloseSuccessDialog = (auctionId) => {
        setOpenSuccessDialog(false);
        navigate(`/fixeddetail/${auctionId}}`);
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
                        <SuccessDialog 
                            open={openSuccessDialog} 
                            handleClose={handleCloseSuccessDialog} 
                            message="Asta creata con successo"
                        />
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
                                <AuctionTitle title="Titolo"/>
                                <AuctionField name="Titolo" value={title} onChange={(e) => setTitle(e.target.value)}/>                                                        
                                <AuctionTitle title="Foto"/>
                                <AuctionPhoto handleImageUpload={handleImageUpload} selectedImages={selectedImages}/>                              
                                <AuctionTitle title="Descrizione dettagliata"/>
                                <AuctionField name="Descrizione dettagliata" nrows={4} value={description} onChange={(e) => setDescription(e.target.value)}/>                                 
                            </Box>
                            </Paper>
                        </Grid>
                        <Grid item key={1} >
                            <Paper elevation={0} sx={{p: 2, border: 1, borderColor: '#E0E0E0'}} >
                                <Box sx={{width: '60ch'}}>
                                    <AuctionTitle title="Prezzo iniziale" />
                                    <AuctionPriceField name="Prezzo" value={price} onChange={(e) => setPrice(e.target.value)}/>
                                    <AuctionTitle title="Categoria e Condizione"/>
                                    <Grid container columnSpacing={2} sx={{ justifyContent: 'left', ml: -1 }}>
                                        <Grid item key={0}>
                                            <AuctionAutoC categories={categories} setSelectedCategory={setSelectedCategory} />
                                        </Grid>
                                        <Grid item key={1}>
                                            <AuctionFormC condition={condition} setCondition={setCondition} />
                                        </Grid>
                                    </Grid>
                                    <AuctionTitle title="Soglia minima"/>
                                    <AuctionPriceField name="Soglia minima" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                                    <AuctionTitle title="Tempo limite"/>
                                    <AuctionDatePicker value={endTime} onChange={(newValue) => setEndTime(newValue)} />                                  
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
                        <Button 
                            variant="contained" 
                            sx={{ width: '100%', maxWidth: '400px', backgroundColor: '#2b3e5b' }}
                            onClick={handleSubmit}
                            disabled={!isFormValid()}
                        >
                        AGGIUNGI ASTA
                        </Button>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}
