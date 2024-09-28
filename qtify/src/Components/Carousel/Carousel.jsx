import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import LeftButton from "./Left Button/LeftButton.jsx";
import RightButton from "./Right Button/RightButton.jsx";

const Controls = ({ data }) => {
  const { swiper } = useSwiper();
  useEffect(() => {
    swiper?.slideTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};

function Carousel({ data, renderCardComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={7}
        spaceBetween={10}
        className={styles.slide}
        allowTouchMove
        // gap={5}
      >
        <Controls data={data} />
        <LeftButton />
        <RightButton />
        {data?.map((item) => (
          <SwiperSlide key={item?.id} >{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
