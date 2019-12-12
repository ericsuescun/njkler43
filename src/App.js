import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: '' }
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value })
    console.log(this.state.searchTerm);
  }

  render() {
    let items = posts;
    if(this.state.searchTerm) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    }
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.searchTerm} onChange={this.handleChange.bind(this)} />
        </div>
        <ul>
          {items.map((post, index) => 
            <li key={'id' + index}>
              <a href={post.url}><img src={post.image } alt={post.title} /></a>
              <p>{ post.title }</p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}


export default App


