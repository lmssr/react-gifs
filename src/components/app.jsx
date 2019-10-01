import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIF_API_KEY = 'koZqacoIGEzGtON1Qfix924ZoZ4eQwMY';

class App extends Component {
  constructor(props) { // be promoted into a class
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };

  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
        </div>
        <div>
            <Gif id={this.state.selectedGifId} />
        </div>
    );
  }
}

export default App;
