import React, { Component } from 'react';
import {WhiteSpace,Flex} from 'antd-mobile'

class SortBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //点击筛选
    selectedHandle = (id,tag, e) => {
        // console.log(tag);
        this.props.onTab(id,tag);
    }
    render() {
        let sort = [
            { id: 1, name: "推荐",src:"../images/community/suggest.png", tag: 'suggest', isActive: false },
            { id: 2, name: "最新",src:"../images/community/new.png", tag: 'new', isActive: false },
            { id: 3, name: "顏值",src:"../images/community/yanzhi.png", tag: 'yanzhi', isActive: false },
            { id: 4, name: "明星", src:"../images/community/star.png",tag: 'star', isActive: false },
        ]

        return (
            <Flex justify="around" className="bc-white pet-padding">
                {
                    sort.map((item, index) => {
                        return (

                            // <a key={index} className="nav-item" href="#" onClick={(e) => this.selectedHandle(item.tab, e)}>{item.name}</a>

                            <a  key={index} onClick={(e) => this.selectedHandle(item.id,item.tag, e)}>
                                <div><i><img style={{ width: "11.481vw" }} src={item.src} alt="动态分类"/></i></div>
                                <WhiteSpace size="sm" />
                                <div style={{textAlign:'center'}}>{item.name}</div>
                            </a>
                        )
                    })
                }
            </Flex>
        );
    }
}

export default SortBar;
