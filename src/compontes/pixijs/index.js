import React, { useState, useEffect } from "react";
import * as PIXI from "pixi.js-legacy";
import spriteJson from "../../assets/sprites.json";
import imgSprite from "../../assets/sprites.png";

const Pixi = () => {
  const BACKGROUND_URL = "assests/background.png";

  useEffect(() => {
    let type = "WebGL";
    if (!PIXI.utils.isWebGLSupported()) {
      type = "canvas";
    }
    PIXI.utils.sayHello(type);
    InitStage();
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

    document.body.appendChild(app.view);

    // 创建一个半径为32px的圆
    const circle = new PIXI.Graphics();
    circle.beginFill(0xfb6a8f);
    circle.drawCircle(0, 0, 32);
    circle.endFill();
    circle.x = 130;
    circle.y = 130;
    circle.interactive = true;
    circle.buttonMode = true;
    circle.on("click", () => {
      console.log("===绑定点击事件");
    });

    const rectangle2 = new PIXI.Graphics();
    rectangle2.beginFill(0xffffff);
    rectangle2.drawRect(0, 0, 80, 64);
    rectangle2.endFill();
    rectangle2.position.set(110, 20);
    rectangle2.interactive = true;
    rectangle2.buttonMode = true;
    rectangle2.on("click", () => {
      console.log("rectangle2 圆形");
      console.log("===绑定点击事件");
    });

    // 添加到app.stage里，从而可以渲染出来
    app.stage.addChild(circle);
    const myContainer = new PIXI.Container();
    // 相对于根节点偏移
    myContainer.position.set(40, 40);

    myContainer.addChild(rectangle2);
    // 创建一个图片精灵
    const avatar = new PIXI.Sprite.from("http://anata.me/img/avatar.jpg");
    // 图片宽高缩放0.5
    avatar.scale.set(0.5, 0.5);
    avatar.x = 10;
    avatar.y = 10;
    //是不是可以交互
    // 可交互
    avatar.interactive = true;
    avatar.anchor.set(0.5, 0.5);
    // 监听事件
    avatar.on("click", () => {
      console.log("avatar 图片精灵");
      // 透明度
      avatar.alpha = 0.5;
    });

    app.stage.addChild(myContainer);
    app.stage.addChild(avatar);
    app.ticker.add(() => {
      // 每秒调用该方法60次(60帧动画)
      avatar.rotation += 0.01;
    });
    const { Loader, Spritesheet, Sprite } = PIXI;
    const loader = Loader.shared; // Loader.shared内置的单例loader
    loader.add("imgSprite", imgSprite).load(setup);

    function setup() {
      console.log("==imgSpriteloader=");
      const texture = loader.resources["imgSprite"].texture.baseTexture;
      const sheet = new Spritesheet(texture, spriteJson);
      console.log("----", sheet, texture);
      sheet.parse((textures) => {
        console.log("--textures--", textures);
        // imgSprite里面的一张叫treasure.png的图片
        //const avatar = new PIXI.Sprite.from("http://anata.me/img/avatar.jpg");
        const treasure = new Sprite(textures[0]);
        console.log("----", textures["gtglrw.png"], treasure);
        treasure.position.set(500, 100);
        // imgSprite里面的一张叫blob.png的图片
        const blob = new Sprite(textures[2]);
        blob.position.set(400, 400);

        app.stage.addChild(treasure);
        app.stage.addChild(blob);
      });
    }

    // 在离开页面时需要手动清理内存，否则无法释放WebGL内存

    // 基础文字
    const basicText = new PIXI.Text("6666666");
    // 自定义文字样式
    const style = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fontStyle: "italic",
      fontWeight: "bold",
      fill: ["#ffffff", "#00ff99"],
      stroke: "#4a1850",
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
    });

    const richText = new PIXI.Text("6666666", style);
    richText.x = 100;
    richText.y = 300;
    app.stage.addChild(richText);
  };

  return <div>hello</div>;
};

export default Pixi;
