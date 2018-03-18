import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const apiKey = 'AIzaSyCjYEFX8yvzs1-3TL6gDUf6f1U71_v1Lac';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
this.videoSearch('piet');
}


videoSearch(term) {
  YTSearch({ key: apiKey, term: term }, (videos) => {
    this.setState({
      videos: videos,
    selectedVideo:videos[0]
  });
 });
}

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
       < div >
      < SearchBar onSearchTermChange={videoSearch} / >
      <VideoDetail video={this.state.selectedVideo} />
      < VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos = { this.state.videos } />
      < /div >
    );
  }
}
