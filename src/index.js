import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyA6vZJSqLTOjslgtTkl36VYXChwMalsxw8'
/*
create component

App = class

<App /> instance


show comp's html(JSX) on screen
*/


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
