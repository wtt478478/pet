import React, { Component } from 'react';
import {  WhiteSpace,  Icon,  Flex } from 'antd-mobile';

import NavComponent from '../../components/NavComponent'

import { connect } from 'dva'

import './style.css'



const url = 'http://localhost:3000';


class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: sessionStorage.id,
            article: {},
        }
    }

    // 选择性别
    // 返回上一页
    goBack = () => {
        this.props.history.replace('/index')
    }

    //计算时间
    lastTime = (value) => {
        let time='';
        if(!value){
            return ''
        }
        time=value.update_time;
        let now = new Date();
        let reply_time = new Date(time);
        console.log(reply_time)
        let timestamp = now - reply_time;
        let msec = parseInt(timestamp % 1000);
        let sec = parseInt(timestamp / 1000 % 60);
        let min = parseInt(timestamp / (1000 * 60) % 60);
        let hour = parseInt(timestamp / (1000 * 60 * 60) % 24);
        let day = parseInt(timestamp / (1000 * 60 * 60 * 24) % 30);
        // 月份有31天,30天
        let month = parseInt(timestamp / (1000 * 60 * 60 * 24 * 30) % 12);
        let year = parseInt(timestamp / (1000 * 60 * 60 * 24 * 365));
        if (year > 0) {
            return `${year}年前`;
        }
        if (month > 0) {
            return `${month}个月前`;
        }
        if (day > 0) {
            return `${day}天前`;
        }
        if (hour > 0) {
            return `${hour}小时前`;
        }
        if (min > 0) {
            return `${min}分钟前`;
        }
        if (sec > 0) {
            return `${sec}秒前`;
        }
        if (msec > 0) {
            return `${msec}毫秒前`;
        }
    }


    componentDidMount() {
        let detail = this.props.location.state;
        console.log(detail);
        this.setState({
            article: detail
        });


    }
    componentDidUpdate() {
        let img = document.querySelectorAll('.detail_content img');
        console.log(img)
        if (img.length > 0) {
            for (let i = 0; i < img.length; i++) {
                let src = document.querySelectorAll('.detail_content img')[i].src;
                console.log(src.slice(21));
                document.querySelectorAll('.detail_content img')[i].setAttribute('src', url + src.slice(21))

            }
        }
    }
    render() {

        return (
            <div >
                <NavComponent
                    navGoBack={this.goBack}
                    navkey="articleDetail"
                    navLeftContent={[<Icon type="left" />]}
                    navTitle=""
                />
                <div className="article_detail bc-white pet-padding">
                    <div className="title">{this.state.article ? this.state.article.title : ''}</div>
                    <Flex>
                        <div>{this.lastTime(this.state.article)}</div>
                        <div style={{ marginLeft: '6vw' }}><span>浏览量:</span>{this.state.article ? this.state.article.visited : ''}</div>
                    </Flex>

                    <WhiteSpace size="md" />
                    <div className="detail_content" dangerouslySetInnerHTML={{ __html: this.state.article ? this.state.article.content : '' }}>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect((article) => ({ article }))(ArticleDetail);