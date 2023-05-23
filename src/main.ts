import 'ant-design-vue/dist/antd.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import * as Icons from '@ant-design/icons-vue'
import baiduMap from 'vue3-baidu-map-gl'
const app = createApp(App)
const icons: any = Icons;
app.use(Antd)
app.use(createPinia())
app.use(router)
for (const i in icons) {
    app.component(i, icons[i]);
}

app.use(baiduMap, {
    ak: 'xRuQp5i12DFNvGKI084myKa1qGi3IR0w',
    plugins: ['TrackAnimation']
})
app.mount('#app')
