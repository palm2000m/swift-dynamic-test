import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import "./Test1.css";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCaretUp,
} from "react-icons/ai";
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
  PiNumberCircleFourBold,
  PiNumberCircleFiveBold,
  PiNumberCircleSixBold,
} from "react-icons/pi";

export default function Test1() {
  const [icon, setIcon] = useState([
    "PiNumberCircleOneBold",
    "PiNumberCircleTwoBold",
    "PiNumberCircleThreeBold",
    "PiNumberCircleFourBold",
    "PiNumberCircleFiveBold",
    "PiNumberCircleSixBold",
  ]);
  const [randomNumber, setRandomNumber] = useState([]);

  const iconComponents = {
    PiNumberCircleOneBold: PiNumberCircleOneBold,
    PiNumberCircleTwoBold: PiNumberCircleTwoBold,
    PiNumberCircleThreeBold: PiNumberCircleThreeBold,
    PiNumberCircleFourBold: PiNumberCircleFourBold,
    PiNumberCircleFiveBold: PiNumberCircleFiveBold,
    PiNumberCircleSixBold: PiNumberCircleSixBold,
  };

  const FirstIconComponent = iconComponents[icon[0]]
  const SecondIconComponent = iconComponents[icon[1]];
  const ThirdIconComponent = iconComponents[icon[2]];
  const FourthIconComponent = iconComponents[icon[3]];
  const FifthIconComponent = iconComponents[icon[4]];
  const SixthIconComponent = iconComponents[icon[5]];

  function leftIcon() {
    const firstIcon = icon[0];
    setIcon([...icon.slice(1), firstIcon]);
  }

  function rightIcon() {
    const lastIcon = icon[icon.length - 1];
    setIcon([lastIcon, ...icon.slice(0, icon.length - 1)]);
  }

  function upDownIcon() {
    const firstThreeIcons = icon.slice(0, 3);
    const lastThreeIcons = icon.slice(-3);
    const middleIcons = icon.slice(3, -3);
    setIcon([...lastThreeIcons, ...middleIcons, ...firstThreeIcons]);
  }

  function randomNum() {
    while(randomNumber.length<6){
      const result = Math.floor(Math.random() * 6);
      if (!randomNumber.includes(result)) {
        randomNumber.push(result);
      }
    }
    const newIcon = randomNumber.map(index=> icon[index])
    setIcon(newIcon);
    setRandomNumber([])
  }

  return (
    <div>
      <div>
        <Row xs={8} className="box-container">
          <Col className="gutter-row" span={5}>
            <button className="btn" onClick={() => leftIcon()}>
              <AiFillCaretLeft className="symbol" />
            </button>
          </Col>
          <Col className="gutter-rows" span={10}>
            <button className="btn2" onClick={() => upDownIcon()}>
              <AiFillCaretDown className="symbol" />
              <AiFillCaretUp className="symbol" />
            </button>
          </Col>
          <Col className="gutter-row" span={5}>
            <button className="btn" onClick={() => rightIcon()}>
              <AiFillCaretRight className="symbol" />
            </button>
          </Col>
        </Row>
        <Divider></Divider>
      </div>
      <div>
        <Row xs={8} className="second-box-container">
          <Col className="second-gutter-row" span={5}>
            <button className="btn" onClick={() => randomNum()}>
              <FirstIconComponent className="number-symbol" />
            </button>
          </Col>
          <Col className="second-gutter-row" span={5}>
            <button className="btn" onClick={() => randomNum()}>
              <SecondIconComponent className="number-symbol" />
            </button>
          </Col>
          <Col className="second-gutter-row" span={5}>
            <button className="btn" onClick={() => randomNum()}>
              <ThirdIconComponent className="number-symbol" />
            </button>
          </Col>
        </Row>
      </div>
      <div>
        <Row xs={8} className="third-box-container">
          <Col className="third-gutter-row" span={5}>
            <button className="btn" onClick={() => randomNum()}>
              <FourthIconComponent className="number-symbol" />
            </button>
          </Col>
          <Col className="third-gutter-row" span={5}>
            <button className="btn" onClick={() => randomNum()}>
              <FifthIconComponent className="number-symbol" />
            </button>
          </Col>
          <Col className="third-gutter-row" span={5}>
            <button className="btn" onClick={() => randomNum()}>
              <SixthIconComponent className="number-symbol" />
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
