"use client";

import { CartProductsType, ProductsType } from "@/@types/products";
import styles from "@/styles/carousel/Carousel.module.scss";
import CardShop from "../layout/CardShop";
import { useEffect, useRef, useState } from "react";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface PropsType {
  datas: CartProductsType[];
}

export default function Carousel(props: PropsType) {
  const { datas } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [carouselInfo, setCarouselInfo] = useState({
    allowedMoves: 0,
    howManyAppear: 1,
  });

  useEffect(() => {
    function resize() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      wrapper.style.translate = `0 0`;
      setCurrent(0);
      getMaxChildren();
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [current]);

  useEffect(() => {
    getMaxChildren();
  }, []);

  function getMaxChildren() {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const widthWindow = window.innerWidth;
    const children = wrapper.childNodes.length;

    let allowedMoves = 0; //How many children exist without those who appear
    let howManyAppear = 1; //How many items will appear for slide

    if (widthWindow > 1200) {
      allowedMoves = children - 4;
      howManyAppear = 4;
    } else if (widthWindow > 768) {
      allowedMoves = children - 3;
      howManyAppear = 3;
    } else if (widthWindow > 500) {
      allowedMoves = children - 2;
      howManyAppear = 2;
    } else if (widthWindow < 501) {
      allowedMoves = children - 1;
      howManyAppear = 1;
    }

    setCarouselInfo({
      allowedMoves,
      howManyAppear,
    });
  }

  function move(num: 1 | -1) {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const width = wrapper.clientWidth; //Get the width of the parent
    const next = current + num; //Choose the next/previous slide
    const { allowedMoves, howManyAppear } = carouselInfo; //To fixed when resized

    const translateX = (width / howManyAppear) * -next; //Get the child width to male the slide

    let curSlide = next;
    let translate = `${translateX}px 0`;

    if (next >= allowedMoves + 1) {
      translate = `0 0`;
      curSlide = 0;
    } else if (next <= -1) {
      translate = `-${translateX * allowedMoves}px 0`;
      curSlide = allowedMoves;
    }

    wrapper.style.translate = translate;
    setCurrent(curSlide);
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_controls}>
        <button
          onClick={() => move(-1)}
          disabled={carouselInfo.allowedMoves === 0 ? true : false}
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={() => move(1)}
          disabled={carouselInfo.allowedMoves === 0 ? true : false}
        >
          <FaAngleRight />
        </button>
      </div>

      <div className={`${styles.carousel_wrapper}`} ref={wrapperRef}>
        {datas && datas.map((data) => <CardShop data={data} key={data.id} />)}
      </div>
    </div>
  );
}
