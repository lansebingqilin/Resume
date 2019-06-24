import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

export default class Banner extends Component{
    state={
        imgArray:[
          'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
          'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
        ]
    }
    render(){
        return(
            <BannerAnim 
                prefixCls="banner-user" 
                autoPlay={true} 
                dragPlay={false} 
                autoPlaySpeed={3000}
                duration={1500} 
                thumb={false} 
                arrow={false}>
                <Element 
                    prefixCls="banner-user-elem"
                    key="0"
                    followParallax={{
                        delay: 1000,
                        data: [
                          { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
                          { id: 'title', value: 50, type: 'x' },
                          { id: 'content', value: -30, type: 'x' },
                        ],
                      }}
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
                    <TweenOne id="title" className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text" id="content"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                    The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
                <Element 
                    prefixCls="banner-user-elem"
                    key="1" 
                    followParallax={{
                        delay: 1000,
                        data: [
                          { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
                          { id: 'title', value: 50, type: 'x' },
                          { id: 'content', value: -30, type: 'x' },
                        ],
                      }}
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
                    <TweenOne id="title" className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text" id="content"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                    The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
            </BannerAnim>
        )
    }
}
