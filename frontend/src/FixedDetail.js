import * as React from 'react';
import { Container, CssBaseline } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from '@mui/icons-material/Info';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AlertDialogSlide from './AlertDialogSlide';
import { BreadcrumbLink } from './styles';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};

const customStyles = {
    position: 'relative',
    '& .slick-dots': {
        bottom: 10,
    },
    '& .slick-dots li button:before': {
        color: 'white',
    },
};

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function FixedDetail() {
    const [progress, setProgress] = React.useState(10);
    const [open, setOpen] = React.useState(false);
    const [price, setPrice] = React.useState('');

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ minHeight: '150vh', py: 4, width: '100%' }}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <BreadcrumbLink isActive={false} label={"Home"} Icon={HomeIcon}/>
                            <BreadcrumbLink isActive={false} label={"Compra"} Icon={ShoppingCartIcon}/>
                            <BreadcrumbLink isActive={true} label={"Prodotto"} Icon={InfoIcon}/>                            
                        </Breadcrumbs>
                    </div>
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 3, mb: 5 }}>
                        <ChevronLeftIcon sx={{ color: 'disabled', mr: 0.5 }} />
                        <Typography variant="h6">
                            BACK
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                        <Box sx={{ width: 600, ...customStyles }}>
                            <Slider {...settings}>
                                <div>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image="https://react.semantic-ui.com/images/wireframe/image-square.png"
                                        alt="Slide 1"
                                    />
                                </div>
                                <div>
                                    <Card variant="outlined" sx={{ p: 2, backgroundColor: '#233044', color: 'white', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography variant='h5'>Slide 2</Typography>
                                        <Typography variant='caption'>Description for slide 2</Typography>
                                    </Card>
                                </div>
                                <div>
                                    <Card variant="outlined" sx={{ p: 2, backgroundColor: '#233044', color: 'white', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography variant='h5'>Slide 3</Typography>
                                        <Typography variant='caption'>Description for slide 3</Typography>
                                    </Card>
                                </div>
                            </Slider>
                        </Box>
                        <Box sx={{ ml: 4, mt: 2, textAlign: 'left' }}>
                            <Typography variant='h6' color="#4CAF50">In Corso</Typography>
                            <Typography variant='h4'>Nome prodotto</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='h5' sx={{ mr: 22, mt: 1 }}>Ultima offerta: 1 €</Typography>
                                <Typography variant='h6' color='grey'>16H:22M:06S</Typography>
                            </Box>
                            <Typography variant='h6' color="grey" sx={{ mt: 2 }}>
                                Descrizione: Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 3, width: '50%' }}>
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Prezzo</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">€</InputAdornment>}
                                        label="Prezzo"
                                        onChange={handlePriceChange}
                                    />
                                </FormControl>
                                <Button variant="contained" sx={{ ml: 2, height: 50, width: 100 }} onClick={handleClickOpen}>
                                    OFFERTA
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ my: 3 }}>
                        <Paper variant="outlined" sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                {/* Titolo Dettagli */}
                                <Typography variant="h5">Dettagli</Typography>

                                {/* Pulsante Report */}
                                <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<InfoIcon />}
                                    sx={{ borderColor: '#FF5722', color: '#FF5722' }}
                                >
                                    REPORT
                                </Button>
                            </Box>

                            <Divider sx={{ mb: 2 }} />

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                {/* Venditore con immagine */}
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar
                                        alt="userimg"
                                        src="https://react.semantic-ui.com/images/wireframe/image-square.png"
                                        sx={{ width: 56, height: 56, mr: 2 }}
                                    />
                                    <Box>
                                        <Typography variant="body1" color="textSecondary">Venduto da:</Typography>
                                        <Link href="#" color="primary" sx={{ fontWeight: 'bold' }}>
                                            Alice Johnson
                                        </Link>
                                    </Box>
                                </Box>

                                {/* Dettagli dell'asta */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Typography variant="body1">
                                        <strong>Tipo di Asta :</strong> A Tempo Fisso
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Categoria :</strong> Fotografia
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Spedito da :</strong> Roma, Italia
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Descrizione Dettagliata */}
                            <Typography variant="h6" sx={{ mt: 3 }}>Descrizione Dettagliata</Typography>
                            <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                                Fotocamera vintage anni '50, autentico gioiello retrò. Design iconico, meccanica robusta e lenti di precisione.
                                Perfetta per collezionisti e appassionati di fotografia analogica. Un pezzo unico che cattura l'essenza della
                                fotografia d'epoca.
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Container>
            {/* Alert Dialog */}
            <AlertDialogSlide open={open} handleClose={handleClose} price={price} />
        </div>
    );
}
