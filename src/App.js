import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";

import Proba from "./sajatosztalyok/Proba";
import Anime from "./sajatosztalyok/Anime";
import Megjelenes from "./sajatosztalyok/Megjelenes";
import Mufaj from "./sajatosztalyok/Mufaj";
import Szavazas from "./sajatosztalyok/Szavazas";
import Torles from "./sajatosztalyok/Torles";
import Leiras_torles from "./sajatosztalyok/Leiras_torles";
import Felvitel from "./sajatosztalyok/Felvitel";
import Szavazatmegj from "./sajatosztalyok/Szavazatmegj"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser,showAdminBoard } = this.state;

    return (

      <div>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        
        AnimeLists
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Anime">Animék</Nav.Link>

          {showAdminBoard && (
          <Nav.Link href="/Felvitel">Felvitel</Nav.Link>
          )}

           {showAdminBoard && (
          <Nav.Link href="/Torles">Anime törlés</Nav.Link>
          )}

           {showAdminBoard && (
          <Nav.Link href="/Leiras_torles">Leírás törlés</Nav.Link>
          )}
          

          
          
          <NavDropdown title="Egyéb" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Mufaj">Műfaj szerinti keresés</NavDropdown.Item>
            <NavDropdown.Item href="Megjelenes">
              Megjelenés szerinti keresés
            </NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Szavazas">Szavazás</NavDropdown.Item>
            <NavDropdown.Item href="/Szavazatmegj">Szavazás eredmény</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {currentUser ? 

      (
       <Nav >
          <Nav.Link href="/profile">
             {currentUser.username}
          </Nav.Link>
           <Nav.Link href="/login" onClick={this.logOut}>
            Kijelentkezés

          </Nav.Link> </Nav>
            ) 
              : 
            (

          <Nav >
          <Nav.Link href="/login"> Belépés </Nav.Link> 

          <Nav.Link href="/register">
           Regisztrálás
          </Nav.Link>
          </Nav>
           )}
      </Navbar.Collapse>
    </Navbar>

        
       

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/Szavazatmegj" component={Szavazatmegj} />
            <Route path="/Proba" component={Proba} />
            <Route path="/Anime" component={Anime} />
            <Route path="/Megjelenes" component={Megjelenes} />
            <Route path="/Mufaj" component={Mufaj} />
            <Route path="/Szavazas" component={Szavazas} />
            <Route path="/Torles" component={Torles} />
            <Route path="/Leiras_torles" component={Leiras_torles} />
            <Route path="/Felvitel" component={Felvitel} />
          </Switch>
        </div>
      </div>
    );
  }
}




export default App;

