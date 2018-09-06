import React from 'react';
import ReactDOM from 'react-dom';


// Create a new component. This component shold produce
// some HTML

const App = () => {
    return <div>Hi!</div>;
};

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));



