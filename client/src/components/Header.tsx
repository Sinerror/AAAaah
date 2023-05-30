import React from 'react';
import SearchBar from "./SearchBar";
import UserService from '../services/UserService';
import { randomInt } from 'crypto';

function makeid(length:number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const addUser = async () =>{
    console.log("123")
    UserService.addUser(makeid(13),makeid(26),makeid(13) + "@gmai.com","6875875687"+makeid(2),makeid(30),makeid(13)+ "CORP").then(resp => console.log(resp.data))
}

const Header = () => {
    return (
        <div className="header">
            <SearchBar/>
            <span>темно</span>
            <button  onClick={() => addUser()} >Добавить душу</button>
        </div>
    );
};

export default Header;