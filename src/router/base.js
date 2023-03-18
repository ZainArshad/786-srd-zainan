import { Suspense, lazy } from 'react';
import { HomePage } from 'src/content/rnsales/home';

import SuspenseLoader from 'src/components/SuspenseLoader';
import RnSalesMonthly from 'src/content/rnsales/RnSalesMonthly';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);

const baseRoutes = [
  {
    path: '/home',
    element: <HomePage />
  },
  { path: 'rnsales-monthly', element: <RnSalesMonthly /> },
  {
    path: '*',
    element: <Status404 />
  }
];

export default baseRoutes;
