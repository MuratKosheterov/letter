import React from 'react'
import first from './images/first.png'
import second from './images/second.png'
import third from './images/third.png'
import firth from './images/firth.png'
import logo from './images/logo.png'
import hero from './images/hero.png'

function App() {
  return (
    <div className='overflow-hidden'>
      <div className='container h-screen flex flex-col items-center  justify-evenly mx-auto relative max-w-[595px] ' >
        <img className=' absolute top-0 left-0  ' src={first} alt="first" />
        <img className=' absolute top-0 right-0 ' src={second} alt="second" />
        <img className=' absolute bottom-0 left-0 ' src={third} alt="third" />
        <img className=' absolute bottom-20 right-0  ' src={firth} alt="firth" />
        <img className=' absolute bottom-1 right-0 ' src={logo} alt="firth" />

        <div className='  ' >
          <h1 className='font-sans text-xl border-b border-orange-300  max-w-[284px] text-start ml-16 mt-28 my-5' >
            Уважаемый
          </h1>
          <p className='font-sans  max-w-[443px]  text-[12px] font-light indent-8   text-gray-500 ' >
            Благотворительный фонд «Возрождение природы» выражает Вам огромную благодарность за поддержку наших экологических проектов.
          </p   >
          <p className='font-sans  max-w-[443px]  text-[12px] font-light indent-8   text-gray-500' >
            Благодаря Вашей щедрости и осознанности мы продолжаем бороться за сохранение природы, за увеличение численности краснокнижных животных и безопасность наших лесов, за чистоту наших морей, рек и водоемов, помогаем заповедникам, приобретаем корм и даже снаряжаем экспедиции.
          </p>
          <p className='font-sans  max-w-[443px]  text-[12px] font-light indent-8   text-gray-500' >
            Каждая Ваша помощь играет немалую роль в наших усилиях.             Полученные от пожертвований российских граждан средства, мы направляем на проведение экологических мероприятий, поддерживаем национальные парки и заповедники, организовываем общероссийские и региональные образовательные мероприятия по экологии, издаем необходимую литературу.
          </p>
          <p className='font-sans  max-w-[443px]  text-[12px] font-light indent-8   text-gray-500' >
            Мы призываем Вас поддерживать наши проекты и впредь, приглашая друзей и партнеров участвовать вместе с нами в общем глобальном проекте: сохранение планеты чистой, а мира зеленым и устойчивым для наших будущих поколений.
          </p>
          <p className='font-sans  max-w-[443px]  text-[12px] font-light indent-8   text-gray-500' >
            Спасибо Вам огромное за веру в нашу работу, за любовь к природе и желание охранять и приумножать ее богатства!
          </p>
          <br />
          <p className='font-sans  max-w-[278px]  text-[12px] font-light  text-gray-500' >
            Основатель и президент Благотворительного фонда
            «Возрождение природы»
          </p>
        </div>
        <div className=' flex ' >
          <img className=' z-10' src={hero} alt="hero" />
          <p className=' absolute bottom-12 z-10 right-0 text-green-800 text-xl font-lobster  font-normal ' >
            Торнквист Наталья Михайловна
          </p>
        </div>
      </div>
    </div>
  )
}

export default App