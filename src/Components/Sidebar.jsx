import React, { useEffect, useState } from 'react'
import './Slider.css'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadCategory } from './Service/categoryService'

function Sidebar() {

  const [category, setCategory] = useState([]);

  useEffect(()=>{
    const getCat = async ()=>{
      const categories = await loadCategory();
      console.log(categories);
      setCategory(categories);
    }

    getCat();
    // eslint-disable-next-line
  },[])

  if (!category) return <div>Loading...</div>;

  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Categories</span>
      </div>
      {/* <hr className='hr' /> */}
      <div className="center"></div>
      <div className="title">
          <ListGroup>
          {
              category.map((cat)=>(
                <ListGroupItem key={cat.category_id}>{cat.title}</ListGroupItem>
              ))
            }
          </ListGroup>
        </div>
    </div>
  )
}

export default Sidebar