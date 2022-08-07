import React, { Component } from "react";
import { Link } from "react-router-dom";

import titleImg from "static/images/aishenghuo.png";
import nianhuoImg from "static/images/nianhuojie.png";
import iphoneImg from "static/images/iphone.jpg";
import computerImg from "static/images/computer.png";
import mangguo from "static/images/58b3cfe4N833584e7.jpg";

type Iyeargoods = {
  id: number;
  title: string;
  desc: string;
  mark?: string;
};

const nianhuoArr: Iyeargoods[] = [
  {
    id: 1,
    title: "芒果超甜",
    desc: "海南黄皮大芒果 钜惠",
    mark: "生鲜水果",
  },
  {
    id: 2,
    title: "芒果超甜",
    desc: "海南黄皮大芒果 钜惠",
    mark: "生鲜水果",
  },
  {
    id: 3,
    title: "京东超市",
    desc: "超市大放价 抢超值好货",
  },
  {
    id: 4,
    title: "爱家",
    desc: "家居日用 部分满199减100",
  },
];

class Floor extends Component {
  render() {
    return (
      <div className="floor">
        <div className="fls-tit">
          <img src={titleImg} alt="" />
        </div>
        <div className="floor-container">
          {nianhuoArr.map((item) => (
            <div className="graphic-separation" key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <div className="graphic-text">
                  <p className="year-wrap">
                    <span>{item.title}</span>
                    {item.mark ? (
                      <span style={{ fontSize: "0.22rem", color: "green" }}>
                        {item.mark}
                      </span>
                    ) : (
                      <img src={nianhuoImg} alt="" />
                    )}
                  </p>
                  <p className="red">{item.desc}</p>
                </div>
                <div className="graphic-img">
                  <img src={item.mark ? mangguo : iphoneImg} alt="" />
                  <img src={item.mark ? mangguo : computerImg} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Floor;
