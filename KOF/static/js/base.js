import{Game_Map} from '/static/js/game_map/base.js';
import { Kyo } from '/static/js/player/kyo.js';

class KOF{
    constructor(id){
        this.$kof = $('#'+ id );
        this.game_map = new Game_Map(this);
        this.players = [       //两个player 实例化对象传入this和info，info用数据字典表示
            new Kyo(this,{
                id:0,
                x:200,
                y:0,
                width:150,
                height:200,
                color:'white',
            }),
            new Kyo(this,{
                id:1,
                x:900,
                y:0,
                width:150,
                height:200,
                color:'red',
            })
        ];

    }
}

export{
    KOF
}
