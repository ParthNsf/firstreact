import React from 'react'
import styles from './Card.module.css'

function Card({ data }) {
    return (
        
         <div className={styles.card} style = {{display: "flex",flexDirection:"column", flexWrap: "wrap"}}>
            <h3 className={styles.title}>{data.name}</h3>
            <h4>{data.speciality}</h4>
            <h5>{data.phoneNumber}</h5>
            <h4>{data.email}</h4>

            <h5>{data.price}</h5>
         </div>




    );
}

export default Card;