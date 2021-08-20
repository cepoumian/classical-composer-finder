import { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import About from './components/pages/about';
import Navbar from './components/layout/Navbar';
import Composers from './components/composers/Composers';
import Search from './components/composers/Search';
import Alert from './components/layout/Alert';
import { BaseContainer } from './components/styled/Containers';
import './App.css';

class App extends Component {
  state = {
    composers: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URI}/composer/list/pop.json`
    );
    this.setState({ composers: res.data.composers, loading: false });
  }

  // Search composers in the Open Opus API
  searchComposersHandler = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URI}/composer/list/search/${text}.json`
    );
    this.setState({ composers: res.data.composers, loading: false });
  };

  // Clear composers from state
  clearComposersHandler = () => {
    this.setState({ composers: [], loading: false });
  };

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { composers, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Classical Composer Finder" icon="fas fa-guitar" />
          <BaseContainer width="85%">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search
                      searchComposers={this.searchComposersHandler}
                      clearComposers={this.clearComposersHandler}
                      showClear={composers.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Composers loading={loading} composers={composers} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </BaseContainer>
        </div>
      </Router>
    );
  }
}

export default App;
