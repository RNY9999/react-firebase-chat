import React, { useState } from 'react';
import './chatList.css';

const ChatList = () => {
  const userInfo = ["TanakaNaoki", "hello you"];
  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='検索' />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add' onClick={() => setAddMode((prev) => !prev)}/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>{userInfo[0]}</span>
          <p>{userInfo[1]}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList
