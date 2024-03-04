import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Home = lazy(()=>import('./pages/Home'))
const About = lazy(()=>import('./pages/About'))
const Profile = lazy(()=>import('./pages/Profile'))
const Signin = lazy(()=>import('./pages/Signin'))
const Signup = lazy(()=>import('./pages/Signup'))
const Header = lazy(()=>import('./components/Header'))

const App = () => {
  const lazyloading =()=>{
    return(
      <div>loading...</div>
    )
  }
  return (
    <Router>
     <Suspense fallback={lazyloading()}>
      <Header/>

     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
     </Suspense>
    </Router>
  )
}

export default App