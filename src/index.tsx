import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './view/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider as NFTProvider } from './store/NFTStore';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NFTProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={3000}
        theme='colored'
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        transition={Slide}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </NFTProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
