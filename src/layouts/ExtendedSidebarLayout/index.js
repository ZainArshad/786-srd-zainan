// import { Box, alpha, lighten, useTheme } from '@mui/material';
// import { Outlet } from 'react-router-dom';
// import ThemeSettings from 'src/components/ThemeSettings';

// import Sidebar from './Sidebar';
// import Header from './Header';

// const ExtendedSidebarLayout = () => {
//   const theme = useTheme();

//   return (
//     <>
//       <Box
//         sx={{
//           flex: 1,
//           height: '100%',

//           '.MuiPageTitle-wrapper': {
//             background:
//               theme.palette.mode === 'dark'
//                 ? theme.colors.alpha.trueWhite[5]
//                 : theme.colors.alpha.white[50],
//             marginBottom: `${theme.spacing(4)}`,
//             boxShadow:
//               theme.palette.mode === 'dark'
//                 ? `0 1px 0 ${alpha(
//                     lighten(theme.colors.primary.main, 0.7),
//                     0.15
//                   )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
//                 : `0px 2px 4px -3px ${alpha(
//                     theme.colors.alpha.black[100],
//                     0.1
//                   )}, 0px 5px 12px -4px ${alpha(
//                     theme.colors.alpha.black[100],
//                     0.05
//                   )}`
//           }
//         }}
//       >
//         <Header />
//         <Sidebar />
//         <Box
//           sx={{
//             position: 'relative',
//             zIndex: 5,
//             display: 'block',
//             // flex: 1,
//             // pt: `${theme.header.height}`,
//             // [theme.breakpoints.up('lg')]: {
//             //   ml: `${theme.sidebar.width}`
//             // }
//             flexGrow: 1,
//             p: 3
//           }}
//         >
//           <Box display="block">
//             <Outlet />
//           </Box>
//           <ThemeSettings />
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ExtendedSidebarLayout;

import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';

// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import SideBar from './Sidebar/sidebar';
// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open'
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   })
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open'
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme)
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme)
//   })
// }));

function ExtendedSidebarLayout() {
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

export default ExtendedSidebarLayout;
