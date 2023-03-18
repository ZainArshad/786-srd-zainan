import { Card, Box, Typography, styled } from '@mui/material';
import Chart from 'react-apexcharts';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

function SmallChartStatsCard({
  name,
  value,
  percent,
  positive,
  chartData,
  chartOptions
}) {
  const LabelError = styled(Box)(
    ({ theme }) => `
      display: flex;
      background: ${theme.palette.error.main};
      color: ${theme.palette.error.contrastText};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      font-weight: bold;
      line-height: 23px;
      height: 22px;
      padding: ${theme.spacing(0, 2)};
      border-radius: ${theme.general.borderRadius};
    `
  );

  const LabelSuccess = styled(Box)(
    ({ theme }) => `
      display: flex;
      background: ${theme.palette.success.main};
      color: ${theme.palette.success.contrastText};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      font-weight: bold;
      line-height: 23px;
      height: 22px;
      padding: ${theme.spacing(0, 2)};
      border-radius: ${theme.general.borderRadius};
    `
  );

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2.5,
        mt: 3.5,
        height: 163,
        width: '100%'
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold'
          }}
        >
          {name}
        </Typography>
        <Typography variant="h3">{value}</Typography>
        {positive ? (
          <LabelSuccess>
            <ArrowUpwardOutlinedIcon fontSize="small" />
            {` +${percent}`}
          </LabelSuccess>
        ) : (
          <LabelError>
            <ArrowDownwardOutlinedIcon fontSize="small" />
            {` -${percent}`}
          </LabelError>
        )}
      </Box>
      <Box ml={2} flexGrow={1}>
        <Chart
          options={chartOptions}
          series={chartData}
          type="area"
          height={80}
        />
      </Box>
    </Card>
  );
}

export default SmallChartStatsCard;
