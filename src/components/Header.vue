<template>
    <div class="header-container">
        <div class="header">
            <div class="left-container">
                <div class="header-title">NFTdollars</div>
                <div class="header-navigation">
                  <div v-for="tab in tabs" :key="tab.path" :class="{ active: isActiveTab(tab.path) }" @click="navigate(tab.path)">
                    {{ tab.label }}
                    <div class="color-block" v-if="isActiveTab(tab.path)"></div>
                  </div>

                </div>
            </div>
            <div class="right-container">
                <div class="NTF-info">
                    <div class="wallet-avatar"><img src="@/assets/headerCenter.png" width="200px" height="44px"></div>
                    <a-input></a-input>
                  <search-outlined />
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import router from "@/router/index.ts";
const tabs = [
  { label: '首页', path: '/' },
  { label: '云库', path: '/cloud' },
  { label: '互动交流', path: '/wallet' },
  { label: '文创商城', path: '/riskyTrove' },
  { label: '个人中心', path: '' },
];

const navigate = (path) => {
  router.push(path);
};

const isActiveTab = (path) => {
  return router.currentRoute.value.path === path;
};
</script>
    
<style scoped>
.header-container {
    width: 100%;
    height: 62px;
    background: url("@/assets/headerBackground.png") no-repeat;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left-container {
    display: flex;
    width: 413px;
    height: 34px;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
}
.wallet-avatar{

  margin-right: 315px;

}
.header-title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 22.5px;
    line-height: 34px;
    text-align: center;
}

.header-navigation {
    width: 188px;
    height: 18px;
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28.74px;
    color: rgba(43, 43, 43, 1);
    text-align: center;

}
.header-navigation div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding-bottom: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.header-navigation div.active {
  display: flex;
  color: orange;

}
.color-block {
  width: 28px;
  height: 10px;
  border-radius: 5px; /* 控制椭圆形的圆角半径 */
  background-color: orange;
}
.header-navigation div{
  margin: 0 10px 0 10px;
  white-space: nowrap;
}
.right-container{
  display: flex;
  height: 34px;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
}
.right-container .el-button{
  box-sizing: border-box;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 30px;
  gap: 10px;
  width: 154px;
  height: 34px;
  border: 1.5px solid #FBF8F0;
  border-radius: 22.125px;
}
.NTF-info{
  display: flex;
  flex-direction: row;
  margin-right: 100px;
}
.header-button {
    width: 154px;
    height: 34px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #FBF8F0;
    background-color: transparent;
    border: 1.5px solid #FBF8F0;
    border-radius: 22.125px;
}
.ant-input{
  width: 147px;
  height: 34.26px;
  opacity: 1;
  border-radius: 37.91px;
  background: rgba(255, 255, 255, 0.7);
}
</style>