import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {
  return <>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </>
}

export default App;
