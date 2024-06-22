import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import './Store.css'
import Product from "./Product";
import { Col, Row } from "reactstrap";
import { loadProduct} from "./Service/ProducrService";
import { onSelectCategory} from "./Service/categoryService";
function Store() {

  const [product, setProduct] = useState([]);
  const [pBC, setPBC] = useState(null);

  useEffect(()=>{
    const getPro = async ()=>{
      const products = await loadProduct();
      console.log(products);
      setProduct(products);
    }

    getPro();
  },[])

  const handleSidebarButtonClick=(id)=>{
    if(id===0){
      setPBC(null);
      return;
    }
    onSelectCategory(id).then(data=>
      setPBC(data)
    ).catch((e)=>{
      console.log(e);
    })

    console.log(id);
  }

  return (
    <>
    <div className="store">
      <Sidebar onButtonClick={handleSidebarButtonClick}/>
      <div className="storeContainer">
        <Row md={3}>
          {
            pBC?pBC.map((each)=>(
              <Col key={each.product_id}>
              <Product  product={each}/>
              </Col>
            )):product.map((each)=>(
              <Col key={each.product_id}>
              <Product  product={each}/>
              </Col>
            ))
          }
        </Row>
      </div>
    </div>
    <div className="footer">Footer</div>
    </>
  );
}

export default Store;
