import React from 'react'
import Blank from './components/Blank'
import Game from './components/Game'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Easteregg from './components/Easteregg';


const App = () => {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={<Blank />}></Route>
                 <Route exact path='/game' element={<Game />}></Route>
                 <Route exact path='/easteregg' element={<Easteregg/>}></Route>
          </Routes>
          </div>
       </Router>
  )
}

export default App