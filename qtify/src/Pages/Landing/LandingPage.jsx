import React, { useState, useEffect } from "react";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchAllSongs,
} from "../../api/api.js";
import styles from "./LandingPage.module.css";
import Navbar from "../../Components/navbar/Navbar.jsx";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";
import HeroSection from "../../Components/Hero/HeroSection.jsx";
import Section from "../../Components/Section/Section.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import CustomAccordion from "../../Components/Accordion/CustomAccordion.jsx";
import { accordionData } from "../../config/fag_data.js";
import FilterTabs from "../../Components/FilterTabs/FilterTabs.jsx";

function LandingPage() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [allSongsData, setAllSongsData] = useState([]);
  const [loadingState, setLoadingState] = useState({
    topAlbum: true,
    newAlbum: true,
    allSongs: true,
  });

  const mangaeLoadingState = (key = "", value = false) => {
    setLoadingState((prev) => ({ ...prev, [key]: value }));
  };

  const generateTopAlbumData = async () => {
    try {
      mangaeLoadingState("topAlbum", true);
      const data = await fetchTopAlbums();
      
      setTopAlbumData(data);
      console.log(topAlbumData)
      mangaeLoadingState("topAlbum", false);
    } catch (err) {
      mangaeLoadingState("topAlbum", false);
      console.log(err);
    }
  };
  const generateNewAlbumData = async () => {
    try {
      mangaeLoadingState("newAlbum", true);
      const data = await fetchNewAlbums();
      // console.log(data);
      setNewAlbumData(data);
      mangaeLoadingState("newAlbum", false);
    } catch (err) {
      mangaeLoadingState("newAlbum", false);
      console.log(err);
    }
  };
  const generateAllSongsData = async () => {
    try {
      mangaeLoadingState("allSongs", true);
      const data = await fetchAllSongs();
      console.log(data);
      setAllSongsData(data);
      mangaeLoadingState("allSongs", false);
    } catch (err) {
      mangaeLoadingState("allSongs", false);
      console.log(err);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  const dropdownData = topAlbumData?.concat(newAlbumData);
  return (
    <>
      <Navbar logo={true} search={true} feedback={true} />
      <div className={styles.landingPageSearchWrapper}>
        <SearchBar
          placeholder="Search a album of your choice"
          data={dropdownData}
        />
      </div>
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section
          title="Top Albums"
          data={topAlbumData} //api call
          type="album"
          loadingState={loadingState.topAlbum}
        />
        <Section
          title="New Albums"
          data={newAlbumData}
          type="album"
          loadingState={loadingState.newAlbum}
        />
      </div>
      <hr className={styles.line}></hr>
      <div className={styles.filter_songs_wrapper}>
        <div>
          <h3 className={styles.tabsTitle}>Songs</h3>
          <FilterTabs
            data={allSongsData}
            loadingState={loadingState.allSongs}
          />
        </div>
      </div>
      <hr className={styles.line}></hr>
      <div className={styles.customAccordionWrapper}>
        <h1 className={styles.accordionHeader}>FAQS</h1>
        {accordionData?.length ? (
          accordionData.map((each, index) => {
            return <CustomAccordion key={index} data={each} />;
          })
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
