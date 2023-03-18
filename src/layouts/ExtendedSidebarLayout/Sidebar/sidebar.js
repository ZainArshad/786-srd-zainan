import { useState, useContext } from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  useTheme
} from '@mui/material';
import { ThemeContext } from 'src/theme/ThemeProvider';
import SidebarMenu from './SidebarMenu';
import UserBox from './UserBox';

function SideBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [tabs, setTab] = useState('Stream');

  const setThemeName = useContext(ThemeContext);
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';

  // eslint-disable-next-line
  const [themes, setTheme] = useState(curThemeName);

  const changeTheme = (theme) => {
    setTheme(theme);
    setThemeName(theme);
  };

  const handleViewOrientation = (_event, newValue) => {
    setTab(newValue);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const drawerWidth = 281;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    background: '#111633',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
  });

  const closedMixin = (theme) => ({
    background: '#111633',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`
    }
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  }));

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {open && (
            <Typography
              component="h2"
              variant="h3"
              sx={{ color: 'white', fontWeight: 'bold', ml: 1 }}
            >
              RN Sales Report
            </Typography>
          )}
          <DrawerHeader>
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
              {!open ? (
                <ChevronRightIcon style={{ fill: 'white' }} />
              ) : (
                <ChevronLeftIcon style={{ fill: 'white' }} />
              )}
            </IconButton>
          </DrawerHeader>
        </Box>
      </DrawerHeader>
      <Divider />
      <SidebarMenu open={open} />
      <ToggleButtonGroup
        color="standard"
        size="small"
        value={tabs}
        exclusive
        orientation={open ? 'horizontal' : 'vertical'}
        onChange={handleViewOrientation}
        sx={{
          margin: 'auto',
          width: open ? '100%' : '35%'
        }}
      >
        <ToggleButton
          sx={{
            px: 2,
            py: 0.5,
            lineHeight: 1.5,
            fontSize: `${theme.typography.pxToRem(12)}`,
            width: '50%',
            '&.MuiToggleButton-root': {
              background: '#111633'
            },
            '&.Mui-selected, &.Mui-selected:hover': {
              background: 'gray'
            },
            '&:hover': {
              background: 'gray'
            }
          }}
          disableRipple
          value="PureLightTheme"
          onClick={() => {
            changeTheme('PureLightTheme');
          }}
        >
          <WbSunnyIcon style={{ fill: 'white' }} />
        </ToggleButton>
        <ToggleButton
          sx={{
            px: 2,
            py: 0.5,
            lineHeight: 1.5,
            fontSize: `${theme.typography.pxToRem(12)}`,
            width: '50%',
            '&.MuiToggleButton-root': {
              background: '#111633'
            },
            '&.Mui-selected, &.Mui-selected:hover': {
              background: 'gray'
            },
            '&:hover': {
              background: 'gray'
            }
          }}
          disableRipple
          value="NebulaFighterTheme"
          onClick={() => {
            changeTheme('NebulaFighterTheme');
          }}
        >
          <DarkModeIcon style={{ fill: 'white' }} />
        </ToggleButton>
      </ToggleButtonGroup>
      <Divider />
      <UserBox open={open} />
    </Drawer>
  );
}

export default SideBar;
