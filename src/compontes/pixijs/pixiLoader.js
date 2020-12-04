import React, { useState, useEffect } from "react";
import { Application, Sprite, Loader, Texture } from "pixi.js-legacy";

const LoaderPixi = () => {
  useEffect(() => {
    InitLoader();
  }, []);

  const InitLoader = () => {
    const loader1 = Loader.shared; // Loader.shared内置的单例loader
    const loader = new Loader(); // 也可以使用自定义的loader

    const app = new Application({
      width: 300,
      height: 300,
      antialias: true,
      transparent: false,
      resolution: 1,
      backgroundColor: 0x1d9ce0,
    });
    document.body.appendChild(app.view);

    //const texture = Texture.from("http://pic.deepred5.com/bilibili.jpg");
    const bunny = new Sprite.from("http://pic.deepred5.com/bilibili.jpg");

    bunny
      .on("pointerdown", onDragStart)
      .on("pointerup", onDragEnd)
      .on("pointerupoutside", onDragEnd)
      .on("pointermove", onDragMove);

    app.stage.addChild(bunny);

    function onDragStart(event) {
      this.data = event.data;
      this.alpha = 0.5;
      this.dragging = true;
    }
    function onDragEnd() {
      this.alpha = 1;
      this.dragging = false;
      this.data = null;
    }
    function onDragMove() {
      if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
      }
    }

    loader
      .add("bili", "http://pic.deepred5.com/bilibili.jpg")
      .add("avatar", "http://anata.me/img/avatar.jpg")
      .load(setup);

    // 监听加载事件
    loader.onProgress.add((loader) => {
      console.log(loader.progress, "loader.onProgress");
    });

    // 启动函数setup
    function setup() {
      const bili = new Sprite(loader.resources["bili"].texture);
      bili.width = 50;
      bili.height = 50;

      const avatar = new Sprite(loader.resources["avatar"].texture);
      avatar.width = 50;
      avatar.height = 50;
      avatar.position.set(50, 50);
      app.stage.addChild(bili);
      app.stage.addChild(avatar);
    }
  };

  return <div> hello - PIXIJS - loader </div>;
};

export default LoaderPixi;
