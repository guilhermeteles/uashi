import { createBrowserRouter } from 'react-router-dom';
import { LandingLayout } from './landing/LandingLayout';
import { Home } from './landing/pages/Home';
import { AdminLayout } from './admin/AdminLayout';
import { Dashboard } from './admin/pages/Dashboard';

/**
 * App única, dois territórios:
 *   /        → landing (marketing)
 *   /admin   → dashboard (painel)
 * As demais telas entram como novas rotas em cada território.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);
