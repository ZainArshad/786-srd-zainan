import { Box } from '@mui/material';
import SideBar from 'src/layouts/ExtendedSidebarLayout/Sidebar/sidebar';

function MainPage({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: '-webkit-fill-available' }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default MainPage;
