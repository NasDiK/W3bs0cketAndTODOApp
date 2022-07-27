import React from 'react';
import {Link} from "react-router-dom";
import s from './Menu.module.css';

const Menu = (props)=>{
    return(
        <div className={s.menu}>
            <Link to={'chat'}><input className={`btn btn-primary mb-3`} type="button" value="Чат"/></Link>
            <Link to={'todo'}><input className={`btn btn-primary mb-3`} type="button" value="TODO"/></Link>
        </div>
    );

};

export default Menu;