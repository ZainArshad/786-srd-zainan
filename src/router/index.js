import BaseLayout from 'src/layouts/BaseLayout';

import baseRoutes from './base';

const router = [
  {
    path: '*',
    element: <BaseLayout />,
    children: baseRoutes
  }
];

export default router;
