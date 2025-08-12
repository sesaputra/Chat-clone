import React, { useState } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { geminiAPI } from '../../config/gemini';

const Main = () => {
    const [input, setInput] = useState("");
    const [resultData, setResultData] = useState("");

    const onSent = async () => {
        setResultData(await geminiAPI(input));
    };

  return (
    <div className="main">
        <div className="nav">
            <p>Zsayamade</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggert beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggert beautiful places to see on an upcoming road trip</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggert beautiful places to see on an upcoming road trip</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggert beautiful places to see on an upcoming road trip</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder='Enter a propt here'
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={onSent} src={assets.send_icon} alt="" /> {/* Tambahkan onClick */}
                    </div>
                </div>
                <p className="bottom-info">
                    {resultData} {/* Tampilkan hasil di sini */}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main