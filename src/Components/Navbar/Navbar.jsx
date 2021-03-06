import React from 'react';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
            <div className='Navbar'>
                <div className='Navbar-item-right'>
                    <input type="search"></input>
                    <div>
                        <a href="#">(иконка поиска)</a>
                    </div>
                    <div>
                        <a href='#' >(+)</a>
                    </div>
                    <div>
                        <NavLink to='/information'>Информация</NavLink>
                    </div>
                    <div>
                        <NavLink to='/performance'>Успеваемость</NavLink>
                    </div>
                    <div>
                        <NavLink to='/tests'>Тесты</NavLink>
                    </div>
                </div>
                <div>
                    <div>Войти</div>
                    <div>Зарегистрироваться</div>
                </div>
            </div>
    )
}

export default Navbar;
