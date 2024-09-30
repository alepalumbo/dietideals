import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import closedLogo from './closedLogo.svg';
import openedLogo from './openedLogo.svg';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => theme.unstable_sx({
  color: 'black',
  position: 'relative',
  border: 1,
  borderRadius: 1,
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    borderColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    width: `calc(100% - ${theme.spacing(7)} - 1px)`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: `calc(${theme.spacing(8)} + 1px)`,
      width: `calc(100% - ${theme.spacing(8)} - 1px)`,
    },
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0} sx={{ border:1, borderColor: '#E0E0E0' }}>
        <Toolbar sx={{ bgcolor: 'white', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="black"
              aria-label="toggle drawer"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{ marginRight: 5 }}
            >
              <MenuIcon />
            </IconButton>
            <Paper
              component="form"
              elevation={0}
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", border: 1, borderColor: '#E0E0E0' }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <IconButton color="black">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                '& .MuiDrawer-paper': {
                  backgroundColor: '#233044',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                },
              }}>
        <Box>
          <DrawerHeader>
            <Link to="/">
              <img 
                src={open ? openedLogo : closedLogo} 
                alt="Logo" 
                style={{ 
                  width: open ? '180px' : '50px',
                  transition: 'none',
                  display: 'block',
                  margin: 'auto',
                }} 
              />
            </Link>
          </DrawerHeader>
          <Divider />
          <List sx={{ mt: 3 }}>
            {['Categorie', 'Compra', 'Vendi'].map((text, index) => {
              const icons = [<FilterListIcon />, <ShoppingCartIcon />, <PaymentIcon />];
              const links = ['/categorie', '/compra', '/nuova-asta'];

              return (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    component={Link}
                    to={links[index]}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      textDecoration: 'none',
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.common.white, 0.25),
                      },
                      '&:visited': {
                        color: 'white',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: 'white',
                        textDecoration: 'none',
                      }}
                    >
                      {icons[index]}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box>
          <Card
            component={Link}
            to="/editprofile"
            variant="outlined"
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              backgroundColor: '#233044',
              color: 'white',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#1E2532',
              },
              '&:visited': {
                color: 'white',
              },
            }}
          >
            <PersonIcon />
            {open && (
              <>
                <Box sx={{ ml: 1 }}>Modifica Profilo</Box>
                <ChevronRightIcon sx={{ ml: 'auto' }} />
              </>
            )}
          </Card>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}