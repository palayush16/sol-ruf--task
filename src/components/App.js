import React from "react"
import Signup from "./Signup"
import Login from "./Login"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import Dashboard from "./Dashboard"
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center"
        style={{minHeight:"100vh"}}
      >
        <div className="w-100 j" style={{maxWidth:"400px"}}>
          <Router>
          
            <AuthProvider>
              <Routes >
               
               
                
                <Route path="/signup" element={<Signup/>}/>
                <Route
                  path="/"
                  element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                  }
                />
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route
                  path="/update-profile"
                  element={
                  <PrivateRoute>
                    <UpdateProfile/>
                  </PrivateRoute>
                  }
                />
              </Routes>
            </AuthProvider>
          </Router>
          
        </div>
        
      </Container>
    
  )
}

export default App;
