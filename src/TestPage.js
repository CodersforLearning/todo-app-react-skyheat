import React, { Component, useState } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from "./Signup";
import TodoList from "./App";

export default function TestPage() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minheight:"100vh"}}>
            <div className="w-100" style={{ maWidth: "400px"}}>
              <Router>
                <AuthProvider>
                  <Switch>
                    <Route exact path="/" component={TodoList}/>
                    <Route path="/signup" component={Signup}/>
                  </Switch>
                </AuthProvider>
              </Router>
            </div>
            
          </Container>
    )
}
