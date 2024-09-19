import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Error404 from './error404logo.svg';

export default function NotFound() {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center'
            }}
        >
            <img 
                src={Error404} 
                alt="Logo" 
                style={{ 
                    width: '350px',
                    transition: 'width 0.3s ease-in-out'
                }} 
            />
            
            <Typography variant="h1" sx={{ my: 1 }}>
                ERROR 404
            </Typography>
            <Typography variant="h3" sx={{ my: 1 }}>
                Page Not Found
            </Typography>
            <Typography variant="h5" sx={{ my: 2 }}>
                Torna alla <Link href="/">Home Page</Link>
            </Typography>
        </Box>
    );
}
