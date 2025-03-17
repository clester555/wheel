import { Word } from "./word.js";

export class Wordlist{
    words = [];
    list_size = 0;
    
    constructor(){
        
    }

    load_lesson18(){

        let q  = 0;

        this.words[q].english = "escape";
        this.words[q].chinese = "逃跑";
        this.words[q].pinyin = "táopǎo";

        this.words[q+1].english = "hidden";
        this.words[q+1].chinese = "隐藏的";
        this.words[q+1].pinyin = "yǐncángde";

        this.words[q+2].english = "about to";
        this.words[q+2].chinese = "即将";
        this.words[q+2].pinyin = "jíjiāng";

        
       
    }
}