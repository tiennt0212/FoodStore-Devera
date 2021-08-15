import React from 'react';
import PropTypes from 'prop-types';
// import './foodlist.css';
import DishCard from '../DishCard/dishcard';

const FoodList = (props) => {
    const { items } = props
    
    return (
        <div className={'my-food-list'}>
            {
                items &&
                items.map(item => <DishCard  name={item.foodname} price={item.price} quantity={item.available}></DishCard>
                    )
            }
        </div>
    )
}

FoodList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(DishCard.propTypes))
}

FoodList.defaultProps = {

}

export default FoodList;