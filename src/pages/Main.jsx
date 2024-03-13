import React from 'react';
import { Link } from 'react-router-dom';
import SwiperSlider from '../UI/SwiperSlider'
import './Main.css'
const Main = ({ setIndexActive }) => {
    const foodsMenu = [{ name: 'пицца', urlImg: './images/pizza/pepperoni.webp' },
    { name: 'закуски', urlImg: './images/foods/danvich.webp' },
    { name: 'напитки', urlImg: './images/drinks/lipton-black.webp' },
    { name: 'кофе', urlImg: './images/coffe/latte.webp' },
    { name: 'десерты', urlImg: './images/deserts/cheescake.webp' },
    { name: 'соусы', urlImg: './images/souses/chesnochny.webp' },
    ]

    return (
        <div className="wrapper">
            <main className='main'>
                <div className="swiper__slider-inner">
                    <SwiperSlider />
                </div>
                <div className="container-main">
                    <section className="about">
                        <div className="container-main">
                            <div className="about__wrapp">
                                <div className="about__wrap-border">
                                    <div className="about__pizerii">
                                        <img className="about__foto"
                                            src='./images/pizza/foto.jpg' />
                                    </div>
                                </div>
                                <div className="about__text-about">
                                    <h1 className="about__title-text">ЗАКАЗАТЬ ПИЦЦУ С ДОСТАВКОЙ В ГОМЕЛЕ ТЕПЕРЬ ЕЩЕ ПРОЩЕ C
                                        FOOD-BOX
                                    </h1>
                                    <p className="about__text">
                                        Залог отличного вечера – хорошая компания и вкусная еда. Соберите друзей, а FOOD-BOX
                                        точно
                                        не
                                        подведет
                                        со вторым! Самые
                                        вкусные пиццы, суши, закуски и напитки здесь!
                                    </p>
                                    <p className="about__text"> FOOD-BOX – место, где Вас всегда ждут. У нас вы попробуете самые
                                        свежие
                                        и
                                        ароматные блюда из меню,
                                        окунетесь в уютную
                                        атмосферу и уж точно не сможете себе ни в чем отказать! Почему? Потому что все, что
                                        мы
                                        готовим,
                                        мы
                                        готовим с любовью.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="menu ">
                        <div className="container">
                            <div className="menu__container navigation">
                                {
                                    foodsMenu.map((item, i) =>
                                        <div className="menu__card-link " onClick={() => setIndexActive(i + 1)} key={item.name}>
                                            <Link to={'/' + item.name} className="menu__link-item">
                                                <h3 className="menu__link-name">{item.name}</h3>
                                                <img className="menu__link-img" src={item.urlImg} />
                                            </Link>
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                    </section>
                </div>
                <div className="marquee">
                    <span className="runingString">FoodBox— место, где можно заказать пиццу и суши с бесплатной
                        доставкой. Доставка
                        работает с
                        10:00 до 23:00 . Акция:две пиццы по цене одной!
                    </span>
                </div>
            </main>
        </div>
    )
}
export default Main