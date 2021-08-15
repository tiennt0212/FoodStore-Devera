import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
// import './orderitem.css';
import unknown_image from '../../../../data-images/unknown.png'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const OrderItem = (props) => {
    const { imgPath, name, price, number, note } = props;
    return (
        <div className='order-item'>
            <div className='row1'>
                <div className='col1'>
                    <Image src={imgPath} width={46} height={46} className='food-image' />
                    <div className='food-info'>
                        <div className='food-name'>
                            {name}
                        </div>
                        <div className='food-price'>
                            $ {price}
                        </div>
                    </div>
                </div>
                <div className='col2'>
                    <div className='number-of-food'>
                        {number}
                    </div>
                    <div className='total-price'>
                        $ {number * price}
                    </div>
                </div>

            </div>
            <div className='row2'>
                <div className='order-note'>
                    {note}
                </div>
                <div className='icon-garbage'>
                    <DeleteOutlineIcon></DeleteOutlineIcon>
                </div>
            </div>
        </div>
    )
}

OrderItem.propsTypes = {
    imgPath: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    number: PropTypes.number,
    note: PropTypes.string,
}

OrderItem.defaultProps = {
    imgPath: unknown_image,
    name: 'Unknown Food',
    price: 12,
    number: 3,
    note: 'No information',
}

export default OrderItem;