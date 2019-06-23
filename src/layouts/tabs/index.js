import React, { Component } from 'react';
import styles from './index.less';
import { Anchor} from 'antd';
import img01 from '../../assets/logo.jpg';
import play from '../../assets/play.png';
import pause from '../../assets/pause.png';
import classNames from 'classnames';
const { Link } = Anchor;
export default class Tabbar extends Component{
    state={
        icon:false,
        play:true
    }
    audioplay(){
        this.setState({
            play:!this.state.play
        })
    }
    render(){
        return(
            <div className={styles.box}> 
                <div className={styles.muzic} onClick={()=>this.audioplay()}>
                    <img src={this.state.play?pause:play} alt=""/>
                </div>
                <img src={img01} className={styles.rotate} alt=""/>
                <div className={styles.menus} onClick={()=>this.setState({icon:!this.state.icon})}>
                    <div className={classNames(this.state.icon?styles.clickicon:"",styles.icon)}></div>
                </div>
                <div className={styles.content}></div>
                <div className={styles.bottom}></div>
                <Anchor className={styles.aiming} getContainer={()=>document.getElementById('#app')}>
                    <Link href="#list1" title="Basic demo" />
                    <Link href="#list2" title="Basic demo" />
                    <Link href="#list3" title="Basic demo" />
                    <Link href="#list4" title="Basic demo" />
                    <Link href="#list5" title="Basic demo" />
                    <Link href="#list6" title="Basic demo" />
                </Anchor>
            </div>
        )
    }
}