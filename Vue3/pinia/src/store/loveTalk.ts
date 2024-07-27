import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

export const useTalkStore = defineStore('talk',{
  actions:{
    async getATalk(){
      //发请求
      let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      //把请求回来的字符串，包装成一个对象
      let obj={id:nanoid(),title:title}
      this.talkList.unshift(obj)

    }
  },

  //真正存储数据的地方
  state(){
    return{
      talkList:[
        {id:'001',title:'嘎嘎嘎'},
        {id:'002',title:'嘎嘎嘎噶'},
        {id:'003',title:'嘎嘎嘎嘎嘎'},
        {id:'004',title:'嘎嘎嘎嘎嘎嘎'},
      ]
    }
  }
})