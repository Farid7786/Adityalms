import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
import Campuslife from './pages/Campuslife'
import Contact from './pages/Contact'
import Departments from './pages/Departments'
import About from './pages/About'
import Header from './components/Header'
import Signintype from './pages/Signintype'
import FacultySignup from './pages/FacultySignup'
import StudentSignup from './pages/StudentSignup'
import FacultySign from './pages/FacultySign'
import StudentSignin from './pages/StudentSignin'
import Profile from './pages/Profile'
import PrivateRoutes from './components/PrivateRoutes'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/facultysignin' element={<FacultySign/>} />
      <Route path='/studentsigin' element={<StudentSignin/>} />
      <Route path="/facultysignup" element={<FacultySignup />} />
      <Route path="/studentsignup" element={<StudentSignup/>} />
      <Route path="/campuslife" element={<Campuslife />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About/>} />
      <Route path="/department" element={<Departments />} />
      <Route path="/signintype" element={<Signintype/>} />
      <Route element={<PrivateRoutes/>}>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
