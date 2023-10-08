import axios from 'axios'
import React, { useEffect } from 'react'

const SearchBar = () => {
  useEffect(()=>{
    const FetchData = async()=>{
      const data = await axios.get("https://fakestoreapi.com/products")
      .catch(function (error) {
        console.log(error.toJSON());
      })
      console.log(data)
    }
    FetchData()
  }, [])
  return (
    <div>SearchBar</div>
  )
}

export default SearchBar