//两个人物动画
let game_objects = [];

class Game_Object{
    constructor(){
        game_objects.push(this);  //把class存到gameObject数组里面
        this.timedelta = 0; //每帧时间的延迟
        let has_call_start = false; //当前函数是否执行过
    }

    start(){ //初始执行一次

    }

    update(){ //除了第一帧以外 每一帧执行一次
    }

    destroy(){  //删除当前对象
        for(let i in game_objects){  //for-in循环，可以枚举数组中的下标，以及对象中的key
            if(game_objects[i] === this){
                game_objects.splice(i,1);  //删除对象
                break;
            }
        }        
    }
}

let last_timestamp;
let GAME_OBJECT_FRAME = (timestamp) =>{    //timestamp返回系统当下的时间和日期
    for(let obj of game_objects){  //for-of循环，可以枚举数组中的值，以及对象中的value
        if(!obj.has_call_start){
            obj.start();
            obj.has_call_start = true;
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(GAME_OBJECT_FRAME);  //每秒执行60次GAME_OBJECT_FRAME函数
}
requestAnimationFrame(GAME_OBJECT_FRAME);

export{
    Game_Object
}
