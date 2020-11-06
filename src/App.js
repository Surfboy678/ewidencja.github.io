import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Record from './components/Record';
import DetailView from './components/DetailView';
import RecordList from './components/RecordList';
import Footer from './components/Footer';
import {Container, Row,  Col } from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


function App() {
  const marginTop = {
    marginTop : "10px"
  }
  return (
    <Router>
      <NavigationBar/>
        <Container>
          <Row>
            <Col lg = {12} style = {marginTop}>
              <Switch>
                  <Route path="/" exact component ={Welcome}/>
                  <Route path="/add" exact component ={Record}/>
                  <Route path="/edit/:id" exact component ={Record}/>
                  <Route path="/details/:id" exact component ={DetailView}/>
                  <Route path="/list" exact component ={RecordList}/>
              </Switch>            
            </Col>
          </Row>
        </Container>
        <Footer/>
        </Router>
  );
}
export default App;
