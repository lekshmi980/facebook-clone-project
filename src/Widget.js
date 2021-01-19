import React from 'react';
import './Widget.css';
import Birthdays from './Birthdays';
import SearchIcon from '@material-ui/icons/Search';

function Widget() {
    return (
        <div className='widget'>
            <h3>Contacts </h3>
            <Birthdays Icon={SearchIcon} />
            <Birthdays
            profileSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Dany" 
            />
            <Birthdays 
            profileSrc="https://i.pinimg.com/736x/15/13/15/15131527a4501d0b5f6cc5cb7e6dccf8.jpg"
            title="Ann" 
            />
            <Birthdays 
            profileSrc="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            title="Sidhu" 
            />
            <Birthdays 
            profileSrc="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            title="Remya" 
            />
            <Birthdays 
            profileSrc="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Arun" 
            />
            <Birthdays 
            profileSrc="https://i1.wp.com/statusbro.in/wp-content/uploads/2018/08/Cute-Girl-Fb-Profile-Photos.jpg?resize=762%2C427&ssl=1"
            title="Liya" 
            />
            <Birthdays 
            profileSrc="https://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Love-Profile-Images-9.jpg"
            title="Akhil" 
            />
            <Birthdays 
            profileSrc="https://i0.wp.com/ugtechmag.com/wp-content/uploads/2018/05/girl-facebook-profile-picture.jpeg?resize=300%2C300&ssl=1"
            title="Niya" 
            />
            <Birthdays 
            profileSrc="https://i.pinimg.com/564x/2b/23/63/2b23631b08bd562ff104f67b9b9c87ee.jpg"
            title="Anju" 
            />
        </div>
        
    );
}

export default Widget;
