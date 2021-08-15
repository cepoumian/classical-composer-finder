import { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Composers from './components/composers/Composers';
import ContainerBase from './components/styled/ContainerBase';
import './App.css';

class App extends Component {
  state = {
    composers: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_URI}/composer/list/pop.json`
    );
    this.setState({ composers: res.data.composers, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Classical Composer Finder" icon="fas fa-guitar" />
        <ContainerBase width="85%">
          <Composers loading={this.state.loading} composers={this.state.composers} />
        </ContainerBase>
      </div>
    );
  }
}

export default App;
