import React, { useState, useEffect, useRef } from "react";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import Slide from "./Slide";
import styled from "styled-components";

const TOTAL_IMAGES = 3;

function Slider() {
  const [slide, setSlide] = useState(0);
  const slideRef = useRef(null);
  let id;

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slide}00%)`;
  }, [slide]);

  useInterval(() => {
    rightSlide();
  }, 3000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const rightSlide = () => {
    if (slide >= TOTAL_IMAGES) {
      setSlide((prev) => {
        return 0;
      });
    } else {
      setSlide((prev) => prev + 1);
    }
  };

  const leftSlide = () => {
    if (slide === 0) {
      setSlide((prev) => {
        return TOTAL_IMAGES;
      });
    } else {
      setSlide((prev) => prev - 1);
    }
  };
  return (
    <Container>
      <Text>
        <h1>Images</h1>
        <p>{slide + 1}번째 사진</p>
      </Text>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
      </SliderContainer>
      <Center>
        <Button onClick={leftSlide}>&lt;</Button>
        <Button onClick={rightSlide}>&gt;</Button>
      </Center>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 1000px;
  margin: auto;
  overflow: hidden;
`;
const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: black;
  border-radius: 10px;
  border: 2px solid lightblue;
  &:hover {
    background-color: lightblue;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;
const Text = styled.div`
  text-align: center;
  p {
    color: #fff;
    font-size: 20px;
    background-color: lightblue;
    display: inline-block;
    border-radius: 50px;
    padding: 0.5em 1em;
  }
`;
const Center = styled.div`
  text-align: center;
`;

export default Slider;
