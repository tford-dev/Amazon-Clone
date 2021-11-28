/* eslint-disable */ 
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import './Orders.css';
import {useStateValue} from '../../StateProvider';
import Order from './Order';
import {Navigate} from 'react-router-dom';

const Orders = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    //useEffect hook to display baskets from orders made by authenticated user that are in database
    useEffect(()=>{
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }    
    }, [user])

    return (
        user ? (
            <div className='orders'>
                <h1>Your Orders</h1>

                <div className='orders__order'>
                    {/*If the user has orders, they are mapped and displayed in component*/}
                    {orders?.map(order=>(
                        <Order order={order} />
                    ))}
                </div>
            </div>
        )   :   (
            <Navigate replace to="/login" />
        )
    )
}

export default Orders;
