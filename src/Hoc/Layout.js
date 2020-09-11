import React from 'react';
import Header from '../Components/Header_footer/Header'


export default function Layout(props) {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    )
}
