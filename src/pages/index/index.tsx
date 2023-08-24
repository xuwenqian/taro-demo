import { View, Text,Canvas } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const draw1 = ()=>{
      const context = Taro.createCanvasContext('canvas')
      context.setStrokeStyle('#00ff00')
      context.setLineWidth(5)
      context.rect(0, 0, 100, 100)
      context.stroke()
      context.draw()

  }

  return (
    <View className='index'>
      <Text onClick={draw1}>canvas rect(0, 0, 100, 100)</Text>
      <Canvas canvasId="canvas" style='width:200px;height:200px'></Canvas>
    </View>
  )
}
