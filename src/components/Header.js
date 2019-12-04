import React from 'react';
import Button from './Button';
const Header = (props) => {
    return(
        <div className="title-wrapper">
            <h1>{props.title}</h1>
            <form className="form" onSubmit={props.pushMethod}>
                <input type="text" name="task" placeholder="Enter your activities here :)" onChange={props.method} value={props.value}></input>
                <Button class="submit-button" name="add"/>
            </form>
        </div>
    )
}

export default Header;