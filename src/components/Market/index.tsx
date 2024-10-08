import React, { useState } from 'react';
import "./style.scss";
import classNames from 'classnames';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ResponsiveModal from '../Modal';
import { data } from './data';
import { svg_1 } from '../../assets/svg_1';
import { svg_2 } from '../../assets/svg_2';
import { svg_5 } from '../../assets/svg_5';
import { svg_6 } from '../../assets/svg_6';
import { svg_7 } from '../../assets/svg_7';
import { svg_8 } from '../../assets/svg_8';
import { svg_9 } from '../../assets/svg_9';
import { svg_3 } from '../../assets/svg_3';
import { svg_4 } from '../../assets/svg_4';


const MarketPage = () => {
    const theme = useTheme();
    const isComputer = useMediaQuery(theme.breakpoints.up(800));
    const isTabnet = useMediaQuery(theme.breakpoints.down(800));
    const [video, setVideo] = useState("");

    const renderContentVideo = () => {
        return (
            <div className='video-intro'>
                <video
                    autoPlay
                    loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        )
    }

    return (
        <div className={classNames("market-page", isTabnet ? "market-page-tabnet" : "")}>
            <div className='block-1'>
                <Swiper
                    navigation={true}
                    className="swiper-market"
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
                        data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={classNames("item-image", isTabnet ? "item-image-tabnet" : "")}>
                                        <div className='img-logo' onClick={() => setVideo(item.video)}>
                                            <img src={item.image} />
                                        </div>
                                        <div className={classNames('icon-play-video', isTabnet ? "icon-play-video-tabnet" : "")} onClick={() => setVideo(item.video)}>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABvFBMVEUAAABPT08AAAAAAABFRUX////+/v5RUVFLS0s/Pz9NTU3///8KCgpKSkr5+fn+/v7////////////////////////8/Pz///////9paWlXV1eWlpYQEBD7+/v///+6uroqKirX19eVlZWIiIhQUFAfHx/////19fX39/f////////////////////////n5+fZ2dnj4+O4uLiNjY09PT3///////////////////////////+zs7P///8VFRX///9HR0cxMTH////////////p6en////n5+fb29vq6urU1NTAwMCnp6d5eXlxcXFzc3NeXl5qamoeHh5BQUE4ODj////8/Pzt7e3a2trQ0ND///////+9vb3Pz8/GxsacnJyYmJiUlJSmpqZ2dnb////////////+/v7x8fH09PT///+5ubnU1NSsrKyhoaGJiYmcnJxaWlqRkZE4ODj////x8fHn5+f////////U1NTIyMj///+/v7+1tbWJiYn///+fn5////9BQUEyMjJgYGD////////s7Ozc3NzJycna2tq/v7+GhoZCQkIWFhb///////////////////8kNpXEAAAAk3RSTlNrawBnaPz6a2pmagZraPP8KRY59PIM9M+ti22La/PMnWu3hoCAawLx6+aomoZZGsrJxq+dawT2xLaxo5yciW5ra2toXAre1tXOzcajl5SQi4V0c2trTfbc1MXBvrSvpqShm4x5ZE9A7Onj1Lewq6aaj4aDeDjezsm9sqygoJ+cl5J/enZvQyLj1MC7tIt7Z04kIw15AUOJAAAFPElEQVRYw6XZd3/SQBgH8NBcEgKEQJiitIW2tBXpslRrl917L23VWq177733Hr837KnVEAOXEJ//+X6eu+dy44GrYIY3GMj1xGONYUEIN8biPblA0Mv+BcfStK0H5wUYQjj/YEvzOgG9gT2VYQokbzWnjnVPPX061X0s1XwrKQDhyj0Bb5ng0HI8BPhHj56YT0gehRBZJkTxSIn5E0dH/UAovjxUBpjPrQHi+KMaRSYelyE8RCY1j8ZFYC2XtwtqnQL8remErhnCTeREutUPoVOzBTZlQ1hJ1RC3WdPzdJOa1ApC2SZrULsDtTmtEJdFECXdrOKOZgFmts6goUrRx8rIkihVDTizlWGBkSfA6nXZZTPk66vAk0hpMLgb6r2XxGU7yMt7KnYHS4Gv15GcVNyuMsKtTCax/ro4GLyLaJVp9ixnsiqKu8FiYGQ3og8V6pUpKg+j2B0pAmZpfgyPIdIcs2awD+okcbschJtMquj7FzwdxkVWPdiVuYjwaSPYFENrgnoOxUQrYk2FYKYLDSeJy3GQkw3oyhSAN0WxSveciFWiqOmgdz+a9fE6G3Uz9nv/gjkhmib/B5J0VMj9ASP7kCKe/+EkyaWksC+yDS6r/hriHKPjXVzq/zxXry7/BjNxtBKnmbkPtlfX7fJxHMcfRjzzCwyExLTbmdbeX7eL2w5+TgwFfoF7MJ7wMD8td7GBupcoVhi+Mez5CQ5VoltmeAdPXjdVjOZWTTVj8HtROUTBmyF2SeSrZ+4niGGoi7pWCNbWh25ScACjiocF7gRu18j6WBerfbpiEA9hoILzHsBR2cUERdCT0PV7IunMUa4E2IYDXi54XjhBLEGI7+dlml17ndnRwVl1JMgFhOi8xxoEVneSRZodKxb8QoA7hXMJlx0Qyfu9PMeOVeS4ZxiX7IHAWK2F2IIeLo6Uxy6Ihg2ORfJH0MnFcEyxDUJ9d4NngJcR4xrRTeyDwPAMXxp8jEYujKmyQKx8WCgJTiPMAVdllifJHwUY4xJfCpwBrEDp4K4dRtC/0csxQKsht+/ijeDoDp5jDpldlCUfZwBXLtHFzSwKe9n0+zgD+GaaZ67DDcQYC1ty0X2qEBQmTIvQvLBZn141xxWCDZs+6ll+evrmYPYM4Fv6IVvFMAYN25fJ08GoXg2L7Ss4QjfYEp4ODs/q1WBvsCWOAKnfp4O0Gi8MHPMI+HlImQ/edh+ng+eumKrBOKQqNPMxKi0WbvUvPrE44zGq6Qe98fu1A5Q66OlV5LbxKuKuc8DpV5GKQIfxsiRVO/L4a2JH4BeYN17npCWfM5Be5/LFLpysCWSXRP1ScCXWrzd1nDPwAr0SF7m0S/0OvbmkMGh6VrBXDBts0Z8VNLTth4/zAW+KolbkaSa1O/RunEVX3vx4lNwOB+ybQKypyPPW47QibQifLvYAlx0u6Q3R/ACvyGSRnOKdbQpJZDNFmxj+47wD77i/eBOjIrgO/16+/Pz8WA8WbwR9W2PkyMhv7SujVSW2+fgyOF+byGhV0XnMAhPPedve8wkg+53V7sv3hXF2k+dtcfzmWYT78hYNyVeVUFvmKGnJzbWoqHxlo2Xa1YHkhVpKMrnaC0l0dDXZa+ruF1B/+FovNUtovdcO10PYr9ltO3sH9wHi2N5a3mzyNLm9YyKwb9BbRmM8cireAdQfaptd8FFkO+i2sjDbdqge6Iifijho3YcA1T/ccuTylemZmekrl4+0DPtVIFRm6143tYEDI/gnRg4MMP9csP77Y7CnM9YYAkKNsc6eQcu/P34ANod6sZ/pavoAAAAASUVORK5CYII=" />

                                        </div>
                                        <div className='desc-detail'>
                                            <div className='author'>
                                                <p> {item.author} </p>
                                                <img src={item.image_1} />
                                            </div>
                                            <p className='desc'> {item.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div >

            <div className='block-2'>
                <h2 className='header'>Explore the marketplace</h2>
                <div className="list-icon">
                    {
                        [svg_1, svg_2, svg_3, svg_4, svg_5, svg_6, svg_7, svg_8, svg_9].map((item, index) => {
                            return (
                                <div className='item-icon' key={index}>
                                    <div className='icon-svg'>
                                        {item()}
                                    </div>
                                    <p className='desc'>Graphics & DesignGraphics</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {
                video &&
                <ResponsiveModal
                    open={Boolean(video)}
                    handleClose={() => setVideo("")}
                    content={renderContentVideo()}
                    className='modal-show-video-introduce'
                    width={1200}
                />
            }

        </div >
    )
}

export default MarketPage