import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsFetch } from './catState'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const cats = useSelector(state => state.cats.cats)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch])
  console.log(cats)

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
