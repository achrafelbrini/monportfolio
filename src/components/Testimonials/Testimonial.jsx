import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/ayoub.jpg";
import profilePic2 from "../../img/zouhir.jpg";
import profilePic3 from "../../img/imane.jpg";
import profilePic4 from "../../img/hakim.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "perfect work with perfect design",
    },
    {
      img: profilePic2,
      review:
        "wonderful conception of websites",
    },
    {
      img: profilePic3,
      review:
        "great job ",
    },
    {
      img: profilePic4,
      review:
        "vraiment tu es expert",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
