import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { About, Films, Home,Register,Login } from './pages';
import AddFilm from './pages/addFilm/addFilm';
import Film from './pages/film/Film';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const routes = createBrowserRouter([
    {
      path: "/register",
      element: <Register />
    },
    {
    path: "/login", 
    element: <Login />
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/films", element: <Films /> },
        { path: "/about", element: <About /> },
        { path: "/addfilm", element: <AddFilm /> },
        { path: "/film/:id", element: <Film /> }
      ]
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;
