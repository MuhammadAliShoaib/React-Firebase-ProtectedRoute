import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Feedback from '../screens/dashboardscreens/feedback';
import Message from '../screens/dashboardscreens/message';
import Notification from '../screens/dashboardscreens/notifications';

import { userLogOut } from "../config/firebasemethods"


const drawerWidth = 240;

function MainLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const [screens, setScreens] = React.useState([
    {
      Name: 'Notification',
      route: 'notification'
    },
    {
      Name: 'Message',
      route: 'message'
    },
    {
      Name: 'Feedback',
      route: 'feedback'
    }
  ])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const moveTo = (route) => {
    navigate(route)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {screens.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => { moveTo(x.route) }}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={x.Name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <ListItem disablePadding>
        <ListItemButton onClick={() => {
          userLogOut()
            .then(() => {
              navigate('/login')
            }).catch((err) => {
              console.log(err)
            })
        }}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>

          <Route path="feedback" element={<Feedback />} />
          <Route path="notification" element={<Notification />} />
          <Route path="message" element={<Message />} />

        </Routes>
      </Box>
    </Box>
  );
}

MainLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainLayout;