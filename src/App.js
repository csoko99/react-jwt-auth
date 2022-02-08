import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Proba from "./sajatosztajok/Proba";
import Anime from "./sajatosztajok/Anime";
import Megjelenes from "./sajatosztajok/Megjelenes";
import Mufaj from "./sajatosztajok/Mufaj";
import Szavazas from "./sajatosztajok/Szavazas";
import Torles from "./sajatosztajok/Torles";
import Leiras_torles from "./sajatosztajok/Leiras_torles";
import Felvitel from "./sajatosztajok/Felvitel";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
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
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (

      <div>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        
        AnimeWeb
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
          {showAdminBoard && (
          <Nav.Link href="/admin">Admin lap</Nav.Link>
          )}

          {showModeratorBoard && (
          <Nav.Link href="/mod">Moderátor lap</Nav.Link>
          )}
          
          <NavDropdown title="Egyéb" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/Mufaj">Műfaj szerinti keresés</NavDropdown.Item>
            <NavDropdown.Item href="Megjelenes">
              Megjelenés szerinti keresés
            </NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Szavazas">Szavazás</NavDropdown.Item>
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
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
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

