<template>
  <div class="">
    <img src="@/assets/indexHeader.png" style="width:100%;height: 400px">
    <div class="Visual_map">
      <img src="@/assets/VillageMap.png" alt="">
      <div>
        <label>
          <input type="checkbox" v-model="mapSetting.enableScrollWheelZoom" />
          鼠标缩放
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="mapSetting.enableDragging" />
          拖拽
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="mapSetting.enableInertialDragging" />
          惯性拖拽
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="mapSetting.enablePinchToZoom" />
          双指缩放地图
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="mapSetting.enableKeyboard" />
          键盘操作
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="mapSetting.enableDoubleClickZoom" />
          双击缩放，左键双击放大、右键双击缩小
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="mapSetting.enableContinuousZoom" />
          双击平滑缩放效果
        </label>
        <br />
        <label>
          <input type="checkbox" v-model="mapSetting.enableTraffic" />
          显示交通路况
        </label>
        <br />
        <br />
        地图类型：
        <select name="" id="" v-model="type">
          <option value="BMAP_NORMAL_MAP">常规地图 BMAP_NORMAL_MAP</option>
          <option value="BMAP_EARTH_MAP">地球模式 BMAP_EARTH_MAP</option>
          <option value="BMAP_SATELLITE_MAP">卫星图 BMAP_EARTH_MAP</option>
        </select>
        <br />
        <br />
        <BMap
            :heading="64.5"
            :tilt="73"
            :center="{
        lng: 116.28019,
        lat: 40.049191
      }"
            :zoom="19"
            :minZoom="3"
            :mapType="type"
            :enableDragging="mapSetting.enableDragging"
            :enableInertialDragging="mapSetting.enableInertialDragging"
            :enableScrollWheelZoom="mapSetting.enableScrollWheelZoom"
            :enableContinuousZoom="mapSetting.enableContinuousZoom"
            :enableDoubleClickZoom="mapSetting.enableDoubleClickZoom"
            :enableKeyboard="mapSetting.enableKeyboard"
            :enablePinchToZoom="mapSetting.enablePinchToZoom"
            :enableTraffic="mapSetting.enableTraffic"
        />
      </div>
    </div>
    <div class="Dynamic">
      <img src="@/assets/DynamicHeader.png" alt="">
    </div>
    <div class="Recommend">
      <img src="@/assets/RecommendHeader.png" alt="">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { MapType, MapProps } from 'vue3-baidu-map-gl'
const type = ref<MapType>('BMAP_NORMAL_MAP')
const mapSetting = ref<MapProps>({
  enableDragging: true,
  enableInertialDragging: true,
  enableScrollWheelZoom: false,
  enableContinuousZoom: true,
  enableResizeOnCenter: true,
  enableDoubleClickZoom: false,
  enableKeyboard: true,
  enablePinchToZoom: true,
  enableAutoResize: true,
  enableTraffic: false
})
</script>
<style>

</style>
