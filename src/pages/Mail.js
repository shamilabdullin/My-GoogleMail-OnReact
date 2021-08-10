import React from 'react'
import MailHeader from '../components/mail/MailHeader'
import { useState } from 'react'
import Letter from '../components/mail/Letter'
import './mail.css'
import HeaderCategories from '../components/mail/HeaderCategories'
import UnderHeader from '../components/mail/UnderHeader'
import LeftMenu from '../components/mail/left/LeftMenu'
import RightMenu from '../components/mail/right/RightMenu'

const shamilLetters = [
    {
      sender: 'Сбербанк',
      title : 'Обзор за август',
      body : 'Представляем вам инвестиционный обзор за август',
      date : new Date(),
    },
    {
      sender: 'YouTube',
      title : 'Изменения в Условиях использования YouTube',
      body : 'Хотим сообщить, что скоро на YouTube начнут действовать новые Условия использования',
      date : new Date(),
    },
    {
      sender: 'Discord',
      title : 'Вы пропустили сообщения на сервере Gamers',
      body : 'Привет, Шамиль Абдуллин, Пока вы отсутствовали, в Discord вовсю шла движуха!',
      date : new Date(),
    }
]
const user1 = {
  id : '1',
  userName : 'Шамиль',
  letters : shamilLetters
}

export default function Mail() {
  const letters = user1.letters.map((letter) => 
    <Letter 
        sender={letter.sender}
        title={letter.title}
        body={letter.body}
        date={letter.date} />
  )
    return (
        <div className="mail__page">
          <MailHeader /> 
            <div className="mail__page__container">
            <LeftMenu />
            <div className="mail__page__content">
              <UnderHeader />
              <HeaderCategories />
              <div className="mail__body">
                {letters}
              </div>
            </div>
            <RightMenu />
          </div>
        </div>
    )
}
