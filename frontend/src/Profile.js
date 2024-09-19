import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Paper, Grid, Avatar, Typography, Divider, Button, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CssBaseline from '@mui/material/CssBaseline';
import PersonIcon from '@mui/icons-material/Person';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { getUserProfile } from './api/api';
import UserProfile from './UserProfile';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

// Componente principale
export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 3;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile(userId);
        setUserProfile(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  if (error) {
    return <p>Errore: {error}</p>;
  }
  
  console.log(userProfile);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
        <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                href="/"
                            >
                                <HomeIcon sx={{ mr: 0.5, color: 'disabled' }} />
                                <Typography variant="h6" color="disabled">
                                    Home
                                </Typography>
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                href="/compra"
                            >
                                <PersonIcon sx={{ mr: 0.5, color: '#1E88E5' }} />
                                <Typography variant="h6" color="#1E88E5">
                                    Profilo
                                </Typography>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <Typography variant="h4" sx={{ my: 1 }}>
                        Profilo
                    </Typography>
    <CssBaseline />
      <Grid container spacing={4}>
        {/* Sidebar sinistra */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Avatar 
              alt="avatar" 
              src={userProfile.profilePictureUrl} 
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
                {userProfile.fullname}
            </Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ textAlign: 'left', pl: 2 }}>
              <Typography variant="subtitle1" gutterBottom>Informazioni</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <HomeIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">{userProfile.location}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <InfoIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">Iscritto dal : {userProfile.createdAt}</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle1" gutterBottom>Contatti</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">{userProfile.phoneNumber}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <GoogleIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">{userProfile.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <InstagramIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">@{userProfile.fullname}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Sezione dei dettagli */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Dettagli</Typography>
              <Box>
                <Button variant="contained" color="primary" sx={{ mr: 1 }}>Contatta</Button>
                <Button variant="contained" color="error">Report</Button>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Valutazione Utente */}
            <Typography variant="subtitle1" gutterBottom>Valutazione Utente</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarIcon color="warning" />
              <StarBorderIcon color="disabled" />
              <StarBorderIcon color="disabled" />
            </Box>

            {/* About me */}
            <Typography variant="subtitle1" gutterBottom>Su di me</Typography>
            <Typography variant="body2" paragraph>
                {userProfile.bio}
            </Typography>
            <Typography variant="caption" gutterBottom>Website: </Typography>
                <Link>https://example.com/</Link>
            <Divider sx={{ my: 2 }} />

            {/* Dettagli personali */}
            <Typography variant="subtitle1" gutterBottom>Dettagli personali</Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={6}>
                <Typography variant="body2"><strong>{userProfile.fullname}</strong></Typography>
                <Typography variant="body2">John Herbert Smith</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"><strong>Città</strong></Typography>
                <Typography variant="body2">{userProfile.location}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"><strong>Indirizzo</strong></Typography>
                <Typography variant="body2">{userProfile.address}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"><strong>Zip Code</strong></Typography>
                <Typography variant="body2">{userProfile.zipCode}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2"><strong>Email</strong></Typography>
                <Typography variant="body2">{userProfile.email}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
