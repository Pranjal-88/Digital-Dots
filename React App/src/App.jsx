import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import FeedbackPage from './Pages/FeedbackAnalysis'
import Dashboard from './Pages/Dashboard/Dashboard'
import Contact from './Pages/Contact/Contact'
import OurProgs from './Pages/OurPrograms/OurProgs'
import DonationPage from './Pages/DonationPage/DonationPage'
import GrevenceForm from './Pages/GrevenceForm/GrevenceForm'
import Profile from './components/Profile/Profile'
import Colleges from './Pages/colleges/College'
import Student from './Pages/students/Student'
import Alumini from './Pages/Aluminis/Alumini'
import Feed from './components/Feed/Feed'
function App() {

  const [showLogin, setshowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState('')

  const switchToLogin = () => setIsLogin(true);
  const switchToSignUp = () => setIsLogin(false);

  return (
    <>
      {showLogin && (
        isLogin ?
          <Login setshowLogin={setshowLogin} switchToSignUp={switchToSignUp} setUser={setUser} /> :
          <SignUp setshowLogin={setshowLogin} switchToLogin={switchToLogin} />
      )}
      <div className='app'>
        <Navbar setshowLogin={setshowLogin} user={user} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feedback' element={<FeedbackPage />} />
          <Route path='/grevence' element={<GrevenceForm />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/program' element={<OurProgs />} />
          <Route path='/feedi' element={<Feed />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/students" element={<Student />} />
          <Route path="/aluminis" element={<Alumini />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<a href="http://localhost:8000/test" > Assessment</a>} />
        </Routes>
      </div>

    </>
  )
}

export default App
