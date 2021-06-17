import { useEffect} from 'react';
import { Route, Switch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Header from './components/header/header';
import Home from './components/home/home';
import Search from './components/search/search';
import Movie from './components/movieDetails/movie';
// import LoginSignup from './components/loginSignup/loginSignup';

import { login_action } from './actions/login_action';

const routes = () => {

  return (
    <div className="app-main-div">
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={Search} />
        <Route path="/movies" component={Movie} />
      </Switch>
    </div>
  )
}

function App() {

  const login = useSelector((state: any) => state.login)
  const dispatch = useDispatch();

  useEffect(() => {
     axios.post('/c5/getUserData', { withCredentials: true})
     .then((response:any) => {
       if(response.status === 200) {
         dispatch(login_action());
       }
     })
  })

  return (
    <>
      {/* {login ? routes() : <LoginSignup /> } */}
      {routes()}
    </>
  );
}

export default App;
