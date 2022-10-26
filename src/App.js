import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Routes';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
