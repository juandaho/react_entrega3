import React from 'react'
import "./ItemCount.css"
import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [quiantity, setQuianity] = useState(initial)

    const increment = () => {
        if (quiantity < stock) {
            setQuianity(quiantity + 1)
        }

    }

    const decrement = () => {
        if (quiantity > 1) {
            setQuianity(quiantity - 1)
        }
    }



    return (

        <div className="Counter">

            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quiantity}</h4>

                <button className="Button" onClick={increment}>+</button>

            </div>

            <div>

                <button className="Button" onClick={() => onAdd(quiantity)} disabled={!stock}>Add to cart

                </button>

            </div>

        </div>

    )
}

