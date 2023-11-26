import React from 'react';
import style from '../css/PassGen.module.css'

const PassGen = () => {
  return (
    <>
    <div className={style.container}>
        <h2 className={style.title}>Password Generator</h2>
        <div className={style.result}>
          <div className={`${style.title} ${style.field_title}`}>Generated Password</div>
          <div className={`${style.result__info} ${style.right}`}>click to copy</div>
          <div className={`${style.result__info} ${style.left}`}>copied</div>
          <div className={style.result__viewbox} id="result">
            CLICK GENERATE
          </div>
          <button id={style.copy_btn}>
            <i className={`${style.far} ${style.fa_copy}`}></i>
          </button>
        </div>
        <div className={`${style.length} ${style.range__slider}`} data-min="4" data-max="32">
          <div className={`${style.length__title} ${style.field_title} `}data-length="0">
            length:
          </div>
          <input id="slider" type="range" min="6" max="32" value="16" />
        </div>

        <div className={style.settings}>
          <span className={`${style.settings__title} ${style.field-title}`}>settings</span>
          <div className={style.setting}>
            <input type="checkbox" id="uppercase" />
            <label htmlFor="uppercase">Include Uppercase</label>
          </div>
          <div className={style.setting}>
            <input type="checkbox" id="lowercase"/>
            <label htmlFor="lowercase">Include Lowercase</label>
          </div>
          <div className={style.setting}>
            <input type="checkbox" id="number"/>
            <label htmlFor="number">Include Numbers</label>
          </div>
          <div className={style.setting}>
            <input type="checkbox" id={style.symbol} />
            <label htmlFor="symbol">Include Symbols</label>
          </div>
        </div>

        <button className={`${style.btn} ${style.button1} ${style.generate}`} id="generate">
          Generate Password
        </button>
      </div>
    </>
  )
}

export default PassGen