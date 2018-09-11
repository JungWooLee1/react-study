import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from  './components/search_var';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAIuHU7Cs9_xBcbw6FJ5CQTCYxRxdyMOAA';

// Create a new component. This component shold produce
// some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            console.log(videos);
        })
    }

    render() {
        return (
            <div>
                <SearchBar/><br/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));



