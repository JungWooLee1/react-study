import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from  './components/search_var';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAIuHU7Cs9_xBcbw6FJ5CQTCYxRxdyMOAA';

// Create a new component. This component shold produce
// some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {

      console.log(videos);
      console.log('API 리턴 완료 setState 호출');
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    })
  }
  
  render() {
    console.log('메인 render() 호출');
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));



