import React from 'react'
import Header from '../components/Header'
import './main.css'
import gmailDevices from '../img/gmail-devices.png'
import googlePlay from '../img/google-play.png'
import appStore from '../img/app-store.png'
import { Button } from 'react-bootstrap'
import allDevices from '../img/all-devices.png'
import example1 from '../img/example-1.png'
import example2 from '../img/example-2.png'
import example3 from '../img/example-3.png'
import reclame1 from '../img/reclame-1.png'
import logoImg from '../img/logoImg.png'
import Footer from '../components/Footer'

export default function Main() {
    return (
        <div className="main__page">
            <Header/>
            <div className="first__page">
                <div className="text__block">
                    <div className="text__block__title">
                        <h1>Успевайте больше с <br/> почтой Gmail</h1>
                    </div>
                    <div className="text__block__paragraph">
                        <p>Демонстрация экрана, автоматические субтитры, до 100 
                        участников одновременно – всё это доступно в видеовстречах Google Meet прямо из окна Gmail.</p>
                    </div>
                    <div className="text__block__button">
                        <Button size="lg">Создать аккаунт</Button>
                    </div>
                </div>
                <div className="img__block">
                    <img src={gmailDevices} width="909" height="500"/>
                </div>
            </div>
            <div className="second__page">
                <div className="second__page__title">
                    <h2>Gmail на всех ваших устройствах</h2>
                </div>
                <div className="second__page__devices">
                    <p>Скачайте приложение Gmail и пользуйтесь почтой на любом устройстве.</p>
                </div>
                <div className="second__page__images">
                    <img src={googlePlay} width="160" height="50"/>
                    <img src={appStore} width="160" height="50"/>
                </div>
                <img src={allDevices} width="100%"/>
            </div>
            <div className="second__page__organize h-c-grid">
                <div className="h-c-grid__col h-c-grid__col--6 h-c-grid__col--align-middle content--organize ">
                    <div className="copy-content">
                        <div className="content__headline">
                            <h2>Порядок в делах</h2>
                        </div>
                        <div className="content__text">
                            <p>Быстро проверяйте письма благодаря группировке по категориям.</p>
                        </div>
                    </div>
                    <div className="section__image">
                        <picture>
                            <img src={example1} width="100%"/>
                        </picture>
                    </div>
                </div>
                <div className="h-c-grid__col h-c-grid__col--6 h-c-grid__col--align-middle content--organize content--organize-last">
                    <div className="copy-content">
                        <div className="content__headline">
                            <h2>Все под контролем</h2>
                        </div>
                        <div className="content__text">
                            <p>
                                Получайте напоминания о письмах, на которые нужно ответить. Так вы ничего не упустите из виду.
                            </p>
                        </div>
                    </div>
                    <div className="section__image">
                        <picture>
                            <img src={example2} width="100%"/>
                        </picture>
                    </div>
                </div>
            </div>
            <div className="third__page">
                <section className="section__action">
                    <div className="h-c-grid">
                        <div className="section__action__content">
                            <div className="section__action__content__headline">
                                <h2>Кнопки действий в вашей почте</h2>
                            </div>
                            <p>Теперь вы можете посмотреть прикрепленные файлы, ответить на приглашение и выполнить многие другие действия, даже не открывая письма.</p>
                        </div>
                        <div className="section__action__image">
                            <img src={example3} width="100%"/>
                        </div>
                    </div>
                </section>
            </div>
            <div className="fourth__page">
                <section className="section__secure">
                    <img src={reclame1} width="100%"/>
                </section>
                <section className="section__started">
                    <div className="section__started__headline">
                        <h2>
                            Распознавание подозрительных писем
                        </h2>
                    </div>
                    <div className="section__started__content">
                        Gmail блокирует 99,9 % опасных писем прежде, чем вы откроете их.
                        Если наши системы определят письмо как фишинговое, вы получите предупреждение об этом.
                    </div>
                </section>
            </div>
            <div className="fifth__page">
                <div className="fifth__page__logo">
                    <img src={logoImg} width="75px"/>
                </div>
                <div className="fifth__page__headline">
                    <h2>Начните работу с Gmail</h2>
                </div>
                <div className="fifth__page__button">
                    <Button size="lg">Создать аккаунт</Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
