import {reactive} from 'vue'
import axios from 'axios'

export default function (){
  //数据
  let dogList = reactive([
    'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_6015.jpg'
  ])

  //方法
  async function getDog(){
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(console.log(error))
    }
  }
  //向外部提供东西
  return {dogList,getDog}
}