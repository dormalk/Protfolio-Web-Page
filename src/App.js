import React, { Component } from 'react';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import ProjectsPage from './components/ProjectsPage';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import projects from './drive-projects';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      user: null,
      repos: {
        tsjs: [],
        python: [],
        csjav: [],
        php: [],
        otrs: [],
      }
    }
  }

  componentWillMount() {
    axios.get('https://api.github.com/users/dormalk')
    .then((res) => {
      this.setState({user: res.data})
    })
    .catch((err) => {console.error(err)});

    axios.get('https://api.github.com/users/dormalk/repos')
    .then((res) => {
      const tsjs = res.data.filter(repo => repo.language === 'TypeScript' || repo.language === 'JavaScript');
      const python = res.data.filter(repo => repo.language === 'Python' || repo.language === 'C++');
      const csjav = res.data.filter(repo => repo.language === 'C#' || repo.language === 'Java');
      const php = res.data.filter(repo => repo.language === 'PHP');
      const otrs = res.data.filter(repo => repo.language === null).concat(projects);
      
      const repos = { tsjs,python,csjav,php,otrs };
      this.setState({repos})
    })
    .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header tsjsCount={this.state.repos.tsjs.length}
                  pythonCount={this.state.repos.python.length}
                  csjavCount={this.state.repos.csjav.length}
                  phpCount={this.state.repos.php.length}
                  otrsCount={this.state.repos.otrs.length}/>
          <div className="body">
            <Switch>
              <Route exact path='/'>
                <WelcomePage user={this.state.user}/>
              </Route>
              <Route path='/js'>
                <ProjectsPage repos={this.state.repos.tsjs}/>
              </Route>
              <Route path='/python'>
                <ProjectsPage repos={this.state.repos.python}/>
              </Route>
              <Route path='/csjav'>
                <ProjectsPage repos={this.state.repos.csjav}/>
              </Route>
              <Route path='/php'>
                <ProjectsPage repos={this.state.repos.php}/>
              </Route>
              <Route path='/otrs'>
                <ProjectsPage repos={this.state.repos.otrs}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  };
}


export default App;
