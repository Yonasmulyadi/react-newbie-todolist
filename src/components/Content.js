import React from 'react';
import Button from './Button';
const Content = (props) => {
    return(
        <div className="content-container">
            <p> {props.content} </p>
            <div className="content-controller">
                <Button class="update-button" name="update"/>
                <Button class="delete-button" name="delete" method={props.removeMethod}/>
            </div>
        </div>
    )
}

export default Content;