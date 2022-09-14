import React,{memo} from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer-top-bg"></div>
            <div className="footer_main">
                <footer id="footer">
                    <div className="footer_cont">
                        <div className="footer_bg">
                            <img src="https://www.mountainbike-parts.ch/images/footer-bg-1.png" alt="1" className="footer-background-image-top f-bg-img" />
                            <img src="https://www.mountainbike-parts.ch/images/footer-bg-2.png" alt="2" className="footer-background-image-bottom f-bg-img" />
                            <div className="footer_content_area">
                                <div className="container">
                                    <div className="">
                                        <div className="">
                                            <div className="footer_content_left">
                                                <div className="row gutter_10">
                                                    <div className="col-xs-5 col-sm-9">
                                                        <div className="row sm-col-reverse">
                                                            <div className="col-md-7">
                                                                <div className="footer_links_col">
                                                                    <div className="display-mobile-none">
                                                                        <h3 className="footer-title w-80">Kundendienst</h3>
                                                                        <ul className="three_cols clearfix" style={{ width: '50%', float: 'left' }}>
                                                                            <li><a href="/#" title="Kostenfreie Rückgabe &amp; Stornierung">Kostenfreie Rückgabe &amp; Stornierung</a></li>
                                                                            <li><a href="/#" title="Garantie">Garantie</a></li>
                                                                            <li><a href="/#" title="Versand &amp; Lieferkosten">Versand &amp; Lieferkosten</a></li>
                                                                            <li><a href="/#" title="Zahlungsarten">Zahlungsarten</a></li>
                                                                        </ul>
                                                                        <ul className="three_cols clearfix" style={{ width: '50%', float: 'left' }}>
                                                                            <li><a href="/#" title="Kunden-Feedback">Kunden-Feedback</a></li>
                                                                            <li><a href="/#" title="Hilfe &amp; FAQ">Hilfe &amp; FAQ</a></li>
                                                                            <li><a href="/#" title="Unsere AGB">Unsere AGB</a></li>
                                                                            <li><a href="/#" title="Impressum">Impressum</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <ul className="three_cols clearfix display-mobile-block">
                                                                        <li><a href="/#" title="Hilfe &amp; Kontakt"><span className="icon-question"> ?</span> Hilfe &amp; Kontakt</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="">
                                                                    <address>
                                                                        <h3 className="footer-title owner-title w-80">velotec.ch GmbH</h3>
                                                                        <span>Obermattweg 12</span>
                                                                        <span>6052 Hergiswil am See</span>
                                                                        <span>Schweiz</span>
                                                                    </address>
                                                                </div>
                                                                <div className="contact-link">
                                                                    <Link to="/contact-us" >Kontaktaufnahme</Link>
                                                                    <a href="/#" title="Kontaktaufnahme">Kontaktaufnahme</a>
                                                                </div>
                                                                <div className="rating-badge"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-7 col-sm-3">
                                                        <div className="">
                                                            <div className="footer-col-end">
                                                                <h3 className="footer-title">Zahlung</h3>
                                                                <div className="call_footer_payment_img">
                                                                    <a href="/#" data-alt="twint" data-toggle="ajaxFooterPaymentModal">
                                                                        <span className="icon icon-twint twint" title="TWINT"></span>
                                                                    </a>
                                                                    <a href="/#" data-alt="rechnung" data-toggle="ajaxFooterPaymentModal">
                                                                        <span className="icon icon-mono rechnung" title="Rechnung"></span>
                                                                    </a>
                                                                    <a href="/#" data-alt="creditcard" data-toggle="ajaxFooterPaymentModal">
                                                                        <span className="icon icon-mono visa" title="VISA"></span>
                                                                    </a>
                                                                    <a href="/#" data-alt="creditcard" data-toggle="ajaxFooterPaymentModal">
                                                                        <span className="icon icon-mono mastercard" title="MasterCard"></span>
                                                                    </a>
                                                                    <a href="/#" data-alt="paypal" data-toggle="ajaxFooterPaymentModal">
                                                                        <span className="icon icon-mono paypal" title="PayPal"></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="call_footer_payment_img">
                                                                <h3 className="footer-title">Lieferung</h3>
                                                                <a href="/#" rel="/page/lieferung.html" data-toggle="ajaxPrivacyModal">
                                                                    <span className="icon icon-mono swisspost" title="Swiss Post"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="copyright_text">© 2011 - 2022 mountainbike-parts.ch. Alle Rechte vorbehalten.</div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default memo(Footer)