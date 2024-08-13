import React, { useEffect, useState } from 'react';
import "./style.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { svg_logo } from '../../assets/svg_logo';
import classNames from 'classnames';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch, useSelector } from 'react-redux';
import { fetCategoryWork } from '../../redux/actions';
import BasicPopover from '../Popover';
import { data, data_1 } from './data';

export const NavBarPage = () => {
    const [userScroll, setUserScroll] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(600));
    const isTabnet = useMediaQuery(theme.breakpoints.between(600, 1024));
    const listWorkCategory: any = useSelector((state: any) => state.listWorkCategory);
    const dispatch = useDispatch();
    const [anchoAddress, setAnchoAddress] = useState<null | any>()
    const [currentItem, setCurrentItem] = useState<string | any>('');


    useEffect(() => {
        dispatch(fetCategoryWork())
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY == 0) {
                setUserScroll(false);
                return;
            }
            setUserScroll(true);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleMouseEnter = (item: any, event: any) => {
        setAnchoAddress(event.currentTarget);
        setCurrentItem(item)
    };

    const handleMouseLeave = () => {
        setAnchoAddress(null)
        setCurrentItem("")
    };

    const renderContent = () => {
        return (
            <div onMouseLeave={() => handleMouseLeave()}>
                {currentItem?.dsNhomChiTietLoai.map((item: any) => {
                    return (
                        <div
                            className='list-item-popover'
                        >
                            <h3 className='group'> {item.tenNhom}</h3>
                            <div className='item-child'>
                                {item.dsChiTietLoai.map((mem: any) => {
                                    return (
                                        <div className='child'>{mem.tenChiTiet}</div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className='nav-bar-page'>
            <Swiper
                className="swiper-nav-bar"
                loop={true}
                slidesPerView={1}
                centeredSlides={true}
                // modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className={classNames('block-1', (isMobile || isTabnet) ? "block-1-small" : "", userScroll ? "block-1-scroll" : "")}>
                <div className='child-1'>
                    <div className='img-logo'>
                        <div>{svg_logo(!userScroll ? "#fff" : "black")} </div>
                        {
                            userScroll &&
                            <div className='search'>
                                <input placeholder='Find Service' />
                                <button>Search</button>
                            </div>
                        }
                    </div>
                    <div className='list-button'>
                        <button className='btn-active'> Fiverr Business</button>
                        <button> Explore</button>
                        <button style={{ display: "flex", alignItems: "center", gap: "8px" }}><LanguageIcon /> English</button>
                        <button> US$ USD</button>
                        <button> Become a Seller</button>
                        <button> Sign in</button>
                        <button className='btn-join'> Join</button>
                    </div>
                </div>
                {userScroll &&
                    <div className='child-2' onMouseLeave={() => handleMouseLeave()} >
                        {
                            listWorkCategory?.content?.map((item: any) => {
                                return (
                                    <div
                                        className='btn-action'
                                        onMouseEnter={(event) => handleMouseEnter(item, event)}
                                    >
                                        {item?.tenLoaiCongViec}
                                    </div>
                                )
                            })
                        }
                    </div>}
            </div>

            <div className='block-2'>
                <h1 className='title-header'>Find the perfect freelance services for your business</h1>
                <div className='input-search'>
                    <input type="search" placeholder='Try "Building mobile app' />
                    <div className="btn-search">
                        <button>Search</button>
                    </div>
                </div>
                <div className='list-item'>
                    <p> Popular:</p>
                    <div className='btn'> Website Design</div>
                    <div className='btn'> WordPress</div>
                    <div className='btn'> Logo Design</div>
                    <div className='btn'> Video Editing</div>
                </div>
            </div>
            {
                Boolean(anchoAddress) &&
                <BasicPopover
                    open={Boolean(anchoAddress)}
                    onClose={() => setAnchoAddress(null)}
                    anchorEl={anchoAddress}
                    content={renderContent()}
                />
            }
        </div>
    )
}
