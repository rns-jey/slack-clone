import React from 'react';

export default function Submenu (props) {
    const items = props.menuItems;

    const subMenuItems = items.map ((item, index) =>
        <li key={index.toString()} className="item">{item}</li>    
    );

    return (
        <div class="ui dropdown item">
            <i className="dropdown_icon"/>
            <ul class="menu">
            {subMenuItems}
            </ul>
        </div>
    );
}