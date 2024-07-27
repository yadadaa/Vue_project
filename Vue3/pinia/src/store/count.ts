import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{

  //actions里面放置的是一个一个的动作方法，用于响应组件的动作
  actions:{
    increment(value:number){
      console.log('increment被调用',value)
      this.sum += value
    }
  },
  //真正存储数据的地方
  state(){
    return{
      sum:6
    }
  },
  getters:{
    bigSum(state){
      return state.sum *10
    },
   
  }
})