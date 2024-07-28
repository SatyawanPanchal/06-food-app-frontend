 
import './home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import ShowFoods from '../../components/showFoods/ShowFoods'
 
 

const Home = () => {
  const[category,setCategory]=useState('All');
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
 
      <ShowFoods category={category}/>
    </div>
  )
}

export default Home
