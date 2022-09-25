import React, { useState, useEffect } from 'react';
import '@vtmn/icons/dist/vitamix/font/vitamix.css';
import { Row, Card, Col } from 'react-bootstrap/';
import { VtmnIcon } from "@vtmn/react";
import products from "../../products.json";
import { FaBoxOpen } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
//import iconss from '../../../node_modules/@vtmn/icons/dist/vitamix/svg/visa-line.svg';
//import { VtmnButton } from '@vtmn/react';
import './ShippingPage.css';


export default function ShippingPage() {

  const showTheDate = () => {
    const currentDate = new (Date)
    console.log(currentDate)
  }

  showTheDate()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
let month = months[currentDate.getMonth()];

  // const productInfo = products.map((product, i) => {
  //   // let productSize = 0;
  //   // productSize = {product.size}=+
  //   console.log("product: ", product.size);
  //   let x = product.size+
  //   console.log(x)
  //   // return {productSize};
  // })

  // console.log("product: ", products.size);

// {products?.map((product, i) => {
//   console.log("hello",product.size)
//   let productTotal = 0;
//   productTotal =+ product.size
//   console.log(productTotal)
//   return productTotal

// })}

let productstotal = 0;
products.forEach(product => {
  productstotal += product.size;
});
console.log(productstotal)





  //   const getData=()=>{
  //     fetch('products.json'
  //     ,{
  //       headers : {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //        }
  //     }
  //     )
  //       .then(function(response){
  //         console.log(response)
  //         return response.json();
  //       })
  //       .then(function(myJson) {
  //         console.log(myJson);
  //         getData(myJson)
  //       });
  //   }

  //   // const colletProduct = () => {

  //   // }
  // getData()
  // {products.map((product, i) => {
  //   console.log("product: ", product);
  //   return <span>{product.name}</span>;
  // })}

  return (
    <Row>
      <Col>
        {products.map((product, i) => {
          // console.log("product: ", product);
          return <span style={{
            margin: '5rem',
            paddingBottom: '5rem'
          }}>{product.name}{product.size}</span>;
        })}
      </Col>
      <h3>Szállítási Információk</h3>
      <p>Meddig add le a rendelésed, hogy biztosan megérkezzen karácsonyig? Segitünk eligazodni!</p>
      <Col className='bigCol'>
        <div className='smallCol' onClick={() => { console.log('heyy') }}>
          <VtmnIcon size={24} value="truck-line" variant="default" />
          <span>Házhozszállítás</span>
        </div>

        <div className='smallCol' onClick={() => { console.log('heyy') }}>
          <VtmnIcon size={24} value="store-line" variant="default" />
          <span>Áruházi átvétel</span>
        </div>
        <div className='smallCol' onClick={() => { console.log('heyy') }}>
          <VtmnIcon size={24} value="flashlight-line" variant="default" />
          <span>Aznapi kisátílás</span>
        </div>
        <div className='smallCol' onClick={() => { console.log('heyy') }}>
          <VtmnIcon size={24} value="truck-fill" variant="default" />
          <span>1 munkanapos kisátílás</span>
        </div>
        <div className='smallCol' onClick={() => { console.log('heyy') }}>
          <VtmnIcon size={24} value="store-fill" variant="default" />
          <span>1 órás áruházi átvétel</span>
        </div>
      </Col>
      <Col className='smallCol'>
        <Card className='cards'>
          <Card.Body><VtmnIcon size={24} value="error-warning-fill" variant="default" />Az itt feltüntetett dátumok tájékoztató jellegűek, szállító partnereink kapacitásától függően változhatnak.</Card.Body>
        </Card>
      </Col>
    <Col  className='bigCol'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><GiWorld size={20} /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">KÜLFÖLDI KÉSZLETBŐL</Card.Subtitle>
        {/* <Card.Text>
        KÜLFÖLDI KÉSZLETBŐL
        </Card.Text> */}
        <div style={{border: "solid red"}}>
        <Card.Text href="#"><span>{currentDate.getDate()}</span></Card.Text>
        <Card.Text>
        <span>{month.substring(0, 3).toUpperCase()}</span>
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FaBoxOpen size={20} /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">KISMÉRETŰ CSOMAG</Card.Subtitle>
        {/* <Card.Text>
        KISMÉRETŰ CSOMAG
        </Card.Text> */}
        <div style={{border: "solid red"}}>
        <Card.Text href="#"><span>{currentDate.getDate()}</span></Card.Text>
        <Card.Text>
        <span>{month.substring(0, 3).toUpperCase()}</span>
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FaBoxOpen size={30}  /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">KÖZEPES MÉRETŰ CSOMAG</Card.Subtitle>
        {/* <Card.Text>
        KÖZEPES MÉRETŰ CSOMAG
        </Card.Text> */}
        <div style={{border: "solid red"}}>
        <Card.Text href="#"><span>{currentDate.getDate()}</span></Card.Text>
        <Card.Text>
        <span>{month.substring(0, 3).toUpperCase()}</span>
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
    
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FaBoxOpen size={40}  /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">NAGYMÉRETŰ CSOMAG</Card.Subtitle>
        <div style={{border: "solid red"}}>
        <Card.Text href="#"><span>{currentDate.getDate()}</span></Card.Text>
        <Card.Text>
        <span>{month.substring(0, 3).toUpperCase()}</span>
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
    </Col>

      {/* <img src={iconss} /> */}
      {/* {<svg
        className='icon'
      />} */}
      {/* <VtmnButton onClick={() => console.log('clicked')}>Click</VtmnButton> */}

    </Row>
  )
}