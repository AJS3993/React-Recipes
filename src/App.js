import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

const APP_ID = 'eb8f8fae';
const APP_KEY = '71e6e3e1aa7366d7213a49c8b77291f5';

const [recipes, setRecipes] = useState([]);


useEffect(()=>{
  getRecipes()
}, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = response.json();
  setRecipes(data.hits);
};

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>button</button>
      </form>
    </div>
  );
}

export default App;
