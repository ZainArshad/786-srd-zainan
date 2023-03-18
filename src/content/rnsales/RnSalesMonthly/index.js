import { useState } from 'react';
import { Grid, Typography, Box, useTheme, Button } from '@mui/material';

import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import EventIcon from '@mui/icons-material/Event';
import { DateRangePicker } from 'mui-daterange-picker';
import MainPage from 'src/components/MainPage';
import ChartComponent from './ChartComponent';
import SmallChartStatsCard from './SmallChartStatsCard';
import Results from './SeachListComponents/Result';
import RetailersListComponent from './RetailersListComponent';

function RnSalesMonthly() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line
  const [dateRange, setDateRange] = useState({});

  const toggle = () => setOpen(!open);
  const chart1Options = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.success.main],
      width: 1
    },
    colors: [theme.colors.success.main],
    markers: {
      size: 0
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      enabled: false,
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter() {
            return '$';
          }
        }
      },
      marker: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    legend: {
      show: false
    }
  };
  const chart1Data = [
    {
      name: 'Bitcoin',
      data: [47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart2Options = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.success.main],
      width: 1
    },
    colors: [theme.colors.success.main],
    markers: {
      size: 0
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      enabled: false,
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter() {
            return '$';
          }
        }
      },
      marker: {
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  const chart2Data = [
    {
      name: 'Cardano',
      data: [38, 44, 56, 47, 26, 24, 45]
    }
  ];

  const chart3Options = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.error.main],
      width: 1
    },
    colors: [theme.colors.error.main],
    markers: {
      size: 0
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      enabled: false,
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter() {
            return '$';
          }
        }
      },
      marker: {
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  const chart3Data = [
    {
      name: 'Ethereum',
      data: [33, 56, 24, 23, 24, 65, 43]
    }
  ];

  return (
    <>
      <MainPage>
        <Box width="100%" mt={1.1}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant="h3">RN Sales Monthly</Typography>
            <Box
              sx={{
                width: '50%',
                display: { md: 'flex', sm: 'grid', xs: 'grid' },
                justifyContent: 'end'
              }}
            >
              <Box sx={{ position: 'absolute', width: '50%' }}>
                <DateRangePicker
                  open={open}
                  toggle={toggle}
                  onChange={(range) => setDateRange(range)}
                />
              </Box>

              <Button
                variant="outlined"
                color="secondary"
                startIcon={<EventIcon />}
                sx={{
                  mr: 0.5
                }}
                onClick={toggle}
              >
                Date Range Picker
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<FilterAltRoundedIcon />}
                sx={{ mt: { md: 0, sm: 1, xs: 1 } }}
              >
                Filter
              </Button>
            </Box>
          </Box>

          <Grid container columnGap={7} rowGap={2}>
            <Grid item md={8} sm={12} xs={12}>
              <ChartComponent />
            </Grid>

            <Grid md={3.35} sm={12} xs={12} item>
              <Grid container columnGap={1.75}>
                <Grid md={12} sm={3.75} xs={12} item>
                  <SmallChartStatsCard
                    name="Streams"
                    value="18,871M"
                    positive
                    chartOptions={chart1Options}
                    chartData={chart1Data}
                    percent="14%"
                  />
                </Grid>
                <Grid md={12} sm={3.75} xs={12} item>
                  <SmallChartStatsCard
                    name="Earnings"
                    value="$1.42M"
                    positive
                    chartOptions={chart2Options}
                    chartData={chart2Data}
                    percent="14%"
                  />
                </Grid>
                <Grid md={12} sm={3.75} xs={12} item>
                  <SmallChartStatsCard
                    name="CPM"
                    value="0.09"
                    positive={false}
                    chartOptions={chart3Options}
                    chartData={chart3Data}
                    percent="6%"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{
              pt: 3
            }}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <RetailersListComponent />
            </Grid>
          </Grid>
          <Grid
            sx={{
              pt: 3
            }}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <Results />
            </Grid>
          </Grid>
        </Box>
      </MainPage>
    </>
  );
}

export default RnSalesMonthly;
