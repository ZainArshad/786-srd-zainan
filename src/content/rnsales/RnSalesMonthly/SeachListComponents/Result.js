import { useState } from 'react';
import numeral from 'numeral';

import {
  Box,
  Card,
  Divider,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  styled
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const products = [
  {
    'Customer Territory': 'Pakistan',
    id: 'pk',
    'Total Stream': 516721,
    'Total Earnings': 200100,
    '%GT': 0,
    CPM: 0
  },
  {
    'Customer Territory': 'India',
    id: 'in',
    'Total Stream': 5016721,
    'Total Earnings': 2100100,
    '%GT': 5,
    CPM: 3
  },
  {
    'Customer Territory': 'Malaysia',
    id: 'my',
    'Total Stream': 216721,
    'Total Earnings': 300100,
    '%GT': 0,
    CPM: 0
  },
  {
    'Customer Territory': 'USA',
    id: 'us',
    'Total Stream': 51006721,
    'Total Earnings': 2010100,
    '%GT': 3,
    CPM: 10
  },
  {
    'Customer Territory': 'UK',
    id: 'gb-eng',
    'Total Stream': 516721,
    'Total Earnings': 200100,
    '%GT': 0,
    CPM: 0
  },
  {
    'Customer Territory': 'Indonesia',
    id: 'id',
    'Total Stream': 516721,
    'Total Earnings': 200100,
    '%GT': 0,
    CPM: 0
  },
  {
    'Customer Territory': 'Canada',
    id: 'ca',
    'Total Stream': 5016721,
    'Total Earnings': 2100100,
    '%GT': 5,
    CPM: 3
  },
  {
    'Customer Territory': 'Mexico',
    id: 'mx',
    'Total Stream': 216721,
    'Total Earnings': 300100,
    '%GT': 0,
    CPM: 0
  },
  {
    'Customer Territory': 'Brazil',
    id: 'br',
    'Total Stream': 51006721,
    'Total Earnings': 2010100,
    '%GT': 3,
    CPM: 10
  },
  {
    'Customer Territory': 'Chile',
    id: 'cl',
    'Total Stream': 516721,
    'Total Earnings': 200100,
    '%GT': 0,
    CPM: 0
  }
];

const applyFilters = (products, query) => {
  return products.filter((product) => {
    let matches = true;

    if (query) {
      const properties = ['Customer Territory'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (product[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    return matches;
  });
};

const Results = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const filteredProducts = applyFilters(products, query);
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const ImageWrapper = styled('img')(
    () => `
          width: 15px;
          margin: 3px;
  `
  );

  return (
    <>
      <Card>
        <Box display="flex" alignItems="center">
          <Box
            flex={1}
            p={2}
            display={{ xs: 'block', md: 'flex' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                mb: { xs: 2, md: 0 }
              }}
            >
              <Typography variant="h3">
                Retailer Wise Stream/Earning/CPM
              </Typography>
            </Box>
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
              placeholder={t('Search by product name...')}
            />
          </Box>
        </Box>
        <Divider />

        {filteredProducts.length === 0 ? (
          <Typography
            sx={{
              py: 10
            }}
            variant="h3"
            fontWeight="normal"
            color="text.secondary"
            align="center"
          >
            {t("We couldn't find any products matching your search criteria")}
          </Typography>
        ) : (
          <>
            <TableContainer
              sx={{
                height: 300
              }}
            >
              <Table
                sx={{
                  height: 'max-content'
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      {t('Customer Territory')}
                    </TableCell>
                    <TableCell align="center">{t('Total Stream')}</TableCell>
                    <TableCell align="center">{t('Total Earnings')}</TableCell>
                    <TableCell align="center">
                      {t('%GT Sum of Earnings ($)')}
                    </TableCell>
                    <TableCell align="center">{t('CPM')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ overflow: 'scroll' }}>
                  {filteredProducts.map((product) => {
                    return (
                      <TableRow hover key={product.id}>
                        <TableCell align="center">
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <ImageWrapper
                              alt={product.id}
                              src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/1x1/${product.id}.svg`}
                            />
                            <Box
                              pl={1}
                              sx={{
                                width: 10
                              }}
                            >
                              <Typography>
                                {product['Customer Territory']}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="center">
                          <Typography>
                            <Text>
                              $
                              {numeral(product['Total Earnings']).format(
                                `0,0.00`
                              )}
                            </Text>
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography>
                            ${numeral(product['Total Stream']).format(`0,0.00`)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="h5"
                            sx={{
                              pl: 0.5
                            }}
                          >
                            {product['%GT']}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">{product.CPM}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Card>
    </>
  );
};

export default Results;
