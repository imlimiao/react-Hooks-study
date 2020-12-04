import React, { useState, useEffect } from "react";
import * as PIXI from "pixi.js-legacy";

import Dust from "./grain/dust.js";
import SpriteUtilities from "./grain/spriteUtilities.js";

const Grain = () => {
  useEffect(() => {
    setTimeout(() => {
      InitStage();
    }, 1000);
  }, []);

  const InitStage = () => {
    const app = new PIXI.Application({
      width: 800,
      height: 800,
      antialias: true,
      transparent: false,
      resolution: 1,
      backgroundColor: 0x1d9ce0,
    });

    let stage = app.stage;
    let renderer = app.renderer;
    document.body.appendChild(renderer.view);

    let su = new SpriteUtilities(PIXI);
    let d = new Dust(PIXI);
    let imgURL = "../../assets/star.png";

    const setup = (stage) => {
      console.log("setup");
      let particleStream = d.emitter(100, () =>
        d.create(
          128,
          128,
          () =>
            new PIXI.Sprite.from(
              "https://www.kkkk1000.com/images/learnPixiJS-ParticleEffects/star.png"
            ),
          stage,
          30,
          0.1,
          false,
          3.14,
          6.28,
          30,
          60,
          1,
          5
        )
      );

      particleStream.play();

      setTimeout(() => {
        particleStream.stop();
      }, 2000);
    };

    const { Loader } = PIXI;
    const loader = Loader.shared; // Loader.shared内置的单例loader
    loader.add("imgURL", imgURL).load(setup(stage));
    app.ticker.speed = 1;

    app.ticker.add((time) => {
      // 每秒调用该方法60次(60帧动画)
      console.log("addd====");
      d.update();
      renderer.render(stage);
      //avatar.rotation += 0.01;
    });
  };

  return <div> grain </div>;
};

export default Grain;
