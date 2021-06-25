import React, { Component, useState } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from "./Signup";
import TodoList from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

export default function TestPage() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minheight:"100vh"}}>
            <div className="w-100" style={{ maWidth: "400px"}}>
              <Router>
                <AuthProvider>
                  <Switch>
                    <PrivateRoute exact path="/" component={Dashboard}/>
                    <PrivateRoute exact path="/updateProfile" component={UpdateProfile}/>
                    <Route exact path="/note" component={TodoList}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login} />
                    <Route path="/forgotPassword" component={ForgotPassword}/>
                  </Switch>
                </AuthProvider>
              </Router>
            </div>
            
          </Container>
    )
}
