import { Game_Object } from '/static/js/game_object/base.js';
import { Controller } from '/static/js/controller/base.js';

class Game_Map extends Game_Object {
    constructor(root) {
        super();
        
        this.root = root; 
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);

        this.time_left = 60000;    //单位：毫秒  
        this.$timer = this.root.$kof.find(".kof-head-timer");
    }

    //只要是游戏对象都需要下面的三个函数
    start() {

    }

    update() {
        this.time_left -= this.timedelta;
        if(this.time_left < 0){
            this.time_left =0;
            let [a, b] = this.root.players;
            if(a.status != 6 && b.status != 6){
                a.status =b.status = 6;
                a.frame_current_cnt = b.frame_current_cnt = 0;
                this.vx = 0;
            }
        }
        this.$timer.text(parseInt(this.time_left/1000));

        this.render();
    }

    render() {
        //  清除路径
        this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);  
        // this.ctx.fillStyle = 'black';
        // //矩形四个角的坐标
        // this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height()); 
    }
}

export {
    Game_Map
}
