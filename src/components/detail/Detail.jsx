import React from 'react';
import './detail.css';

const Detail = () => {
  return (
    <div className='detail'>
      <div className="detail__user">
        <img src="./avatar.png" alt="" />
        <h2>Tanaka</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="detail__info">
        <div className="option">
          <div className="title">
            <span>チャット 設定</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>写真を共有</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <img src="https://fs.tour.ne.jp/index.php/file_manage/view/?contents_code=curation&file_name=787/26109/2fdd21fdb930ff457b984c9f2598f0e4.jpg&w=1200" alt="" />
              <span>photo_2024_2.png</span>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>チャット 設定</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>チャット 設定</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>チャット 設定</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
