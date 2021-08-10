import React from 'react'
import './footer.css'

export default function footer() {
    return (
        <section className="footer__global">
            <div className="footer__global__top">
                <div className="footer__global__top__logo">
                    <a href="#">Google</a>
                </div>  
                <ul className="footer__global__top__links">
                    <li>
                        <a href="#" className="footer__global__top__links-list-item">Конфиденциальность</a>
                    </li>
                    <li>
                        <a href="#" className="footer__global__top__links-list-item">Условия использования</a>
                    </li>
                    <li>
                        <a href="#" className="footer__global__top__links-list-item">Все о Google</a>
                    </li>
                    <li>
                        <a href="#" className="footer__global__top__links-list-item">Продукты Google</a>
                    </li>
                    <li>
                        <a href="#" className="footer__global__top__links-list-item">Правила</a>
                    </li>
                </ul>
            </div>
            <ul className="footer__global__bottom">
                <li className="footer__global__bottom__links-list-item">
                    <a href="#" className="footer__link">Справка</a>
                </li>
                <li className="footer__global__bottom__links-list-item">
                    <a href="#" className="footer__link">Русский</a>
                </li>
            </ul>
        </section>
    )
}
