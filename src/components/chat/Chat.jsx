import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react';
import './chat.css';

const Chat = () => {
  const userName = "Tanaka";
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    console.log(e);
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  console.log(text);

  return (
    <div className='chat'>
      <div className="top">
        <div className="top__user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>{userName}</span>
            <p>お客様はとても満足しています。</p>
          </div>
        </div>
        <div className="top__icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>会社自体は非常に成功している会社です。これらの最も小さなものを持って生まれた人は幸いです。なぜなら、慰めの苦痛や困難に耐えていることを誰でも責めることができ、より粗暴な人たちの賢明な労働をはね返されたかのように彼を喜ばせることができるでしょうか？</p>
            <span>1分前</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://img.freepik.com/free-photo/fuji-mountain-and-kawaguchiko-lake-in-morning-autumn-seasons-fuji-mountain-at-yamanachi-in-japan_335224-102.jpg" alt="" />
            <p>これがその時の画像です。</p>
            <span>1分前</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom__icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='メッセージを入力' value={text} onChange={(e) => setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} theme='auto'/>
          </div>
        </div>
        <button className='sendButton'>送信</button>
      </div>
    </div>
  )
}

export default Chat
