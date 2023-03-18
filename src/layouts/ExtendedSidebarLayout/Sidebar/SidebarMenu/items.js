/* eslint-disable no-console */
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';

const menuItems = [
  {
    heading: '',
    items: [
      {
        name: 'Mine',
        icon: BackupTableTwoToneIcon,
        link: '',
        items: [
          {
            name: 'Home',
            icon: '../../../../assets/images/home.svg',
            link: '/home',
            bicon: <HomeOutlinedIcon style={{ fill: 'white' }} />
          },
          {
            name: 'RN Sales Monthly',
            icon: '../../../../assets/images/home.svg',
            link: '/rnsales-monthly',
            bicon: <BarChartRoundedIcon style={{ fill: 'white' }} />
          },
          {
            name: 'CPM Platform/Country',
            link: '/cpm-platform',
            icon: '../../../../assets/images/home.svg',
            bicon: <InsertChartOutlinedOutlinedIcon style={{ fill: 'white' }} />
          },
          {
            name: 'Daily Perfomance',
            link: '/daily-performance',
            icon: '../../../../assets/images/home.svg',
            bicon: <SpeedOutlinedIcon style={{ fill: 'white' }} />
          },
          {
            name: 'Earnings per Artist',
            link: '/earnings-per-artist',
            icon: '../../../../assets/images/home.svg',
            bicon: <MonetizationOnOutlinedIcon style={{ fill: 'white' }} />
          },
          {
            name: 'Track by Artist',
            link: '/track-by-artist',
            icon: '../../../../assets/images/home.svg',
            bicon: <PeopleOutlinedIcon style={{ fill: 'white' }} />
          },
          {
            name: 'Earnings by Artist',
            link: '/earnings-by-artist',
            icon: '../../../../assets/images/home.svg',
            bicon: <TrendingUpOutlinedIcon style={{ fill: 'white' }} />
          },
          {
            name: 'Splits Insight',
            link: '/splits-insight',
            icon: '../../../../assets/images/home.svg',
            bicon: <LayersOutlinedIcon style={{ fill: 'white' }} />
          },
          {
            name: 'Allocate Splits',
            link: '/allocate-splits',
            icon: '../../../../assets/images/home.svg',
            bicon: <PieChartOutlinedIcon style={{ fill: 'white' }} />
          }
        ]
      }
    ]
  }
];

export default menuItems;
