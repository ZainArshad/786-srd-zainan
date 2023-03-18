import { Box, Grid, Typography, Card, Link } from '@mui/material';
import MainPage from 'src/components/MainPage';
import BarHome from '../../assets/images/barhome.svg';
import StatsHome from '../../assets/images/StatsHome.svg';
import DashHome from '../../assets/images/DashHome.svg';
import MoneyHome from '../../assets/images/MoneyHome.svg';
import UserHome from '../../assets/images/UserHome.svg';
import AnalyticsHome from '../../assets/images/AnalyticsHome.svg';
import LayersHome from '../../assets/images/LayersHome.svg';
import PieHome from '../../assets/images/PieHome.svg';

export function HomePage() {
  const items = [
    {
      name: 'RN Sales Monthly',
      icon: BarHome,
      link: 'rnsales-monthly'
    },
    {
      name: 'CRM Platform/Country',
      icon: StatsHome,
      link: 'cpn-platform'
    },
    {
      name: 'Daily Performance',
      icon: DashHome,
      link: 'daily-performance'
    },
    {
      name: 'Earnings Per Artist',
      icon: MoneyHome,
      link: 'earnings-per-artist'
    },
    {
      name: 'Track by Artist',
      icon: UserHome,
      link: 'track-by-artist'
    },
    {
      name: 'Earning by Artist',
      icon: AnalyticsHome,
      link: 'earnings-by-artist'
    },
    {
      name: 'Splits Insight',
      icon: LayersHome,
      link: 'splits-insight'
    },
    {
      name: 'Allocates Splits',
      icon: PieHome,
      link: 'allocates-splits'
    }
  ];
  return (
    <>
      <MainPage>
        <Box sx={{ width: '100%', mt: 1.1 }}>
          <Typography variant="h3">Welcome Back Vladimir</Typography>
          <Typography variant="p">Lorem Ipusm</Typography>
          <Grid container sx={{ mt: 3 }} rowGap={3}>
            {items.map((it, i) => {
              return (
                <Grid md={3} sm={6} xs={12} item key={i}>
                  <Card
                    sx={{
                      width: { md: '85%', xs: '95%' },
                      display: 'grid',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '140px'
                    }}
                  >
                    <Link
                      href={it.link}
                      sx={{ color: 'black', display: 'grid' }}
                    >
                      <img
                        src={it.icon}
                        alt={it.name}
                        style={{ cursor: 'pointer', margin: 'auto' }}
                      />
                      {/* </Link> */}
                      <Typography
                        variant="h4"
                        mt={2}
                        sx={{
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'blue'
                          }
                        }}
                      >
                        {it.name}
                      </Typography>
                    </Link>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </MainPage>
    </>
  );
}
