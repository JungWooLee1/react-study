import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from  './components/search_var';

const API_KEY = 'AIzaSyAIuHU7Cs9_xBcbw6FJ5CQTCYxRxdyMOAA';

// Create a new component. This component shold produce
// some HTML

const App = () => {
    return (<div>
        <SearchBar/>
    </div>
    );
};

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

