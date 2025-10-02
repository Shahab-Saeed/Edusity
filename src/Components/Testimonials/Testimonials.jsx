import React, { useRef } from "react";
import "./Testimonials.css";

import nexticon from "../../assets/next-icon.png";
import backicon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <div className="testimonials">
      {/* Custom Navigation Buttons */}
      <img
        src={backicon}
        alt="back"
        className="backbtn"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      />
      <img
        src={nexticon}
        alt="next"
        className="nextbtn"
        onClick={() => swiperRef.current.swiper.slideNext()}
      />

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2} // Desktop: 2 slides
        breakpoints={{
          0: { slidesPerView: 1 }, // ✅ Mobile → 1 slide
          768: { slidesPerView: 2 }, // ✅ Tablet/Desktop → 2 slides
        }}
      >
        <SwiperSlide>
          <div className="slide">
            <div className="userinfo">
              <img src={user1} alt="" />
              <div>
                <h3>William Jackson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="userinfo">
              <img src={user2} alt="" />
              <div>
                <h3>Sarah Johnson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Edusity provided me with opportunities that shaped my career
              path and future success. I am very grateful.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="userinfo">
              <img src={user3} alt="" />
              <div>
                <h3>Michael Smith</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              The faculty and peers have helped me grow beyond expectations.
              Truly a life-changing experience.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="userinfo">
              <img src={user4} alt="" />
              <div>
                <h3>Alice Brown</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              I found an amazing community here that values learning,
              collaboration, and personal development.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
