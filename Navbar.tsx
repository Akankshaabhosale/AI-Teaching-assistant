import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      if (window) {
        window().dispatchEvent(new Event('storage')); // Trigger storage event
      }
      return newMode;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setScrolled(window().scrollY > 100);
      }
    };
    if (window) {
      window().addEventListener('scroll', handleScroll);
    }
    return () => {
      if (window) {
        window().removeEventListener('scroll', handleScroll);
      }
    };
  }, [window]);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#b0b0b0'; // Metallic color
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#4f4f4f'; // Metallic color
    }
  }, [darkMode]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={handleThemeToggle}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.29)' : darkMode ? "#292929" :  'black',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
          border: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
          transition: 'all 0.3s ease',
          width: scrolled ? '80%' : '100%',
          marginTop: scrolled ? '20px' : '0',
          right: 'unset',
          borderRadius: scrolled ? '20px' : '0',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              AITA
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color:'#fff' }}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item}
                </Link>
              </Button>
            ))}
            <IconButton sx={{ color: darkMode ? '#b0b0b0' : '#fff' }} onClick={handleThemeToggle}>
              {darkMode ?   <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
