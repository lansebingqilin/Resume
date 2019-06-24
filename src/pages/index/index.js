import React, { Component } from 'react';

import { Carousel, Radio ,Anchor} from 'antd';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import Banner from '../../component/BannerAnim';
import styles from './index.less';
import img01 from '../../assets/img01.jpg';
import img02 from '../../assets/img02.jpg';
import img03 from '../../assets/img03.jpg';

import classNames from 'classnames';

export default class Index extends  Component{
  state={
    
  }
  onPlotEnter(ev){
    console.log(ev,"---")
  }
  render(){
    const { Text } = Guide;
    const data = [
      {
        question: "React Native",
        percent: 50
      },
      {
        question: "JavaScript",
        percent: 65
      },
      {
        question:"Hybrid",
        percent: 60
      },
      {
        question: "React",
        percent: 70
      },
      {
        question: "Css",
        percent: 80
      }
    ];
    const cols = {
      percent: {
        min: 0,
        max: 100
      }
    };
    let chartIns;
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
            <Banner></Banner>
          </div>
          <div id="list2" className={classNames(styles.bgimg,styles.list2)} style={{background:'url('+img01+') no-repeat'}}>
            <div className={styles.box}>
              <div className={styles.avatar}></div>
              <div className={styles.introduce}>
                <p>您好，我是李永奇，坐标郑州，计算机专业，毕业于河南工学院，在过去的两年多里，从最初的静态页面布局，简单的js实现，到如今的React、React Native、微信小程序、微信公众号，一步步不断前行，不断Cording</p>
                <p>写过PC端、移动端（H5）、小程序、公众号，封装过WebApp、原生(Native)App,做过微信支付（App支付、H5支付、小程序支付、公众号支付）、支付宝支付（App支付、Web支付），以及微信分享，朋友圈分享，QQ分享，第三方登录等，熟悉上架应用商店流程，以及Hybrid开发都能实现</p>
              </div>
            </div>
          </div>
          <div id="list3" className={styles.bgimg} style={{background:'url('+img02+') no-repeat'}}>
            <div className={styles.box}>
            <Chart height={600} width={600} data={data} scale={cols} forceFit
              onGetG2Instance={g2Chart => {chartIns = g2Chart;}}
              onIntervalMouseenter={ev => {
                var point = {
                  x: ev.x,
                  y: ev.y
                };
                var items = chartIns.getTooltipItems(point);
                // items[0].color='#fff';
              }}>
              <Coord type="polar" innerRadius={0.1} transpose />
              <Tooltip title="question" />
              <Geom
                type="interval"
                position="question*percent"
                color={["question",['red','#666','#0f9','#cacaca','#ff8']]}
                tooltip={[
                  "percent",
                  val => {
                    return {
                      name: "占比",
                      value: val + "%"
                    };
                  }
                ]}
                style={{
                  lineWidth: 1,
                  stroke: "#fff"
                }}
              >
                {/* <Label content="percent" offset={-5} /> */}
              </Geom>
              <Guide>
                {data.map(obj => {
                  return (
                    <Text
                      position={[obj.question, 0]}
                      content={obj.question + " "}
                      style={{
                        rotate:-10,
                        textAlign: "right",
                        fill: '#fff', // 文本颜色
                        fontSize: '15', // 文本大小
                        fontWeight: 'bold' // 文本粗细
                      }}
                    />
                  );
                })}
              </Guide>
            </Chart>
            </div>
          </div>
          <div id="list4" className={styles.bgimg} style={{background:'url('+img03+') no-repeat'}}>
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
