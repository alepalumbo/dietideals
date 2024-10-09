import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UploadFile } from '@mui/icons-material'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { getUserProfile, updateUserProfile } from './api/api';
import dayjs from 'dayjs';


export default function EditProfile({ userId }) {
  const [file, setFile] = useState(null);
  const [userProfile, setUserProfile] = useState({
    fullname: '',
    bio: '',
    location: '',
    address: '',
    zipCode: '',
    phone: '',
    dateOfBirth: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  userId = 3; // Puoi modificare per usare un parametro dinamico

  // Caricamento dei dati utente quando il componente viene montato
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile(userId);
  
        // Converte la data di nascita da stringa a oggetto Day.js
        if (data.dateOfBirth) {
          data.dateOfBirth = dayjs(data.dateOfBirth); // Utilizza Day.js per il parsing
        }
  
        setUserProfile(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserProfile();
  }, [userId]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    console.log("Data selezionata:", date);
    console.log("Data selezionata (ISO):", date?.toISOString());
    const formattedDate = date ? date.format('YYYY-MM-DD') : null;
    console.log("Data selezionata (formattata):", formattedDate);  
    setUserProfile({
      ...userProfile,
      dateOfBirth: date,
    });
  };

  // Funzione per aggiornare il profilo
  const updateProfile = async () => {
    const formData = new FormData();
    formData.append('fullname', userProfile.fullname);
    formData.append('bio', userProfile.bio);
    formData.append('location', userProfile.location);
    formData.append('address', userProfile.address);
    formData.append('zipCode', userProfile.zipCode);
    formData.append('phone', userProfile.phone);
    formData.append('dateOfBirth', userProfile.dateOfBirth ? userProfile.dateOfBirth.toISOString() : '');
    if (file) {
      formData.append('file', file);
    }



    try {
      const response = await updateUserProfile(userId, formData);
      console.log('Profilo aggiornato con successo', response);
    } catch (error) {
      console.error('Errore durante l\'aggiornamento del profilo', error);
    }
  };

  if (loading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore nel caricamento del profilo</div>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="full">
        <Box sx={{ bgcolor: 'white', height: '100vh' }}>
          <Box>
            {/* Breadcrumb e Titolo */}
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
                                    Profilo (Modifica)
                                </Typography>
                            </Link>
                        </Breadcrumbs>
            <Typography variant="h4" sx={{ my: 1 }}>
              Modifica Profilo
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Box per i campi principali */}
            <Box sx={{ flex: 1, m: 3 }}>
              <Typography variant="h6" sx={{ my: 1 }}>
                Nome completo
              </Typography>
              <TextField 
                label="Nome e cognome" 
                variant="outlined" 
                name="fullname"
                value={userProfile.fullname}
                onChange={handleInputChange}
                sx={{ width: '300px' }} // Uniforme con gli altri campi
              />

              {/* Componente per l'upload delle foto */}
              <Typography variant="h6" sx={{ my: 1 }}>
                Foto
              </Typography>
              <Box
                sx={{
                  border: '1px dashed grey',
                  borderRadius: '8px',
                  padding: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '300px', // Uniforme con gli altri campi
                  margin: '16px 0',
                }}
                onClick={() => document.getElementById('file-input').click()}
              >
                {/* Upload File Icon */}
                <UploadFile sx={{ fontSize: '48px', color: '#1E88E5' }} />
                <Typography variant="body1" sx={{ color: '#1E88E5', textDecoration: 'underline' }}>
                  Click to upload
                </Typography>
                <input
                  type="file"
                  id="file-input"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  accept="image/*"
                />
                {file && <Typography variant="body2">{file.name}</Typography>}
              </Box>

              {/* Short bio */}
              <Typography variant="h6" sx={{ my: 1 }}>
                Short bio
              </Typography>
              <TextField
                label="Biografia"
                multiline
                rows={4}
                name="bio"
                value={userProfile.bio}
                onChange={handleInputChange}
                sx={{ width: '300px' }} // Uniforme con gli altri campi
              />

              {/* Data di nascita */}
              <Typography variant="h6" sx={{ my: 1 }}>
                Data di nascita
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker 
                    label="Scegli la data" 
                    value={userProfile.dateOfBirth} 
                    onChange={handleDateChange} 
                    sx={{ width: '300px' }} // Uniforme con gli altri campi
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>

            {/* Box per Indirizzo, Città, CAP, Cellulare */}
            <Box sx={{ flexShrink: 0, width: '300px', mr: 20, my: 2 }}>
              <Typography variant="h6" sx={{ my: 1 }}>
                Indirizzo
              </Typography>
              <TextField 
                label="Indirizzo" 
                name="address" 
                value={userProfile.address}
                onChange={handleInputChange} 
                fullWidth 
              />

              <Typography variant="h6" sx={{ my: 1 }}>
                Cittá
              </Typography>
              <TextField 
                label="Cittá" 
                name="location" 
                value={userProfile.location}
                onChange={handleInputChange} 
                fullWidth 
              />

              <Typography variant="h6" sx={{ my: 1 }}>
                CAP
              </Typography>
              <TextField 
                label="CAP" 
                name="zipCode" 
                value={userProfile.zipCode}
                onChange={handleInputChange} 
                fullWidth 
              />

              <Typography variant="h6" sx={{ my: 1 }}>
                Cellulare
              </Typography>
              <TextField 
                label="+39" 
                name="phone" 
                value={userProfile.phone}
                onChange={handleInputChange} 
                fullWidth 
              />

              {/* Button Centrato */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button 
                  variant="contained" 
                  sx={{ width: '100%', maxWidth: '300px' }} // Bottone centrato e della stessa larghezza
                  onClick={updateProfile}
                >
                  Conferma modifiche
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
