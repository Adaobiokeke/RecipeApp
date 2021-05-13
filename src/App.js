import {useState, useEffect} from 'react';
import './App.css';
import Recipie from './Recipie';

const App =() =>{

const APP_ID = '2ccba870';
const APP_KEY = 'a301b5388d5ae59520234f99f776df30';

const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState('')
const [query, setQuery] = useState('chicken')


useEffect(()=>{
  getRecipies()
},[query]);

const getRecipies = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits,'asdfghjhgfdsasdfgh')

};

const updateChange = e => {
  setSearch(e.target.value);
};

const getSearch = e => {
e.preventDefault();
setQuery(search);
setSearch('')
}
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className='search-bar'
         type="text"
          value={search} 
          onChange={updateChange}
          />
        <button  className='search-button' type="submit" >Search</button>
      </form>
      <div className="recipees">
      {recipes.map(recipe =>(
        <Recipie 
        title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
