import React, { useEffect } from "react";
import styles from "./Card.module.css";
import headphones from '../assets/hero_headphones.png';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { useState } from "react";
// import { response } from "express";


const fetchData = async() => {
    try{
    let res = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
    console.log('res',res.data)
    const resdata = res.data
  
    return resdata
 
    }catch(e){
        console.log(e)
    }
}

export default function Card({
     }){
            const response= fetchData()
        
        return (
           <>
           { response.map((item) => {
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={headphones} alt={"headphones"} />
                </div>
                <Chip label={item.follows} />
                <div className="name">{item.title}</div>
            </div>})
     }
            </>
        )
    
    }