
import React from 'react';
import main from '../img/main.png';
import embed from '../img/embed.png';
import extract from '../img/extract.png';
import login from '../img/login.png';
import save from '../img/save.png';
import signup from '../img/signup.png';

const Features = () => (
  <section className="">
    <h2 className="">Features</h2>
    <ul className="">
      <li>Easy-to-use UI for embedding messages.</li>
      <li>Secure image-based steganography using LSB.</li>
      <li>Supports multiple image formats.</li>
      <li>Fast encoding and decoding.</li>
      <h1 className=" ">How to use LSB SECRET App </h1>
    <div>
      <div className='step1'>
        <div>
          <img src={main} alt="" />
           <img src={login} alt="" />
        </div>
        <div></div>

      </div>




      <div className='step2'></div>
      <div className='step3'></div>
      <div className='step4'></div>
    </div>

    </ul>
  </section>
);

export default Features;
