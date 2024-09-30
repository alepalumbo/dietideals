import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import chroma from 'chroma-js';

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

export { StyledCard, CardTypography };