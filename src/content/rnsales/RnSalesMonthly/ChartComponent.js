import { useState } from 'react';
import Chart from 'react-apexcharts';
import {
  Card,
  CardContent,
  useTheme,
  CardActions,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Divider
} from '@mui/material';

function ChartComponent() {
  const theme = useTheme();
  const [tabs, setTab] = useState('Stream');

  const handleViewOrientation = (_event, newValue) => {
    setTab(newValue);
  };

  const ChartAudienceOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: [theme.colors.primary.main],
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },

      borderColor: theme.colors.alpha.black[10]
    },
    legend: {
      show: false
    },

    stroke: {
      curve: 'smooth',
      lineCap: 'butt',
      width: 3
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      tickAmount: 3,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  return (
    <Card sx={{ width: '100%', mt: 3.5 }}>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Typography variant="h4">{tabs}</Typography>

        <ToggleButtonGroup
          color="standard"
          size="small"
          value={tabs}
          exclusive
          onChange={handleViewOrientation}
          // orientation="vertical"
        >
          <ToggleButton
            sx={{
              px: 2,
              py: 0.5,
              lineHeight: 1.5,
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
            disableRipple
            value="Stream"
          >
            Stream
          </ToggleButton>
          <ToggleButton
            sx={{
              px: 2,
              py: 0.5,
              lineHeight: 1.5,
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
            disableRipple
            value="Earning"
          >
            Earning
          </ToggleButton>
          <ToggleButton
            sx={{
              px: 2,
              py: 0.5,
              lineHeight: 1.5,
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
            disableRipple
            value="CPM"
          >
            CPM
          </ToggleButton>
        </ToggleButtonGroup>
      </CardActions>
      <Divider />
      <CardContent>
        <Chart
          options={ChartAudienceOptions}
          series={[
            {
              name: 'New Users',
              data: [324, 315, 578, 576, 227, 459, 473, 282, 214, 623, 477, 401]
            }
          ]}
          type="area"
          height={450}
        />
      </CardContent>
    </Card>
  );
}

export default ChartComponent;
