import { Sentence } from "./sentence.js";

export class Sentence_List {

    sentences = [];
    numOfSenteneces = 0;

    constructor(){

    }

    load_Lesson18(){
        for(let q=0+this.numOfSenteneces;q<10+this.numOfSenteneces;q++){
            this.sentences[q] = new Sentence();
        }
        let q = 0+this.numOfSenteneces;
        this.sentences[q].english = "Soon the ogre's wife left the room";
        this.sentences[q].chinese = "不久食人魔的妻子就离开了房间";
        this.sentences[q].pinyin = "Bùjiǔ shí rén mó de qīzǐ jiù líkāile fángjiān";

        q+=1;
        this.sentences[q].english = "Jack stayed hidden in the oven";
        this.sentences[q].chinese = "杰克一直藏在烤箱里";
        this.sentences[q].pinyin = "Jiékè yīzhí cáng zài kǎoxiāng lǐ";

        q+=1;
        this.sentences[q].english = "He watched the ogre";
        this.sentences[q].chinese = "他看着食人魔";
        this.sentences[q].pinyin = "Tā kànzhe shí rén mó";

        q+=1;
        this.sentences[q].english = "Jack knew what was about to happen";
        this.sentences[q].chinese = "杰克知道接下来会发生什么";
        this.sentences[q].pinyin = "Jiékè zhīdào jiē xiàlái huì fāshēng shénme";

        q+=1;
        this.sentences[q].english = "First, the ogre's head began to nod";
        this.sentences[q].chinese = "首先食人魔的头开始点头";
        this.sentences[q].pinyin = "Shǒuxiān shí rén mó de tóu kāishǐ diǎntóu";
        
        q+=1;
        this.sentences[q].english = "The whole house shook from the snoring";
        this.sentences[q].chinese = "鼾声震得整座房子都震动了";
        this.sentences[q].pinyin = "Hānshēng zhèn dé zhěng zuò fángzǐ dōu zhèndòngle";

        q+=1;
        this.sentences[q].english = "Jack slipped out of the oven";
        this.sentences[q].chinese = "杰克从烤箱里溜出来";
        this.sentences[q].pinyin = "Jiékè cóng kǎoxiāng lǐ liū chūlái";

        q+=1;
        this.sentences[q].english = "Moving quickly, he grabbed the hen";
        this.sentences[q].chinese = "他迅速行动，抓住了母鸡";
        this.sentences[q].pinyin = "Tā xùnsù xíngdòng, zhuā zhùle mǔ jī";

        q+=1;
        this.sentences[q].english = "Then he raced for the door";
        this.sentences[q].chinese = "然后他冲向门口";
        this.sentences[q].pinyin = "Ránhòu tā chōng xiàng ménkǒu";

        q+=1;
        this.sentences[q].english = "Jack stayed very quiet";
        this.sentences[q].chinese = "杰克保持非常安静";
        this.sentences[q].pinyin = "Jiékè bǎochí fēicháng ānjìng";

        q+=1;
        this.sentences[q].english = "But the hen didn't stay quiet";
        this.sentences[q].chinese = "但是母鸡没有保持安静";
        this.sentences[q].pinyin = "Dànshì mǔ jī méiyǒu bǎochí ānjìng";

        q+=1;
        this.sentences[q].english = "Instead it made a lot of noise";
        this.sentences[q].chinese = "相反它发出了很多噪音";
        this.sentences[q].pinyin = "Xiāngfǎn tā fāchūle hěnduō zàoyīn";

        q+=1;
        this.sentences[q].english = "The ogre woke up";
        this.sentences[q].chinese = "食人魔醒了";
        this.sentences[q].pinyin = "Shí rén mó xǐngle";

        q+=1;
        this.sentences[q].english = "He wiped his eyes";
        this.sentences[q].chinese = "他擦了擦眼睛";
        this.sentences[q].pinyin = "Tā cāle cā yǎnjīng";

        q+=1;
        this.sentences[q].english = "Jack darted behind the door";
        this.sentences[q].chinese = "杰克冲到门后";
        this.sentences[q].pinyin = "Jiékè chōng dào mén hòu";

        q+=1;
        this.sentences[q].english = "The ogre stared at the empty table in surprise.";
        this.sentences[q].chinese = "食人魔惊讶地盯着空桌子";
        this.sentences[q].pinyin = "Shí rén mó jīngyà de dīngzhe kōng zhuōzǐ";

        q+=1;
        this.sentences[q].english = "The ogre stared at the empty table in surprise.";
        this.sentences[q].chinese = "食人魔惊讶地盯着空桌子";
        this.sentences[q].pinyin = "Shí rén mó jīngyà de dīngzhe kōng zhuōzǐ";


    }

    load_lesson19(){
        let q = this.numOfSenteneces;
        this.sentences[q] = new Sentence();
        this.sentences[q].english = "At last Jack reached the bottom of the beanstalk.";
        this.sentences[q].chinese = "最后杰克到达了豆茎的底部";
        this.sentences[q].pinyin = "Zuìhòu jiékè dàodále dòujīng de dǐbù";
    

        q+=1;this.sentences[q] = new Sentence();
        this.sentences[q].english = "He ran into his house";
        this.sentences[q].chinese = "他跑进了他的房子";
        this.sentences[q].pinyin = "Tā pǎo jìnle tā de fángzǐ";

        q+=1;this.sentences[q] = new Sentence();
        this.sentences[q].english = "He was still carrying the golden hen";
        this.sentences[q].chinese = "他手里还抱着那只金母鸡";
        this.sentences[q].pinyin = "Tā shǒu lǐ hái bàozhe nà zhǐ jīn mǔ jī";

        q+=1;this.sentences[q] = new Sentence();
        this.sentences[q].english = "I want to show you something";
        this.sentences[q].chinese = "我想给你看点东西";
        this.sentences[q].pinyin = "Wǒ xiǎng gěi nǐ kàn diǎn dōngxī";

        q+=1;this.sentences[q] = new Sentence();
        this.sentences[q].english = "Mother ran into the room";
        this.sentences[q].chinese = "妈妈跑进了房间";
        this.sentences[q].pinyin = "Māmā pǎo jìnle fángjiān";

        q+=1;this.sentences[q] = new Sentence();
        this.sentences[q].english = "Jack placed the golden hen on the table";
        this.sentences[q].chinese = "杰克把金母鸡放在桌子上";
        this.sentences[q].pinyin = "Jiékè bǎ jīn mǔ jī fàng zài zhuōzǐ shàng";

        q+=1;this.sentences[q] = new Sentence();
        this.sentences[q].english = "Mother clapped as the hen laid an egg";
        this.sentences[q].chinese = "母鸡下蛋时妈妈鼓掌";
        this.sentences[q].pinyin = "Mǔ jī xiàdàn shí māmā gǔzhǎng";

        q+=1;this.sentences[q] = new Sentence();
        this.sentences[q].english = "Mother will never cry again, he thought.";
        this.sentences[q].chinese = "母鸡下蛋时妈妈鼓掌";
        this.sentences[q].pinyin = "Mǔ jī xiàdàn shí māmā gǔzhǎng";


        



}


}