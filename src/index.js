import _ from 'lodash';
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

    this.videoSearch('surfboards');
  }


  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log(videos);
      console.log('API 리턴 완료 setState 호출');
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    })
  }

  render() {
    // debounce를 적용하여 300밀리 세컨즈마다 함수 호출 (300 밀리 세컨트 이전에 호출시 함수가 호출되지 않음)
    // 호출이 반복되는 동안에는 로직 실행을 방지하며, 호출이 멈춘 뒤, 설정한 시간이 지나고 나서야 로직을 실행하게 된다.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
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



