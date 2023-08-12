import React, { useEffect, useState } from "react";
import ShortpinkImage from "src/assets/images/guesthome_shortpink.png";
import Chair1Image from "src/assets/images/guesthome_chair.png";
import Chair2Image from "src/assets/images/guesthome_chair_1.png";
import Chair3Image from "src/assets/images/guesthome_chair_2.png";
import Chair4Image from "src/assets/images/guesthome_chair_3.png";
import Chair5Image from "src/assets/images/guesthome_chair_4.png";
import Chair6Image from "src/assets/images/guesthome_chair_5.png";
import Chair7Image from "src/assets/images/guesthome_chair_6.png";
import Chair8Image from "src/assets/images/guesthome_chair_7.png";
import Chair9Image from "src/assets/images/guesthome_chair_8.png";
import Chair10Image from "src/assets/images/guesthome_chair_9.png";
import Chair11Image from "src/assets/images/guesthome_chair_10.png";
import Q2Image from "src/assets/images/guesthome_____.png";
import TableImage from "src/assets/images/table.png";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const QButton = styled("button")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `120.01px`,
  height: `54.55px`,
  left: `135px`,
  top: `771px`,
  border: `none`,
  backgroundColor: `transparent`,
  cursor: `pointer`,
});

const GuestHome1 = styled("div")({
  backgroundColor: `rgba(255, 184, 188, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "100%",
  height: `844px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Q = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `120.01px`,
  height: `54.55px`,
  left: `135px`,
  top: `771px`,
});

const Shortpink = styled("img")({
  height: `54.55px`,
  width: `120.01px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Q1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `DNF Bit Bit TTF`,
  fontWeight: `400`,
  fontSize: `28px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  WebkitTextStroke: `1px rgba(75, 44, 46, 1)`,
  position: `absolute`,
  left: `15px`,
  top: `12px`,
});

const N = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `DNF Bit Bit TTF`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `225px`,
  height: `39px`,
  position: `absolute`,
  left: `83px`,
  top: `33px`,
});

const Chair = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `331px`,
  height: `528.17px`,
  left: `32px`,
  top: `130px`,
});

const Chair1 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `140px`,
  top: `0px`,
});

const Chair2 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `94px`,
});

const Chair3 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `281px`,
  top: `474px`,
});

const Chair4 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `281px`,
  top: `94px`,
});

const Chair5 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `189px`,
});

const Chair6 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `284px`,
});

const Chair7 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `379px`,
});

const Chair8 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `474px`,
});

const Chair9 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `281px`,
  top: `189px`,
});

const Chair10 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `281px`,
  top: `284px`,
});

const Chair11 = styled("img")({
  height: `54.17px`,
  width: `50px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `281px`,
  top: `379px`,
});

const Q2 = styled("img")({
  height: `125.9px`,
  width: `120px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `137px`,
  top: `67px`,
});

const Table = styled("img")({
  height: `600px`,
  width: `193.55px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `100px`,
  top: `163px`,
});

function GuestHome(props) {
  const [q2Image, setQ2Image] = useState(null);

  useEffect(() => {
    // localStorage에서 이미지를 로드하고 상태에 설정하는 함수
    const loadQ2ImageFromLocalStorage = () => {
      // 사용자로부터 이미지 이름을 입력받습니다.
      const imageName = prompt("이미지의 이름을 입력하세요:");
      // 이미지를 localStorage에서 가져옵니다.
      const imageData = localStorage.getItem(imageName);
      // 가져온 이미지 데이터를 상태에 설정합니다.
      setQ2Image(imageData);
    };

    // 페이지가 로드될 때 localStorage에서 이미지 로드 함수를 실행합니다.
    loadQ2ImageFromLocalStorage();
  }, []);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // 페이지 이동 전에 필요한 작업 수행

    // 원하는 URL로 페이지 이동
    navigate("/GuestLetter");
  };
  return (
    <GuestHome1 className={props.className}>
      {/* 수정된 부분: 로드한 이미지 표시 */}
      {q2Image && <Q2 src={q2Image} loading="lazy" alt={"고라니"} />}

      <QButton onClick={handleButtonClick}>
        <Shortpink src={ShortpinkImage} loading="lazy" alt={"shortpink"} />
        <Q1>{`편지쓰기`}</Q1>
      </QButton>
      <N>{`생일까지 n일 남았습니다.`}</N>
      <Chair>
        <Chair1 src={Chair1Image} loading="lazy" alt={"chair"} />
        <Chair2 src={Chair2Image} loading="lazy" alt={"chair"} />
        <Chair3 src={Chair3Image} loading="lazy" alt={"chair"} />
        <Chair4 src={Chair4Image} loading="lazy" alt={"chair"} />
        <Chair5 src={Chair5Image} loading="lazy" alt={"chair"} />
        <Chair6 src={Chair6Image} loading="lazy" alt={"chair"} />
        <Chair7 src={Chair7Image} loading="lazy" alt={"chair"} />
        <Chair8 src={Chair8Image} loading="lazy" alt={"chair"} />
        <Chair9 src={Chair9Image} loading="lazy" alt={"chair"} />
        <Chair10 src={Chair10Image} loading="lazy" alt={"chair"} />
        <Chair11 src={Chair11Image} loading="lazy" alt={"chair"} />
      </Chair>
      <Table src={TableImage} loading="lazy" alt={"table"} />
    </GuestHome1>
  );
}

export default GuestHome;