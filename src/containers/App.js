import React, {useState, useEffect} from 'react'
// import { robots } from './robots';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'


function App() {

// class App extends Component {
//   constructor() {
//     super ();
//     this.state = {
//       robots: [],
//       searchField: '',
//     }
//   }

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(users => {
  //       this.setState({ robots: users});
  //     })
  // }


  useEffect(() => {
    async function fetchRobots() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setRobots(users);
    }
    fetchRobots().catch(console.error);
  }, []);


  const onSearchChange = (event) => {setSearchField(event.target.value)};

  // const { robots, searchField } = this.state;

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

// Made improvements to code:
// (robots.length === 0) -> (!robots.length)
// instead of IF-ELSE used ternary operator

  return !robots.length 
  ? <h1 className='tc'>LOADING</h1>
  : (
      <div className='tc'>
        <h1 className='f2'>ZTM Robofriends</h1>
        <SearchBox searchChange={onSearchChange} searchField={searchField} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
}


export default App;