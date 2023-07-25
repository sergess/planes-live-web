'use client';

import React, {useEffect} from 'react';

import Image from 'next/image';
import iPhone_Mockup from '@/assets/img/iPhone_Mockup.png';
import styles from './slider.module.css';
import {useThemeContext} from "../../contexts/context";

export default function Slider() {

  const { color, setColor} = useThemeContext();

    useEffect(() => {
        console.log(color);
    }, [color]);


  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.iphone}
        src={iPhone_Mockup}
        alt=""
        onClick={()=> setColor('blue')}
      />
      <div className={styles.img1} />
      <div className={styles.img2} />
    </div>
  );
}
