import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'


import logo from '../../assets/images/mountain_bike_logo.svg';
import iconSearch from '../../assets/images/icon_search.svg';
import iconCart from '../../assets/images/icon_cart.svg';
import iconUser from '../../assets/images/icon_user.svg';
import iconWish from '../../assets/images/icon_wishlist.svg';
import iconClosesm from '../../assets/images/icon_close_sm.png';
import iconLoading from '../../assets/images/loading.gif';
import iconSerClose from '../../assets/images/icon_search_close.png';

import { getAllMenu, getMenuBrand, getMenuActiveAndInactiveBrand } from '../../axios/headerApi';
import { getMenu } from '../../redux/actions/headerActions';

export default function Navbar() {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState({});
    const [menuLoading, setMenuLoading] = useState(true);
    //const categoryMenu = useSelector((state) => state.allHeaderReducer.menu);
    const [categoryMenu, setCategoryMenu] = useState('');
    const [manuBrand, setManuBrand] = useState('');
    //let allActiveBrand = [];
    //let allinActiveBrand = [];
    const [allActiveBrand, setAllActiveBrand] = useState('');
    const [activeBrandFilter, setActiveBrandFilter] = useState('');
    const [allinActiveBrand, setAllinActiveBrand] = useState('');
    const [inactiveBrandFilter, setinActiveBrandFilter] = useState('');
    const [stickyClass, setStickyClass] = useState('');
    useEffect(() => {
        getAllMenu().then((res) => {
            //dispatch(getMenu(res));
            setCategoryMenu(res)
            setMenuLoading(false);
            let lvitem = {};
            let art = Object.values(res).map((items) => (lvitem[items.id] = 0))
            setIsActive(lvitem);
        });
        getMenuBrand().then((res) => { setManuBrand(res) });
        getMenuActiveAndInactiveBrand().then((res) => {
            let allActiveBrand11 = Object.values(res.active);
            setActiveBrandFilter(allActiveBrand11);
            setAllActiveBrand(allActiveBrand11);
            let allinActiveBrand = Object.values(res.inactive);
            setinActiveBrandFilter(allinActiveBrand);
            setAllinActiveBrand(allinActiveBrand);
        });
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 30 ? setStickyClass('is-sticky') : setStickyClass('');
        }
    };


    const searchProducts = [
        { 'id': 1, 'name': 'Shimano 11-fach Kettennietstifte - 3 Stück', 'image': 'https://www.mountainbike-parts.ch/cache/6/f/5/0/9/6f5095043fc9d2ffd68a1987841a50fa8fbeda92.png', 'price': '8.20', 'link': '#' },
        { 'id': 2, 'name': 'Shimano XT CN-M8100 Quicklink Kette', 'image': 'https://www.mountainbike-parts.ch/cache/e/d/2/9/8/ed298d49b50e8a4c239311483421ead68d3fd532.jpeg', 'price': '12.30', 'link': '#' },
        { 'id': 3, 'name': 'Crankbrothers Premium Cleats Pedalplatte', 'image': 'https://www.mountainbike-parts.ch/cache/f/b/0/9/2/fb0925828b86305051f3be24514c474f1682d731.jpeg', 'price': '13.00', 'link': '#' },
        { 'id': 4, 'name': 'SRAM Rival XPLR XG-1251 Kassette', 'image': 'https://www.mountainbike-parts.ch/cache/5/6/0/f/2/560f20994c7af4d951d27a4396970e3a27fa6a76.png', 'price': '450.58', 'link': '#' },
        { 'id': 5, 'name': 'Shimano N03A Resin XTR Ice-Tech Bremsbeläge', 'image': 'https://www.mountainbike-parts.ch/cache/a/1/9/d/0/a19d095ab08b04c723b52e5a5dbe5489fd067189.jpeg', 'price': '289.45', 'link': '#' },
        { 'id': 6, 'name': 'Wolf Tooth Precision Premium Steuersatz Unterteil', 'image': 'https://www.mountainbike-parts.ch/cache/9/e/2/f/1/9e2f1b027730bd90a2d42c00e916c2c3adf6e749.jpeg', 'price': '789.10', 'link': '#' },
        { 'id': 7, 'name': 'Squirt Seal BeadBlock Dichtmittel 1000ml', 'image': 'https://www.mountainbike-parts.ch/cache/a/a/1/8/7/aa1876f7c4b549eb2eff0e606345190773e75015.jpeg', 'price': '23.54', 'link': '#' },
        { 'id': 8, 'name': 'Acros IS41 Oberteil Steuersatz', 'image': 'https://www.mountainbike-parts.ch/cache/e/9/1/b/1/e91b1e4cbf5adbd91ed02c9c79c2ffd422c3064a.jpeg', 'price': '56.65', 'link': '#' },
        { 'id': 9, 'name': 'Race Face OE-Belt Gürtel', 'image': 'https://www.mountainbike-parts.ch/cache/c/6/3/6/b/c636bd31baa32c5482a8902d0242bea9c318978a.png', 'price': '99.25', 'link': '#' },
        { 'id': 10, 'name': 'Kool Stop SRAM Guide/G2 D293S Bremsbeläge', 'image': 'https://www.mountainbike-parts.ch/cache/9/9/9/d/e/999de240c451367175fd60de8667c9536f2a6bf0.jpeg', 'price': '79.25', 'link': '#' },
    ]

    function openSubCategory(lvl, subkey1) {
        setIsActive({ ...isActive, [lvl]: subkey1 });
    }

    /* Brand Filter Aria */
    const [activeBrand, setActiveBrand] = useState('');
    const activeFilter = (e) => {
        const filterTxt = e.target.value;
        if (filterTxt !== '') {
            const result = allActiveBrand.filter((brand) => {
                return brand.name.toLowerCase().startsWith(filterTxt.toLowerCase());
            });
            setActiveBrandFilter(result);
        } else {
            setActiveBrandFilter(allActiveBrand);
        }
        setActiveBrand(filterTxt);
    }

    const [isActiveBrandActive, setisActiveBrandActive] = useState(false);
    const [inactiveBrand, setinActiveBrand] = useState('');

    function inActiveBrandHandal(e) {
        setisActiveBrandActive(!isActiveBrandActive);
        if (isActiveBrandActive === false) {
            setinActiveBrand('');
            setinActiveBrandFilter(allinActiveBrand);
        }
    }

    const inactiveFilter = (e) => {
        const filterTxt = e.target.value;
        if (filterTxt !== '') {
            const result = allinActiveBrand.filter((brand) => {
                return brand.name.toLowerCase().startsWith(filterTxt.toLowerCase());
            });
            setinActiveBrandFilter(result);
        } else {
            setinActiveBrandFilter(allinActiveBrand);
        }
        setinActiveBrand(filterTxt);
    }

    /* Brand Filter Aria */

    /* website search */
    const setFocus = useRef(null);
    const [isActiveSearch, setisActiveSearch] = useState(false);
    const [isSearchText, setisSearchText] = useState(false);
    function searchHandaler() {
        setisActiveSearch(true);
        setFocus.current.focus();
    }
    const [liveSearch, setliveSearch] = useState('');
    const [liveSearchFilter, setliveSearchFilter] = useState(searchProducts);

    const webliveSearchFilter = (e) => {
        const filterTxt = e.target.value;
        if (filterTxt !== '') {
            const result = searchProducts.filter((search) => {
                return search.name.toLowerCase().startsWith(filterTxt.toLowerCase());
            });
            setliveSearchFilter(result);
            setisSearchText(true)
        } else {
            setliveSearchFilter(searchProducts);
            setisSearchText(false);
        }
        setliveSearch(filterTxt);
    }

    function checkSearchHandaler() {
        if (isSearchText === false) {
            setisActiveSearch(false)
        }
    }
    /* website search */

    /* Login Popup */
    const [isloginShow, setisloginShow] = useState('false');
    /* Login Popup */
    return (
        <div id="header-sticky-wrapper" className="sticky-wrapper" style={{ height: '80px' }}>
            <div id="header-sticky-wrapper" className={`sticky-wrapper ${stickyClass}`} style={{ height: '80px' }}>
                <header id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="navi">
                                    <nav className="navbar navbar-default">
                                        <div className="navbar-header text-center">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                                                aria-expanded="false" aria-controls="navbar">
                                                <span className="icon-bar"></span>
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="menu_nav_text">Menu</span>
                                            </button>
                                            <Link className="logo" to="/" ><img src={logo} alt="Willkommen bei mountainbike-parts.ch" title="Willkommen bei mountainbike-parts.ch" height="52" /></Link>
                                        </div>
                                        <div id="navbar" className="collapse navbar-collapse padding-null-x">
                                            <ul className="nav navbar-nav desktop_menu">
                                                {menuLoading &&
                                                    <>
                                                        <li className="megamenu main_category"><a href="/#" title='' className="sub_cat"><Skeleton width={75} height={16} /></a></li>
                                                        <li className="megamenu main_category"><a href="/#" title='' className="sub_cat"><Skeleton width={75} height={16} /></a></li>
                                                        <li className="megamenu main_category"><a href="/#" title='' className="sub_cat"><Skeleton width={75} height={16} /></a></li>
                                                        <li className="megamenu main_category"><a href="/#" title='' className="sub_cat"><Skeleton width={75} height={16} /></a></li>
                                                        <li className="megamenu main_category"><a href="/#" title='' className="sub_cat"><Skeleton width={75} height={16} /></a></li>
                                                    </>
                                                }
                                                {(categoryMenu) ?
                                                    Object.values(categoryMenu).sort((a, b) => a.sortOrder > b.sortOrder ? 1 : -1).map((items, key) => {
                                                        return (
                                                            <li key={key} className="megamenu main_category">
                                                                <Link to={"/c/" + items.seoUrl} className="sub_cat">{items.name}</Link>
                                                                {/* sub category 1 */}
                                                                {(items.child !== '') ?
                                                                    <div role="menu" className="dropdown-megamenu fullwidth menu_height">
                                                                        <div className="row">
                                                                            <div className="megamenu-widget megamenu_title col-sm-4" id={'megamenu_title__' + items.id}>
                                                                                <div className="head_menu_banner">
                                                                                    <div className="call_popular_cat_area">
                                                                                        {/* sub category 1 loop */}
                                                                                        {Object.values(items.child).sort((a, b) => a.sortOrder > b.sortOrder ? 1 : -1).map((subitems1, subkey1) => (
                                                                                            <div key={subkey1} className="call_head_menu_banner" onMouseOver={e => openSubCategory(items.id, subkey1)}>
                                                                                                <Link to={"/c/" + subitems1.seoUrl} id={'second_lvl_category__' + subitems1.id} className="pop_cate_h second_lvl_category">
                                                                                                    <div className={isActive[items.id] == subkey1 ? 'call_popular_cats child_categories activeImg active' : 'call_popular_cats child_categories'}>
                                                                                                        <img alt={subitems1.name} src={subitems1.image} style={{ height: "33px" }} />
                                                                                                        <h3>{subitems1.name}</h3>
                                                                                                    </div>
                                                                                                </Link>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="megamenu-widget megamenu_area col-sm-8" id={'megamenu_area__' + items.id}>
                                                                                <div className="row">
                                                                                    {/* sub category 2 loop */}
                                                                                    {Object.values(items.child).sort((a, b) => a.sortOrder > b.sortOrder ? 1 : -1).map((subitems1, subkey1) => (
                                                                                        <div key={subkey1} id={'child_category__' + subitems1.id} className="second_level_cat_area" style={{ display: isActive[items.id] == subkey1 ? "block" : "none" }}>
                                                                                            {(subitems1.child !== '') ?
                                                                                                <>
                                                                                                    <div className="third_level_category">
                                                                                                        {Object.values(subitems1.child).sort((a, b) => a.sortOrder > b.sortOrder ? 1 : -1).map((subitems2, subkey2) => (
                                                                                                            <div key={subkey2} className="col-sm-4">
                                                                                                                <div className="top_nav_float">
                                                                                                                    <ul className="navlinks">
                                                                                                                        {(subitems2.child == '') ?
                                                                                                                            <Link to={"/c/" + subitems2.seoUrl}><h4>{subitems2.name}</h4></Link>
                                                                                                                            :
                                                                                                                            <>
                                                                                                                                <h4 className="fourth_level_cat">{subitems2.name}</h4>
                                                                                                                                {/* sub category 3 loop */}
                                                                                                                                {Object.values(subitems2.child).sort((a, b) => a.sortOrder > b.sortOrder ? 1 : -1).map((subitems3, subkey3) => (
                                                                                                                                    <li key={subkey3}><Link to={"/c/" + subitems3.seoUrl}><h4>{subitems3.name}</h4></Link></li>
                                                                                                                                ))}
                                                                                                                            </>
                                                                                                                        }
                                                                                                                    </ul>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        ))}
                                                                                                    </div>
                                                                                                    <div className="clearfix"></div>
                                                                                                    {/* Menu Brand Logos at end of menu */}
                                                                                                    <div className="menu_brand_logo">
                                                                                                        {/* menu brand logo loop */}
                                                                                                        {(manuBrand !== '') ?
                                                                                                            manuBrand.map((items, key) => (
                                                                                                                <div key={key} className="col-sm-2">
                                                                                                                    <div className="menu_brand_logo_img">
                                                                                                                        <Link to={"/b/" + items.seoUrl} title={items.name}>
                                                                                                                            <img src={items.image} alt={items.name} title={items.name} />
                                                                                                                        </Link>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            )) : null}
                                                                                                    </div>
                                                                                                </>
                                                                                                : null}
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    : null
                                                                }
                                                            </li>
                                                        );
                                                    }) : null
                                                }
                                            </ul>
                                            <ul className="nav navbar-nav new_menu">
                                                <li className="megamenu">
                                                    <button data-toggle="dropdown" className="btn btn-link dropdown-toggle brands">Marken</button>
                                                    {/* <a href="/#" data-toggle="dropdown" className="dropdown-toggle brands">
                                                        Marken
                                                    </a> */}
                                                    <div role="menu" className="dropdown-megamenu fullwidth">
                                                        <div className="row">
                                                            <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', height: '325px' }}>
                                                                <div className="megamenu-widget col-sm-12 manufacturer_tab_menu" style={{ overflow: 'auto', height: '325px' }}>
                                                                    <h4 className="col-lg-3 width20per ma-b-30px" style={{ paddingLeft: '0px' }}>Unsere Top Brands</h4>
                                                                    <div id="search_text_div" className="input-group width20per">
                                                                        <input type="text" className="form-control search_brand_text" placeholder="Marke suchen" value={activeBrand} onChange={activeFilter} autoFocus="" />
                                                                        <span className="input-group-addon search_this_brand">
                                                                            <span className="fa fa-search"></span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="clearfix"></div>
                                                                    <ul className="navlinks fivecol" id="load_all_manufacturers">
                                                                        {(activeBrandFilter !== '') ?
                                                                            activeBrandFilter.map((items, key) => (
                                                                                <li key={key}><Link to={"/b/" + items.seoUrl} title={items.name}>{items.name}</Link></li>
                                                                            )) : null}
                                                                    </ul>
                                                                    <div className="clearfix"></div>
                                                                    <label className="show_all_inactive_brands ma-x-30px col-lg-3 width20per cursor-pointer" onClick={inActiveBrandHandal} style={{ color: '#000', fontWeight: 'bold', paddingLeft: '0px', paddingRight: '0px'}}><i className={(isActiveBrandActive) ? 'fa fa-minus' : 'fa fa-plus'}></i> weitere Marken</label>
                                                                    <div id="search_inactive_text_div" className="input-group all_inactive_brands_div ma-x-20px width20per" style={{ display: (isActiveBrandActive) ? "" : "none" }}>
                                                                        <input type="text" className="col-lg-10 form-control search_inactive_brand_text" placeholder="Marke suchen" value={inactiveBrand} onChange={inactiveFilter} />
                                                                        <span className="input-group-addon search_inactive_this_brand"><span className="fa fa-search"></span></span>
                                                                    </div>
                                                                    <div className="clearfix"></div>
                                                                    <div className="all_inactive_brands_div" style={{ display: (isActiveBrandActive) ? "block" : "none" }}>
                                                                        <ul className="navlinks fivecol" id="load_all_inactive_manufacturers">
                                                                            {(inactiveBrandFilter !== '') ?
                                                                                inactiveBrandFilter.map((items, key) => (
                                                                                    <li key={key}><Link to={"/b/" + items.seoUrl} title={items.name}>{items.name}</Link></li>
                                                                                )) : null}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                            <div className="menu_brand_logo">
                                                                <div className="col-sm-12">
                                                                    {(manuBrand !== '') ?
                                                                        manuBrand.map((items, key) => (
                                                                            <div key={key} className="col-sm-2">
                                                                                <div className="menu_brand_logo_img">
                                                                                    <Link to={"/b/" + items.seoUrl} title={items.name}>
                                                                                        <img src={items.image} alt={items.name} title={items.name} />
                                                                                    </Link>
                                                                                </div>
                                                                            </div>
                                                                        )) : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <ul className="nav navbar-nav mob_navi head_icons_main">
                                        <li className="search">
                                            <label className="show_head_search dropdown-toggle pad_rightset cursor-pointer" data-toggle="dropdown" onClick={searchHandaler} role="button" aria-expanded="false" title="Search"><img src={iconSearch} alt="search" height="23" /></label>
                                            {/* <a href="/#" className="show_head_search dropdown-toggle pad_rightset" data-toggle="dropdown" onClick={searchHandaler} role="button" aria-expanded="false" title="Search"><img src={iconSearch} alt="search" height="23" /></a> */}
                                            <div className="head_inp_search hide_head_search" style={{ display: (isActiveSearch) ? '' : "none" }}>
                                                <div className="form-group has-success has-feedback">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                                                        <input type="text" name="advanceSearch" id="search" autoComplete="off" className="form-control" ref={setFocus} placeholder="Suchbegriffe eingeben" value={liveSearch} onChange={webliveSearchFilter} onBlur={checkSearchHandaler} />
                                                    </div>
                                                    <a href="/#" className="clear_search" onClick={() => { setisActiveSearch(false); setliveSearch(''); setisSearchText(false); }}>
                                                        <img src={iconSerClose} alt="Close" title="Close" className="form-control-feedback" />
                                                    </a>
                                                    <a href="/#" id="search_loading" style={{ display: "none" }}>
                                                        <img src={iconLoading} alt="Laden..." title="Close" className="form-control-feedback" />
                                                    </a>
                                                </div>
                                                <div className="live_search_main_box" style={{ display: (isSearchText) ? '' : "none" }}>
                                                    <div className="live_search_heading">
                                                        <h3>Suchergebnisse</h3>
                                                    </div>
                                                    <div className="live_search_cont_inline_main_area">
                                                        <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '295px' }}>
                                                            <div id="searchProductList" style={{ overflow: 'hidden', width: 'auto', height: '295px' }}>
                                                                {liveSearchFilter.map((items, key) => (
                                                                    <a key={key} href={items.link} title={items.name} className="live_sr_hover">
                                                                        <div className="live_search_cont_inline">
                                                                            <h4>
                                                                                <img src={items.image} alt={items.name} title={items.name} />
                                                                                <span>{items.name}</span>
                                                                                <span className="call_new_product_box_title">
                                                                                    <span className="price_txt right">
                                                                                        <small className="main-price"><sup>CHF</sup></small>{items.price}
                                                                                        <input type="hidden" value={items.price} id={'getSearchProdPrice__' + items.id} />
                                                                                    </span>
                                                                                </span>
                                                                            </h4>
                                                                        </div>
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown hide_desktop_menu login_register open_drp ">
                                            <label onClick={() => { setisloginShow(true) }} className="dropdown-toggle pad_rightset modal_login cursor-pointer" title="Deine Adresse">
                                                <img src={iconUser} alt="Deine Adresse" height="23" />
                                            </label>
                                        </li>
                                        <li className="dropdown hide_desktop_menu login_register">
                                            <label onClick={() => { setisloginShow(true) }} data-toggle="headerLoginRegisterModal" className="dropdown-toggle pad_rightset modal_login cursor-pointer" title="Wunschliste">
                                                <img src={iconWish} alt="Wunschliste" height="23" />
                                            </label>
                                        </li>
                                        <li className="dropdown open_drp">
                                            <label id="cart_dropdown" className="dropdown-toggle pad_rightset cursor-pointer" data-toggle="dropdown" role="button" aria-expanded="false" title="Warenkorb">
                                                <img src={iconCart} alt="Warenkorb" />
                                            </label>
                                            <span id="total_cart_products" className="cart_count_round orange" style={{ display: "none" }}></span>
                                            <ul className="dropdown-menu dropdown-cart" role="menu">
                                                <div className="drp_cart_heading">
                                                    <h4>
                                                        0 Artikel im Warenkorb
                                                        <a href="/#" id="close_cart_popup"><img src={iconClosesm} alt="close" /></a>
                                                    </h4>
                                                </div>
                                                <li>
                                                    <span className="item">Warenkorb ist leer. </span>
                                                </li>
                                                <li>
                                                    <span className="item"><div className="drp_btn"><div className=""><a href="/#" className="btn btn-success btn-block">Warenkorb</a></div></div></span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            {/* {isloginShow === true ? <LoginPopup isloginShow={isloginShow} hidePopup={() => setisloginShow(false)} /> : ''} */}
        </div>
    )
}
