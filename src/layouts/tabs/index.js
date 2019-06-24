import React, { Component } from 'react';
import styles from './index.less';
import { Anchor} from 'antd';
import img01 from '../../assets/logo.jpg';
import play from '../../assets/play.png';
import pause from '../../assets/pause.png';
import header from '../../assets/header.jpeg';
import call from '../../assets/weixiao.png';
import icon01 from '../../assets/github.png';
import icon02 from '../../assets/icon02.jpg';
import icon03 from '../../assets/qq.png';
import icon04 from '../../assets/wechart.png';
import audiosrc from '../../assets/bgmuzic.m4a';
import classNames from 'classnames';
const { Link } = Anchor;
export default class Tabbar extends Component{
    state={
        icon:false,
        play:true,
        flag:false,
        menus:[{src:icon01,show:false},{src:icon02,show:false},{src:icon03,show:false},{src:icon03,show:false}]
    }
    componentDidMount(){
        
    }
    audioplay(){
        this.setState({
            play:!this.state.play
        })
    }
    Tohref(val){
        let arr=this.state.menus;
        if(val===0){
            this.Clearstatus();
            window.location="https://github.com/lansebingqilin"
        }else if(val===1){
            this.Clearstatus();
            window.location="https://www.jianshu.com/u/5c917dca6b24"
        }else{
            if(arr[val].show){
                this.Clearstatus();
            }else{
                arr.map((item)=>{
                    item.show=false;
                })
                arr[val].show=!arr[val].show;
                this.setState({
                    menus:arr
                })
            }
        }
    }
    Change(){
        this.Clearstatus();
        this.setState({flag:!this.state.flag});
    }
    //清除状态
    Clearstatus(){
        let arr=this.state.menus;
        arr.map((item)=>{
            item.show=false;
        })
        this.setState({
            menus:arr
        })
    }
    render(){
        return(
            <div className={styles.box}> 
                <style>
                {`
                    .ant-anchor{
                        height:200px;
                        padding:0;
                    }
                    .ant-anchor-wrapper{
                        padding:0;
                        background-color:transparent
                    }
                    .ant-anchor-ink{
                        left:9px;
                        top:1px;
                    }
                    .ant-anchor-ink::before{
                        width:0;
                        border-style:dotted dashed dotted;
                        border-width:1px;
                        border-color:#8c7576;
                        background-color:transparent;
                        z-index:50;
                    }
                    .ant-anchor-link-active > .ant-anchor-link-title{
                        border: 2px solid #1890ff;
                    }
                    .ant-anchor-link{
                        padding:0;
                        width:20px;
                        height:20px;
                        background-color:transparent;
                        border-radius:50%;
                        border:4px solid #cacaca;
                        margin-bottom:20px;
                        position:relative;
                        z-index:51;
                    }
                    .ant-anchor-link:hover{
                        border:4px solid #fff;
                    }
                    .ant-anchor-link:hover >.ant-anchor-link-title{
                        border: 2px solid #1890ff;
                    }
                    .ant-anchor-ink-ball{
                        width:10px;
                        height:10px;
                    }
                    .ant-anchor-link-title{
                        width: 12px;
                        height: 12px;
                        background-color: #fff;
                        border: 3px solid #fff;
                        border-radius:50%;
                    }
                `}
                </style>
                <div className={styles.muzic} onClick={()=>this.audioplay()}>
                    <img src={this.state.play?pause:play} alt=""/>
                </div>
                <img src={img01} className={styles.rotate} alt=""/>
                <div className={styles.menus} onClick={()=>this.setState({icon:!this.state.icon})}>
                    <div className={classNames(this.state.icon?styles.clickicon:"",styles.icon)}></div>
                </div>
                <div className={styles.header}>
                    <img src={header} alt=""/>
                    <h2>个人简历</h2>
                </div>
                <div className={classNames(this.state.flag?styles.show:"",styles.contact)}>
                    {
                        this.state.menus.map((item,index)=>(
                            <div className={styles.iconbox} key={index} onClick={()=>this.Tohref(index)}>
                                <img src={item.src} alt=""/>
                                <div style={item.show?{display:"block"}:{display:'none'}} className={styles.modal}>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <img onClick={()=>this.Change()} className={styles.smile} src={call} alt=""/>
                <Anchor className={styles.aiming} getContainer={()=>document.getElementById('#app')}>
                    <Link href="#list1" title="" />
                    <Link href="#list2" title="" />
                    <Link href="#list3" title="" />
                    <Link href="#list4" title="" />
                    <Link href="#list5" title="" />
                    <Link href="#list6" title="" />
                </Anchor>
                <audio id="#audio" src="http://m701.music.126.net/20190624112322/b2b83f5cd95df0af5e5bb5bb00a85c15/jdyyaac/525f/0058/0e08/e512cd13a07213af30889be104707506.m4a" autoPlay>111</audio>
            </div>
        )
    }
}