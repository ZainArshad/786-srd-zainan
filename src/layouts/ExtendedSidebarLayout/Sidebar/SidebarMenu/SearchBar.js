// import ClearIcon from '@mui/icons-material/Clear';
// import SearchIcon from '@mui/icons-material/Search';
import {
  //   IconButton,
  //   OutlinedInput,
  //   Stack,
  //   Typography,
  //   useTheme,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme
} from '@mui/material';
// import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
// import { Button } from 'src/components/shared/Buttons';

export function SearchBar() {

//   onSearch = () => {},
//   handleBlur = () => {},
//   enableReturn = false,
//   defaultValue = '',
//   ...rest
  const theme = useTheme();
  //   const [searchValue, setSearchValue] = useState(defaultValue);
  //   const theme = useTheme();

  //   useEffect(() => {
  //     if (defaultValue) {
  //       onSearch(defaultValue);
  //     }
  //   }, []);

  //   const handleKeyDown = (event) => {
  //     if (!enableReturn) return;
  //     if (event.keyCode === 13 && searchValue) {
  //       onSearch(searchValue);
  //     }
  //   };

  const [query, setQuery] = useState('');

  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  return (
    <TextField
      size="small"
      fullWidth={mobile}
      onChange={handleQueryChange}
      value={query}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchTwoToneIcon />
          </InputAdornment>
        )
      }}
      sx={{ ml: 1.8, color: 'white' }}
      placeholder="Search"
    />
    // <OutlinedInput
    //   onChange={(e) => setSearchValue(e.target.value)}
    //   onKeyDown={handleKeyDown}
    //   placeholder={open ? 'Search' : ''}
    //   fullWidth
    //   size="medium"
    //   sx={{ color: 'white', width: '91%', ml: { md: 1.5, sm: 1.5, xs: 0 } }}
    //   value={searchValue}
    //   onBlur={() => handleBlur(searchValue)}
    //   endAdornment={
    //     searchValue && (
    //       <Stack direction="row" spacing={0.5}>
    //         <IconButton
    //           onClick={() => {
    //             onSearch('');
    //             setSearchValue('');
    //           }}
    //           size="small"
    //           sx={{ pl: 2.4 }}
    //         >
    //           <ClearIcon />
    //         </IconButton>

    //         <Button
    //           disabled={!searchValue}
    //           onClick={() => onSearch(searchValue)}
    //           size="small"
    //         >
    //           <Typography>Search</Typography>
    //         </Button>
    //       </Stack>
    //     )
    //   }
    //   startAdornment={<SearchIcon sx={{ mr: theme.spacing(1) }} />}
    //   {...rest}
    // />
  );
}

// SearchBar.propTypes = {
//   onSearch: PropTypes.func,
//   handleBlur: PropTypes.func,
//   enableReturn: PropTypes.bool,
//   defaultValue: PropTypes.string
// };
