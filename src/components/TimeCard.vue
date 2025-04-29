<template>
  <div class="card" :style="{ backgroundColor: getCardColor(item.title) }">
    <img :src="require(`@/assets/icon-${item.title.toLowerCase().replace(' ', '-')}.svg`)" alt="">
    <div class="context">
      <div class="dashboard-title">
        <h2>{{item.title}}</h2>
        <div class="icon-ell">
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
        </div>
      </div>
      <div class="time">
        <p>{{item.current}}hrs</p>
        <span>Last {{timeframe}} - {{item.previous}}hrs</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    timeframe: {
      type: String
    }
  },
  methods: {
    getCardColor (title) {
      const colors = {
        work: 'hsl(15, 100%, 70%)',
        play: 'hsl(195, 74%, 62%)',
        study: 'hsl(348, 100%, 68%)',
        exercise: 'hsl(145, 58%, 55%)',
        social: 'hsl(264, 64%, 52%)',
        'self-care': 'hsl(43, 84%, 65%)'
      }
      return colors[title.toLowerCase().replace(' ', '-')]
    }
  },
  created () {
    console.log(this.timeframe)
  }
  // computed: {
  //   capitalizedTimeframe () {
  //     return this.timeframe.charAt(0).toUpperCase() + this.timeframe.slice(1)
  //   }
  // }
}
</script>

<style lang="less" scoped>
.card {
  // background-color: @orange-300-work;
  height: 160px;
  border-radius: 10px;
  width: 328px;
  margin: 25px auto;
  padding-top: 36px;
  position: relative;
  overflow: hidden;
  img {
      position: absolute;
      top: -15px;
      right: 20px;
      z-index: 2;
    }
  .context {
    cursor: pointer;
    background-color: @neutral-navy-900;
    height: 125px;
    width: 100%;
    border-radius: 10px;
    position: absolute;
    z-index: 3;
    .dashboard-title {
      width: 280px;
      display: flex;
      justify-content: space-between;
      margin: 30px 0 0 24px;
      h2 {
        font-size: 18px;
        font-weight: 400;
      }
    }
    .time {
      width: 280px;
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      align-items: center;
      margin-left: 24px;
      p {
        font-size: 31px;
        font-weight: 200;
      }
      span {
        font-size: 15px;
        color: @neutral-navy-200;
      }
    }
  }
}

@media (min-width: 768px) {
  .card {
    width: 100%;
    height: 244px;
    max-width: 256px;
    margin: 0;
    padding-top: 46px;
    &:hover {
      .context {
        background-color: rgb(52, 57, 123); // 你可以改成你想要的颜色
      }
    }
    .context {
      height: 200px;
      padding: 30px;
      .icon-ell:hover {
        svg path {
          fill: #ffffff; // 图标变白
        }
      }
      .dashboard-title {
        margin: 0;
        width: 100%;
      }
      .time {
        margin: 25px 0 0 0;
        width: 100%;
        flex-wrap: wrap;
        p {
          font-size: 55px;
        }
        span {
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
