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
import { Slider } from '@mui/material'
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
import { getCategories, createDescendingAuction } from './api/api';
import { Grid, Paper } from '@mui/material';
import { UploadFile } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AuctionField, AuctionTitle, AuctionPriceField, AuctionDatePicker, AuctionPhoto, AuctionAutoC, AuctionFormC, BreadcrumbLink } from './styles';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const Timer = [
    {value: 2, label: '2h',},
    {value: 4, label: '4h',},
    {value: 8, label: '8h',},
    {value: 12, label: '12h',},
    {value: 24, label: '24h',},
  ];

function valuetext(value) {
    return `${value}H`;
  }

export default function ReverseAuction() {
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
            await createDescendingAuction(auctionData);
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
        <>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'white', height: '100%', py: 4}}>
                    <Box>
                        <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <BreadcrumbLink isActive={false} label={"Home"} Icon={HomeIcon}/>
                            <BreadcrumbLink isActive={false} label={"Vendi"} Icon={PaymentIcon}/>
                            <BreadcrumbLink isActive={true} label={"Asta al ribasso"} Icon={Gavel}/>
                        </Breadcrumbs>
                        </div>
                        <Typography variant="h4" sx={{ my: 1 }}>
                            Asta al ribasso
                        </Typography>
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
                                <AuctionTitle title="Prezzo iniziale" />
                                <AuctionPriceField name="Prezzo" value={price} onChange={(e) => setPrice(e.target.value)}/>                                
                            </Box>
                            </Paper>
                        </Grid>
                        <Grid item key={1} >
                            <Paper elevation={0} sx={{p: 2, border: 1, borderColor: '#E0E0E0'}} >
                                <Box sx={{width: '60ch'}}>                                    
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
                                    <AuctionTitle title="Decremento"/>
                                    <AuctionPriceField name="Decremento" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                                    <AuctionTitle title="Timer"/> 
                                    <Box sx={{ width: 300 }}>
                                        <Slider
                                            aria-label="Timer"
                                            defaultValue={2}
                                            getAriaValueText={valuetext}
                                            step={null}
                                            valueLabelDisplay="auto"
                                            marks={Timer}
                                            max={24}
                                        />
                                    </Box>                              
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
                        <Button 
                            variant="contained" 
                            sx={{ width: '100%', maxWidth: '400px', backgroundColor: '#2b3e5b' }}
                            onClick={handleSubmit}
                            disabled={!isFormValid()} // Disabilita il pulsante se il form non è valido
                        >
                        AGGIUNGI ASTA
                        </Button>
                    </Box>
                    </Box>
            </Container>
        </>
    );
}
