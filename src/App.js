import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import Great from './components/Great'
import Count from './components/Count'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import ParentComponent from './components/ParentComponent'
import ChildComponent from './components/ChildComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import Recipe from './recipeapp/Recipe'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  const APP_ID = 'cf82956c';
  const APP_KEY = '418a47f8064c1e94cc478f4139699e3d';

  const [recipes, setRecipes] = useState([]);
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");
  useEffect(()=> {
    getRecipes();
  },[query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }

  return (
    <Router>
    <div className="App">
    <br/>
    <h1 style={{textAlign: 'center'}}>Recipe App in React</h1>
    <br/><br/>
    <form onSubmit={getSearch} className='search-form'>
    <div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-5">
    <input className='search-bar form-control' type='text' value={search} onChange={updateSearch}/>
    </div>
    <div className="col-md-1">
    <button className='search-button btn btn-info' type='submit'>Search</button>
    </div>
    <div className="col-md-3"></div>
    </div>
    </form>
    <br/>
    <div className="row">
    {recipes.map(recipe => (
      <Recipe
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
    ))}
    </div><br/>

  {/*  <Navbar/>
    <Switch>
    <Route path='/contact' component={Form}/>
    <Route path='/about' component={Stylesheet}/>
    <Route path='/shop' component={Shop}/>
    <Route path='/' exact component={Inline}/>
    </Switch> */}

    {/*<FragmentDemo/>
    <Stylesheet/>
    <Inline/>*/}
      {/*  <NameList/>  */}
      {/*<Welcome name="Captain" secondname="Marvel"/>*/}
      {/*<Welcome name="Bruce" secondname="Banner"/>*/}
      {/*<Hello name="Captain" secondname="Marvel">*/}
      {/*<p>The strongest Avenger</p>*/}
      {/*</Hello>*/}
      {/*<Hello name="Captain" secondname="America">*/}
      {/*<button>Leader</button>*/}
      {/*</Hello>*/}
      {/*<Hello name="Bruce" secondname="Banner"/>*/}
      {/*<Great/>*/}
      {/*<Count/>*/}
      {/*<FunctionClick/>*/}
      {/*<ClassClick/>*/}
      {/*<ParentComponent/>*/}
      {/* <UserGreeting/>  */}
    </div>
    </Router>
  );
}

export default App;
