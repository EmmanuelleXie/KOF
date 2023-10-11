export class Controller{
    //控制器 读取键盘输入
    constructor($canvas){
        this.$canvas = $canvas;
        this.pressed_keys = new Set();  //库Set 实例对象允许存储任何类型的唯一值
        this.start(); 
    }

    start(){
        let outer = this;
        //事件  读取按下的键
        this.$canvas.keydown(function(e){
            outer.pressed_keys.add(e.key);
            // console.log(e.key);  //检查
        })
        this.$canvas.keyup(function(e){
            outer.pressed_keys.delete(e.key);
        });
    }
}