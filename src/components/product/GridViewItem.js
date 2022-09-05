import React from 'react'

export const GridViewItem = (props) => {
    const data = props.data;
    return (
        <div className="call_new_product_box2">
            <div className="call_new_product_box_brand_img flex-start-justy">
                <a href={data.seoUrl}><img src={data.brandImage} alt={data.brandName} title={data.brandName} /></a>
                <span class="ind_color_green"><i class="bi bi-check-circle-fill"></i></span>
            </div>
            <div className="call_new_product_box_img switch_pro_img">
                <a href={data.seoUrl}><img src={data.itemImage} alt={data.itemsName} title={data.itemsName} /></a>
            </div>
            <div className="call_new_product_box_title">
                <a href={data.seoUrl}><h2>{data.brandName}</h2></a>
                <div className="pro_show_cont">
                    <a href={data.seoUrl}><h4 className="min29">{data.itemsName}</h4></a>
                </div>
                <div className="rating_star min23">
                </div>
                <div className="hr"></div>
                <div className="price_txt new_prod_page">
                    <small className="price_ab"> </small><small><sup>CHF</sup></small>{data.price}
                </div>
                <div className="hover-block">
                    <div className="row paddfix5">
                        <div className="col-sm-12 paddfix5 available_data">
                            <select id="" className="hidden">
                                <option defaultValue="918810">918810</option>
                            </select>
                            <div className="stock_ind"><span className="green"><i className="fa fa-truck"></i><span className="stock_ind_text">{data.stockIndicator}</span></span></div>
                            <div className="stock_count"><span className="stock_ext_style stock_text green"><i className="icomoon icon-stock-box" style={{ marginRight: '6px', fontSize: '13px' }}></i> nur 1 Stück an Lager</span></div>
                        </div>
                        <div className="col-sm-12 paddfix5"></div>
                        <div className="clearfix"></div>
                        <div className="col-sm-4 paddfix5">
                            <div className="product_box_qty product_box_qty_mg">
                                <div data-trigger="spinner" className="input-group spinner">
                                    <input type="text" data-rule="quantity" defaultValue="1" className="form-control" id="" />
                                    <a data-spin="up" className="spin-up comman" href="/#"><i className="fa fa-plus"></i></a>
                                    <a data-spin="down" className="spin-down comman" href="/#"><i className="fa fa-minus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 paddfix5 simple_addtocart_box">
                            <button className="btn btn-success btn-block add_cart"> Warenkorb</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="label_red" style={{ borderColor: '#54d376' }}><span>Neu</span></div>
        </div>
    )
}
