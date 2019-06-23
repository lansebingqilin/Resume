import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import { Carousel, Radio ,Anchor} from 'antd';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styles from './index.less';
import img01 from '../../assets/img01.jpg';
import classNames from 'classnames';
const BgElement = Element.BgElement;

export default class Index extends  Component{
  state={
    imgArray:[
      'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
      'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
    ]
  }
  render(){
    return (
      <div className={styles.App} id="#app">
        <style>{`
          .ant-carousel .slick-slide {
            text-align: center;
            height: 160px;
            line-height: 160px;
            background: #364d79;
            overflow: hidden;
          }
          
          .ant-carousel .slick-slide h3 {
            color: #fff;
          }
          .banner-user{
            height: 100%;
          }
          .banner-user-elem{
            text-align: center;
            color: #fff;
            position: relative;
            overflow: hidden;
          }
          .banner-user-elem .banner-user-title{
            font-size: 32px;
            top: 40%;
          }
          .banner-user-elem .banner-user-text{
            top: 40%;
          }
          .banner-anim-elem .bg{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
          }
        `}</style>
        <div id="list1" className={styles.bgimg} >
          <BannerAnim prefixCls="banner-user" autoPlay={true} dragPlay={false} autoPlaySpeed={5000} duration={1500} thumb={false} arrow={false}>
              <Element 
                prefixCls="banner-user-elem"
                key="0"
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: `url(${this.state.imgArray[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                  Ant Motion Banner
                </TweenOne>
                <TweenOne className="banner-user-text" 
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                  The Fast Way Use Animation In React
                </TweenOne>
              </Element>
              <Element 
                prefixCls="banner-user-elem"
                key="1" 
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    backgroundImage: `url(${this.state.imgArray[1]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                  Ant Motion Banner
                </TweenOne>
                <TweenOne className="banner-user-text" 
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                  The Fast Way Use Animation In React
                </TweenOne>
              </Element>
            </BannerAnim>
          </div>
          <div id="list2" className={styles.bgimg} style={{background:'url('+img01+') no-repeat'}}>
            <div className={styles.box}>

            </div>
          </div>
          <div id="list3" className={styles.bgimg} >
            <div className={styles.box}></div>
          </div>
          <div id="list4" className={styles.bgimg} style={{background:'url('+img01+') no-repeat'}}>
          <div className={styles.box}></div>

          </div>
          <div id="list5" className={styles.bgimg} ></div>
          <div id="list6" className={styles.bgimg} style={{background:'url('+img01+') no-repeat'}}>
          <div className={styles.box}></div>
          </div>

      </div>
    );
  }
}
