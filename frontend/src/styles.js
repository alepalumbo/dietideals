import { Card, Typography, Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, Button, CardMedia, CardContent, CardActions, Autocomplete, Select, MenuItem, Link} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { UploadFile } from '@mui/icons-material';
import GavelIcon from '@mui/icons-material/Gavel';
import chroma from 'chroma-js';

const getDarkerColor = (color) => chroma(color).shade(0.25).hex();

const StyledCard = ({color, name, caption, icon}) => (
    <Card variant="outlined"
        sx={{
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
        }}>
        <Box sx={{ ml: 1, flex: 1 }}>
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='caption'
            sx={{display:'inline-block', width: 220}}
            >
                {caption}
            </Typography> 
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 2 }}>
            {icon}
        </Box>
    </Card>
)


const AuctionTitle = ({title}) => (
    <Typography variant="h6" sx={{ my: 1 }}>
        {title}
    </Typography>    
);

const AuctionField = ({name, nrows, value, onChange}) => (
        <Box
            component="form"
            sx={{ '& > :not(style)': { ml: 1, width: '40ch' }}}
            noValidate
            autoComplete="off"
            >
            <TextField
                multiline
                rows={nrows}
                label={name}
                variant="outlined"
                value={value}
                onChange={onChange} 
            />
        </Box>
);

AuctionField.defaultProps = {
    name: "Guest",
    nrows: 1,
}

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
                // Allow positive numbers and an empty string (for clearing the input)
                if (value === '' || Number(value) >= 0) {
                  // Call the parent's onChange to keep the state synced
                  props.onChange(e);
                }
              }}
            inputProps={{ min: 0 }} // Prevents typing negative numbers directly
            value={props.value}
        />
    </FormControl>
);


const AuctionDatePicker = (props) => (
    <Box sx={{ width: '100%', m: 1 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label="Scegli data e ora" 
                disablePast
                value={props.value}
                onChange={props.onChange} 
            />
        </LocalizationProvider>
    </Box>
);

const AuctionPhoto = ({handleImageUpload, selectedImages}) => (
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
);


const StyledBuyCard = ({name, description, time, price}) => (
    <Card
        variant="outlined"
        sx={{
            width: 345,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'none',
        }} 
        >       
        <CardMedia
            component="img"
            height="240"
            image="https://react.semantic-ui.com/images/wireframe/image-square.png"
            alt="Product image"
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Typography variant="caption" color="error" display="block" sx={{ mt: 1 }}>
                {time}
            </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
            <Typography variant="h6">
                {price}
            </Typography>
            <Button variant="contained" color="primary" endIcon={<GavelIcon />}>
                BUY
            </Button>
        </CardActions>
    </Card>
    
);

const AuctionAutoC = ({ categories, setSelectedCategory }) => (
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

)


const AuctionFormC = ({condition, setCondition}) => (
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
)

function CustomSelect({ label, menuItems, onValue, setValue }) {
    return (
        <FormControl fullWidth sx={{width: '20ch', backgroundColor:'#42A5f5', borderRadius: 1, boxShadow: 2}}>
            <Select
                value={onValue}
                onChange={(e) => setValue(e.target.value)}
                displayEmpty
                sx={{
                    color: 'white',
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'white',
                    }
                    }}
            >
            <MenuItem value="">
                <em>{label}</em>
            </MenuItem>
            {menuItems.map((m, i) => (
                            <MenuItem key={i} value={m}> {m}</MenuItem>
            ))}
            </Select>
        </FormControl>
    );
}

function BreadcrumbLink({ isActive, label, Icon }) {
    if(isActive) {
        return (
        <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            color="#1E88E5"
        >
        <Icon sx={{ mr: 0.5 }} fontSize="inherit" />
            {label}
        </Typography>);
    } else {
        return (
            <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="#"
            >
                <Icon sx={{ mr: 0.5, color: 'disabled' }} fontSize="inherit"/>
                <Typography  color="disabled">{label}</Typography>
            </Link>
        );
    }
}


export { StyledCard,  AuctionTitle, AuctionField, AuctionPriceField, AuctionDatePicker, AuctionPhoto, StyledBuyCard, AuctionAutoC, AuctionFormC, BreadcrumbLink, CustomSelect};