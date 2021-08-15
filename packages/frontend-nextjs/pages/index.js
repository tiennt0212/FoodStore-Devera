import Head from 'next/head'
import SideBar from '../components/SideBar/sidebar'
import TextField from '../components/TextField/textfield'
import DropDown from '../components/Dropdown/dropdown'
import DishCard from '../components/DishCard/dishcard'
import { unknown } from '../../../data-images/unknown.png';
import { useState } from 'react';
import Tab from '../components/Tab/tab';
import { Button } from '../components/Button/Button';
import OrderItem from '../components/OrderItem/orderitem'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import FoodList from '../components/FoodList/foodlist'

export default function Home({ foods }) {
  const [currentCategory, setCurrentCategory] = useState('Appetizer')
  console.log(foods)
  return (
    <div className="container">
      <Head>
        <title>Food Store - Devera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className='col1'>
          <SideBar items={['home', 'settings', 'user', 'logout']} />
        </div>
        <div className='col2'>
          <div className='row1'>

            <div className='info'>
              <h1 className='username'>Jaegar Resto</h1>
              <h3 className='datetime'>Tuesday, 2 Feb 2021</h3>
            </div>

            <div className='searchbar'>
              <TextField
                icon='search'
                placeholder='Search for food, coffee, etc...'
              ></TextField>
            </div>

          </div>

          <div className='row2'>
            <div className='items'>
              <Tab text={'All'}></Tab>
              <Tab text={'Appetizer'}></Tab>
              <Tab text={'Hot Dishes'}></Tab>
              <Tab text={'Cold Dishes'}></Tab>
              <Tab text={'Grill'}></Tab>
              <Tab text={'Soup'}></Tab>
              <Tab text={'Dessert'}></Tab>
            </div>
            <div className='line'></div>
          </div>

          <div className='row3'>
            <div className='category'>
              <h2>Choose Dishes</h2>
              <DropDown></DropDown>
            </div>
            <div className='dynamic-food-list'>
              <FoodList items={foods}></FoodList>
            </div>
          </div>

        </div>
        <div className='col3'>
          <div className='row1'>
            <h2>Orders #ORDER_CODE</h2>
            <div className='services'>
              <Button primary={true} label='Dine In'></Button>
              <Button primary={false} label='To Go'></Button>
              <Button primary={false} label='Delivery'></Button>
            </div>
          </div>

          <div className='row2'>
            <div className='table-title'>
              <div className='col1'>
                <h3>Item</h3>
                <h3>Qty</h3>
              </div>
              <div className='col2'>
                <h3>Price</h3>
              </div>
            </div>
            <div className='line'></div>
          </div>

          <div className='row3'>
            <div className='orders'>
              <OrderItem></OrderItem>
              <OrderItem></OrderItem>
              <OrderItem></OrderItem>
              <OrderItem></OrderItem>
              <OrderItem></OrderItem>
              <OrderItem></OrderItem>
            </div>
            <div className='summary'>
              <div className='row1'>
                <note>Discount</note>
                <h3>$ 0</h3>
              </div>
              <div className='row2'>
                <note>Sub total</note>
                <h3>$ 123.45</h3>
              </div>
              <div className='row3'>
                <Button primary label='Continue to Payment'></Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query getFood{
      foods{
        foodname
        price
        available
        img {
          url
        }
      }
    }
    `
  })
  return {
    props: {
      foods: data.foods
    }
  }
}