import React, { useEffect } from "react";
import styles from "./Card.module.css";
import headphones from '../assets/hero_headphones.png';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { useState } from "react";
import { Grid } from "@mui/material";




// const fetchData = async() => {
//     try{
//     let res = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
//     console.log('res',res.data)
//     const resdata = res.data
  
//     return resdata
 
//     }catch(e){
//         console.log(e)
//     }
// }

// export default function Card({
//      }){

//             const response= fetchData()
//             console.log(response,'response')
        
//         return (
//            <>
//            { response.map((item) => {
//             <div className={styles.card}>
//                 <div className={styles.imageContainer}>
//                     <img src={headphones} alt="headphones" />
//                 </div>
//                 <Chip label={item.follows} />
//                 <div className="name">{item.title}</div>
//             </div>})
//      }
//             </>
//         )
    
//     }
export default function Card() {
    const [response, setResponse] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true); // To handle loading state

    // Function to fetch data asynchronously
    const fetchData = async () => {
        try {
            const res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            console.log('res', res.data);
            setResponse(res.data); // Store data in state
setLoading(false); // Stop loading after data is fetched
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts

    // Check if loading
    if (loading) {
        return <div>Loading...</div>;
    }
return (
      <div className={styles.container}>
        <div className={styles.headingContainer}>
      <h2 className={styles.heading}>Top Albums</h2>
      <h2 className={styles.collapse}>Collapse</h2></div>

      <div className={styles.album}>
            {response.map((item) => (
                //   <div className="album">
                <div key={item.id} className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src={item.image} alt="headphones" />
                    </div>
                    <Chip label={item.follows} className={styles.follows} />
                    <div className={styles.title}>{item.title}</div>
                </div>
                // </div>

            ))}
            </div>
        </div>
    );
}
