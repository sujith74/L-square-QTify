import react from "react";
import StyledEngineProvider from '@mui/material/StyledEngineProvider';  
import Carousel from '../Components/Carousel/Carousel';
import Card from "../Components/Card/Card";
import styles from "./TopAlbum.module.css";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";  

function TopAlbum() {
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
<>      
     <div className={styles.container}>
    <div className={styles.headingContainer}>
      <h2 className={styles.heading}>Top Albums</h2>
      <h2 className={styles.collapse}>Collapse</h2>
      </div>

        {/* <StyledEngineProvider> */}
            <Carousel item={response} />
            {/* item={response} */}
                
       
        {/* </StyledEngineProvider> */}
        </div>
        </>
    )
}

export default TopAlbum