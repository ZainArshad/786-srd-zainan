import { useState } from 'react';
import Scrollbar from 'src/components/Scrollbar';
// import { SidebarContext } from 'src/contexts/SidebarContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {
  Box,
  alpha,
  styled,
  Divider,
  useTheme,
  lighten,
  darken,
  Typography
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// import Logo from 'src/components/LogoSign';
// import SidebarTopSection from './SidebarTopSection';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 61px;
`
);

function Sidebar() {
  const [open, setOpen] = useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  // const closeSidebar = () => toggleSidebar();
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(true);
  const drawerWidth = 280;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(7)} + 1px)`
    }
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    display: {
      xs: 'none',
      lg: 'inline-block'
    },
    position: 'fixed',
    left: 0,
    top: 0,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  }));

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? alpha(lighten(theme.header.background, 0.1), 0.5)
                : darken(theme.colors.alpha.black[100], 0.5),
            boxShadow:
              theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
          }}
        >
          <Scrollbar>
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
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              {/* <Logo /> */}
            </Box>

            <SidebarMenu open={open} />
            <ToggleButtonGroup
              // value={isDarkTheme}
              exclusive
              onChange={setIsExpanded}
              // className={` ${styles.buttonToggle} ${
              //   isExpanded ? styles.horizontal : styles.vertical
              // }`}
              orientation={isExpanded ? 'horizontal' : 'vertical'}
              aria-label="outlined button group"
            >
              <ToggleButton
                value="bright"
                sx={{ background: 'black', width: '50%', color: 'grey' }}
              >
                {/* <span className={styles.sun}></span> */}
              </ToggleButton>
              <ToggleButton value="dark">
                {/* <span className={styles.moon}></span> */}
              </ToggleButton>
            </ToggleButtonGroup>
          </Scrollbar>
          <Divider
            sx={{
              background: theme.colors.alpha.trueWhite[10]
            }}
          />
          <SidebarFooter />
        </SidebarWrapper>
        {/* </SidebarWrapper> */}
      </Drawer>
      {/* <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5)
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52
                }}
              >
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                my: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            <SidebarTopSection />
            <Divider
              sx={{
                my: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />

            <SidebarMenu />
          </Scrollbar>

          <SidebarFooter />
        </SidebarWrapper>
      </Drawer> */}
    </>
  );
}

export default Sidebar;
