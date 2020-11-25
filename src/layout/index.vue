<template>
  <div class="card" :class="{ 'card--hide': isHide, 'card--full': isFull }">
    <Header />
    <div class="card-container">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
    <div class="card-footer">
      <el-tooltip content="关闭" placement="top" effect="light" :open-delay="tooltipOpenDelay">
        <i class="el-icon-close" @click="hadnleShow" />
      </el-tooltip>
      <el-tooltip v-if="isFull" content="缩小" placement="top" effect="light" :open-delay="tooltipOpenDelay">
        <i class="el-icon-back" @click="isFull = false" />
      </el-tooltip>
      <el-tooltip v-else content="放大" placement="top" effect="light" :open-delay="tooltipOpenDelay">
        <i class="el-icon-right" @click="isFull = true" />
      </el-tooltip>
    </div>

    <div class="card__btn" @click="hadnleShow">
      <svg
        t="1589962875590"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2601"
      >
        <path
          d="M730.020653 1018.946715l91.277028-89.978692a16.760351 16.760351 0 0 0 5.114661-11.803064 15.343983 15.343983 0 0 0-5.114661-11.803064l-400.123871-393.435467L821.691117 118.254899a17.075099 17.075099 0 0 0 0-23.606129L730.020653 4.670079a17.232473 17.232473 0 0 0-23.999564 0L202.030255 500.08402a16.445603 16.445603 0 0 0-4.721226 11.803064 15.265296 15.265296 0 0 0 5.114661 11.803064l503.597399 495.413941a17.153786 17.153786 0 0 0 23.999564 0z m0 0"
          fill="#FFFFFF"
          p-id="2602"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import RouterView from '@/components/RouterView.vue'

export default {
  name: 'Card',
  components: { Header, RouterView },
  data() {
    return {
      isHide: true,
      isFull: false,
      tooltipOpenDelay: 200
    }
  },
  methods: {
    hadnleShow() {
      if (!this.isHide && this.isFull) {
        this.isFull = false
      }
      this.isHide = !this.isHide
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.card {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  height: 100vh;
  width: $card-default-width;
  background-color: $card-backgroud-color;
  transition: all 0.5s;
  // box-shadow: 2px 3px 3px 0 rgba(0,0,0,.1);
  box-shadow: 1px 1px 5px rgba(0,0,0,.2);
  display: flex;
  flex-direction: column;

  &-container {
    flex: 1;
    overflow: auto;
    padding: 10px;
  }

  &-footer {
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 8px rgba(0,0,0,.2);

    i {
      color: #dbdbdb;
      font-size: 26px;
      margin: 0 10px;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        color: $--color-primary;
        transform: scale(1.2, 1.2);
      }
    }
  }
}
.card__btn {
  transition: all 0.5s;
  border-radius: 30px 0 0 30px;
  width: 30px;
  height: 60px;
  background-color: rgb(178, 94, 239);
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  svg {
    height: 20px;
    width: 20px;
    position: absolute;
    right: 5px;
    top: 20px;
    transition: all 0.5s;
  }
}
.card--hide {
  left: -$card-default-width;
  .card__btn {
    border-radius: 0 30px 30px 0;
    right: -30px;
    svg {
      transform: rotate(180deg);
    }
  }
}
.card--full {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
}
</style>
