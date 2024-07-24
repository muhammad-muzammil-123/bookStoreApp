import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
// import course from '../../components/Course/course'
import Course from '../../components/Course/course'
import Courses from '../../courses'
import Login from '../../pages/Login/login'
import SignUp from '../../pages/SignUp/signup'
import { useAuth } from '../../context/authProvider'
export default function RouterDom(){
    const [authUser,setAuthUser] = useAuth();
    console.log(authUser)
    return(
        <div className= 'dark:bg-slate-900 dark:text-white'>
            <BrowserRouter>
            <Routes>
                
             <Route path='/' element={<Home />} ></Route>
             <Route path='/course' element={authUser ? <Courses /> : <Navigate to='/signup' />}></Route>
             <Route path='/login' element={<Login />}></Route>
             <Route path='/signup' element={<SignUp />}></Route>
            </Routes>
            </BrowserRouter>
           
        </div>
    )
}