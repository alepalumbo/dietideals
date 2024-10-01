import { Card, Typography, Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, Button} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { UploadFile } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import chroma from 'chroma-js';
import dayjs from 'dayjs';

const getDarkerColor = (color) => chroma(color).shade(0.25).hex();

const StyledCard = styled(Card)(({ color }) => ({
    width: 324,
    height: 120,
    padding: '16px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    backgroundColor: color,
    color: 'white',
    '&:hover': {
        backgroundColor: getDarkerColor(color),
        transform: 'scale(1.05)',
    },
    textAlign: 'left',
    overflow: 'hidden',
}));

const CardTypography = (props) => (
        <Typography variant='caption'
            sx={{display:'inline-block', width: 220}}
        >
            {props.children}
        </Typography>        
);


const AuctionTitle = (props) => (
    <Typography variant="h6" sx={{ my: 1 }}>
        {props.name}
    </Typography>    
);

const AuctionField = (props) => (
        <Box
            component="form"
            sx={{ '& > :not(style)': { ml: 1, width: '40ch' }}}
            noValidate
            autoComplete="off"
            >
            <TextField
                multiline
                rows={props.nrows}
                label={props.name}
                variant="outlined"
            />
        </Box>
);

const AuctionPriceField = (props) => (
    <FormControl sx={{ m: 1, width: '192' }}>
        <InputLabel htmlFor="outlined-adornment-amount">{props.name}</InputLabel>
        <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            label={props.name}
            type="number"
            onChange={(e) => {
                const value = e.target.value;
                if (value >= 0 || value === '') {
                    e.target.value = value; // Allow positive values and empty string (for clearing input)
                } else {
                    e.target.value = 0; // Optionally set to zero or prevent the change altogether
                }
            }}
            inputProps={{ min: 0 }} // Prevents typing negative numbers directly
        />
    </FormControl>
);


const AuctionDatePicker = () => (
    <Box sx={{ width: '100%', m: 1 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label="Scegli data e ora"   
                minDate={dayjs()}
                minTime={dayjs()}
            />
        </LocalizationProvider>
    </Box>
);

const AuctionPhoto = () => (
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
    </Box>
);

export { StyledCard, CardTypography, AuctionTitle, AuctionField, AuctionPriceField, AuctionDatePicker, AuctionPhoto };