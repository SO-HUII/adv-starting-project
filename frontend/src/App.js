import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import EventPage, { loader as eventsLoader } from './pages/Event';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {path: '/', 
    element: <RootLayout />, 
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage/> },
      { path: 'events', element: <EventsRootLayout />, 
        children: [
          { index: true, element: <EventPage />, loader: eventsLoader},
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> }
        ] 
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;