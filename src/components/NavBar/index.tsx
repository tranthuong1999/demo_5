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
import { data } from './data';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerCommon from '../Drawer';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBarPage = () => {
    const [userScroll, setUserScroll] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const isTabnet = useMediaQuery(theme.breakpoints.between(800, 1024));
    const isComputer = useMediaQuery(theme.breakpoints.up(1024));
    const listWorkCategory: any = useSelector((state: any) => state.listWorkCategory);
    const dispatch = useDispatch();
    const [anchoAddress, setAnchoAddress] = useState<null | any>()
    const [currentItem, setCurrentItem] = useState<string | any>('');
    const [openDrawer, setOpenDrawer] = useState(false);
    const location = useLocation();
    const current_url = location.pathname;
    const navigate = useNavigate();


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
            <div>
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

    const renderContenDrawer = () => {
        return (
            <div className='list-button-navbar'>
                <div className="block-1">
                    <div className='btn-sign-in'>
                        <button> Sign in</button>
                        <p onClick={() => setOpenDrawer(false)}><CloseIcon /></p>
                    </div>
                    <div className='btn-button btn-button-active'>
                        <button>Fiverr Pro</button>
                    </div>
                    <div className='btn-button'>
                        <button>Explore</button>
                    </div>
                    <div className='btn-button'>
                        <button>Messages</button>
                    </div>
                    <div className='btn-button'>
                        <button>Lists</button>
                    </div>
                    <div className='btn-button'>
                        <button>Orders</button>
                    </div>
                    <div className='btn-button btn-source'>
                        <button>Help & Resoources</button>
                        <ArrowDropDownIcon className='icon-arrow' />
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className={classNames('nav-bar-page', current_url !== "/" ? "nav-bar-page-second" : "")}>
            <Swiper
                className={classNames("swiper-nav-bar", current_url !== "/" ? "swiper-nav-bar-second" : "")}
                loop={true}
                slidesPerView={1}
                centeredSlides={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000,
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
            <div className={classNames('block-1', (isMobile || isTabnet) ? "block-1-small" : "", (userScroll || current_url !== "/") ? "block-1-scroll" : "")}>
                <div className={classNames('child-1', isTabnet ? "child-1-tabnet" : "", isMobile ? 'child-1-mobile' : "")}>
                    <div className='img-logo'>
                        <div>
                            <span onClick={() => setOpenDrawer(!openDrawer)}>
                                {
                                    !isComputer && <MenuIcon />
                                }
                            </span>
                            {svg_logo((userScroll || current_url !== "/") ? "black" : "#fff")}
                        </div>
                        {
                            (userScroll || current_url !== "/") &&
                            <div className='search'>
                                <input placeholder='Find Service' />
                                <button>Search</button>
                            </div>
                        }
                    </div>
                    <div className='list-button'>
                        {
                            (isComputer) &&
                            <>
                                <button className='btn-active'> Fiverr Business</button>
                                <button> Explore</button>
                                <button style={{ display: "flex", alignItems: "center", gap: "8px" }}><LanguageIcon /> English</button>
                                <button> US$ USD</button>
                                <button> Become a Seller</button>
                                <button onClick={() => navigate("/login")}> Sign in</button>
                                <button onClick={() => navigate("/register")} className='btn-join'> Join</button>
                            </>
                        }
                    </div>
                </div>
                {(userScroll || current_url !== "/") &&
                    <div className={classNames('child-2', isTabnet ? "child-2-tabnet" : "", isMobile ? 'child-2-mobile' : "")}>
                        {
                            listWorkCategory?.content?.map((item: any) => {
                                return (
                                    <div
                                        className='btn-action'
                                        onMouseEnter={(event) => handleMouseEnter(item, event)}
                                    // onMouseLeave={() => handleMouseLeave()}
                                    >
                                        {item?.tenLoaiCongViec}
                                    </div>
                                )
                            })
                        }
                    </div>}
            </div>

            {current_url == "/" && <div className={classNames("block-2", isMobile ? 'block-2-mobile' : "")}>
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
            </div>}
            {
                Boolean(anchoAddress) &&
                <BasicPopover
                    open={Boolean(anchoAddress)}
                    onClose={() => setAnchoAddress(null)}
                    anchorEl={anchoAddress}
                    content={renderContent()}
                />
            }
            {
                openDrawer &&
                < DrawerCommon
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    content={renderContenDrawer()}
                    className='drawer-menu-bar'
                />
            }
        </div>
    )
}
