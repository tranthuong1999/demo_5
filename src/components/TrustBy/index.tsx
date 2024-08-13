import React from 'react';
import "./style.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import classNames from "classnames";


const data = [
    "https://demo5.cybersoft.edu.vn/img/crs1.png",
    "https://demo5.cybersoft.edu.vn/img/crs2.png",
    "https://demo5.cybersoft.edu.vn/img/crs3.png",
    "https://demo5.cybersoft.edu.vn/img/crs4.png",
    "https://demo5.cybersoft.edu.vn/img/crs5.png",
    "https://demo5.cybersoft.edu.vn/img/crs6.png",
    "https://demo5.cybersoft.edu.vn/img/crs7.png",
    "https://demo5.cybersoft.edu.vn/img/crs8.png",
    "https://demo5.cybersoft.edu.vn/img/crs9.png",
    "https://demo5.cybersoft.edu.vn/img/crs10.png",
]

const TrustByPage = () => {

    const theme = useTheme();
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 1024));
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isComputer = useMediaQuery(theme.breakpoints.up(1024));

    const renderItemImage = (data: string[], start: number, end: number) => {
        return (
            <SwiperSlide>
                <div className='list-image'>
                    {
                        data.slice(start, end).map((item, index) => {
                            return (
                                <div className='item-image' key={index}>
                                    <img src={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </SwiperSlide>
        )
    }

    return (
        <div className='body-fiver'>
            <div className='trust-by-page'>
                <div className='list-item-trust-by'>
                    <div className='item-trust-by'>
                        <p> Trusted by:</p>
                    </div>
                    <div className='item-trust-by'>
                        <img src="https://demo5.cybersoft.edu.vn/img/fb.png" />
                    </div>
                    <div className='item-trust-by'>
                        <img src="https://demo5.cybersoft.edu.vn/img/google.png" />
                    </div>
                    <div className='item-trust-by'>
                        <img src="https://demo5.cybersoft.edu.vn/img/netflix.png" />
                    </div>
                    <div className='item-trust-by'>
                        <img src="https://demo5.cybersoft.edu.vn/img/pg.png" />
                    </div>
                    <div className='item-trust-by'>
                        <img src="https://demo5.cybersoft.edu.vn/img/paypal.png" />
                    </div>
                </div>
            </div>
            <div className={classNames("block-2", isComputer ? "block-2-computer" : "")}>
                <h2 className='title'> Popular professional services</h2>
                <Swiper
                    navigation={true}
                    className="my-swiper"
                    loop={true}
                    slidesPerView={1}
                    centeredSlides={true}
                    modules={[Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        isComputer &&
                        <div>
                            {renderItemImage(data, 0, 6)}
                            {renderItemImage(data, 5, 11)}
                        </div>
                    }
                    {
                        isMobile &&
                        <div>
                            {renderItemImage(data, 0, 1)}
                            {renderItemImage(data, 2, 3)}
                            {renderItemImage(data, 3, 4)}
                            {renderItemImage(data, 4, 5)}
                            {renderItemImage(data, 5, 6)}
                            {renderItemImage(data, 6, 7)}
                            {renderItemImage(data, 8, 9)}
                            {renderItemImage(data, 9, 10)}
                        </div>
                    }
                    {
                        isTabnet &&
                        <div>
                            {renderItemImage(data, 0, 2)}
                            {renderItemImage(data, 2, 4)}
                            {renderItemImage(data, 4, 6)}
                            {renderItemImage(data, 6, 8)}
                            {renderItemImage(data, 8, 10)}

                        </div>
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default TrustByPage