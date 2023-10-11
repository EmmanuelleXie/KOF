import { Player } from "./base.js";
import { GIF } from "../util/gif.js";

export class Kyo extends Player {
    //人物之一
    constructor(root, info) {
        super(root, info);

        this.init_animation();  //初始化动画
    }

    init_animation(){
        let outer = this;
        let offset = [0, -22, -22, -140, 0, 0, 0];
        for(let i = 0; i < 7 ;i++){
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);

            //set()往Map（）里添加状态
            this.animations.set( i ,{
                gif : gif,     //i是键  {}中的是值     ：前后分别是名称和内容
                frame_cnt : 0,   //帧数
                frame_rate : 5,   //每五帧更新一次
                offset_y : offset[i],   // y轴偏移量
                loaded :false,   //是否加载完成
                scale :2    //放大倍数
            });   

            gif.onload = function(){
                //把运动的帧数更新到Map
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if(i === 3){
                    obj.frame_rate = 4;
                }
            }
        }
    }
}