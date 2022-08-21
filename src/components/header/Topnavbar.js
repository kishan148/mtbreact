import React from 'react'
import iconFlgSwiz from '../../assets/images/Flag_of_Switzerland.png';

export default function () {
  return (
    <>
      <div className="top top-green-nav desktop-greenbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="gray_info_step1">
                <a data-toggle="ajaxPrivacyModal" className="privacymodal" href="/#" rel="/page/r%C3%BCcksendungen.html" title="Kostenloser Rückversand"><i className="fa fa-refresh" style={{ fontWeight: 400 }}></i>Kostenloser Rückversand</a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="gray_info_step1 txt_center">
                <a data-toggle="ajaxPrivacyModal" className="privacymodal" href="/#" rel="/page/lieferung.html" title="Portofrei ab 100.-"><i className="fa fa-truck"></i>Portofrei ab 100.-</a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="gray_info_step1 txt_right">
                <a data-toggle="ajaxPrivacyModal" className="privacymodal" href="/#" rel="/page/lieferung.html" title="Versand bis"><i className="fa fa-arrow-circle-o-rightt" style={{ fontSize: 15 }}></i>Versand bis 18:00</a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="gray_info_step1 text-right">
                <a data-toggle="ajaxPrivacyModal" className="privacymodal" href="/#" rel="/page/lieferung.html" title="Schweizer Shop"><img src={iconFlgSwiz} alt="Schweizer Shop" width="16" />Schweizer Shop</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-slider-greenbar top-green-nav">
        <div className="mobile-green-slider">
          <div className="gray_info_step1">
            <a data-toggle="ajaxPrivacyModal" className="privacymodal" href="/#" rel="/page/zahlungsarten.html" title="Versand bis"><i className="fa fa-envelope"></i>Versand bis</a>
          </div>
          <div className="gray_info_step1">
            <a data-toggle="ajaxPrivacyModal" className="privacymodal" href="/#" rel="/page/r%C3%BCcksendungen.html" title="kostenloser Rückversand"><i className="fa fa-refresh" style={{ fontWeight: 400 }}></i>kostenloser Rückversand</a>
          </div>
          <div className="gray_info_step1">
            <a data-toggle="ajaxPrivacyModal" className="privacymodal" href="/#" rel="/page/lieferung.html" title="Portofrei ab 100.-"><i className="fa fa-truck"></i>Portofrei ab 100.-</a>
          </div>
          <div className="gray_info_step1 text-right">
            <a data-toggle="ajaxPrivacyModal" className="privacymodal" href="/#" rel="/page/lieferung.html" title="Schweizer Shop"><img src={iconFlgSwiz} alt="Schweizer Shop" width="16" />Schweizer Shop</a>
          </div>
        </div>
      </div>
    </>
  )
}
