import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import HomePage from 'pages/Home/Home'
import LoginPage from 'pages/Login/Login'
import RegisterPage from 'pages/Register/Register'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserAuth, selectUserToken } from 'redux/selectors'
import { useEffect } from 'react'
import { refreshUserThunk } from 'redux/authServices'
import { ContactsPage } from 'pages/Home/Contacts/Contacts'
import { PrivateRoute } from './PrivateRoute/PrivateRoute'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const authenteficated = useSelector(selectUserAuth);

  useEffect(() => {
    if(!token || authenteficated) return;
    dispatch(refreshUserThunk());
  }, [token, dispatch, authenteficated])

    return(
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage/>} />
            <Route path='/login' element = {<LoginPage />} />
            <Route path='/register' element = {<RegisterPage />} />
            <Route path='/contacts' element = {
            <PrivateRoute redirectTo='/login'>
              <ContactsPage />
            </PrivateRoute>} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    )
  }

export default App