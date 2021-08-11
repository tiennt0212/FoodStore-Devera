import React from 'react';
import PropTypes from 'prop-types';
import './dishcard.css';
import unknown from '../../../../data-images/unknown.png';

export const DishCard = (props) => {
    const { imgPath, name, price, quantity } = props;
    return (
        <div className='dish-card'>
            <img src={imgPath} alt='Unknown Food' className='food-image' />
            <div className='background'>
                <div className='food-info'>
                    <div className='food-name'>{name}</div>
                    <div className='food-price'>{price} $</div>
                    <div className='food-quantity'>{quantity} available</div>
                </div>
            </div>

        </div>
    )
}

DishCard.propTypes = {
    imgPath: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}

DishCard.defaultProps = {
    imgPath: unknown,
    name: 'Mixed Salads',
    price: 123456789,
    quantity: 123,
}