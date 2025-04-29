<template>
  <div class="app">
    <header>
      <div class="infoCard">
        <div class="info">
          <img src="./assets/image-jeremy.png" alt="">
          <div class="name">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div class="tabs">
          <ul>
            <li
            v-for="item in dayList"
            :key="item.id"
            @click="handleTabClick(item.id)"
            :class="{ active:item.id === currentTab }"
            >{{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <TimeCard
      v-for="item in dataList"
      :key="item.title"
      :item="item"
      :timeframe="currentLabel"></TimeCard>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import TimeCard from './components/TimeCard.vue'
export default {
  name: 'App',
  components: {
    TimeCard
  },
  data () {
    return {
      dayList: [
        { id: 1, name: 'Daily', timeframe: 'daily', Label: 'Day' },
        { id: 2, name: 'Weekly', timeframe: 'weekly', Label: 'Week' },
        { id: 3, name: 'Monthly', timeframe: 'monthly', Label: 'Month' }
      ],
      currentTab: 2, // Default selected Weekly
      currentTimeframe: 'weekly', // Current time range
      currentData: [], // Current data
      dataList: [],
      currentLabel: 'Week'
    }
  },
  methods: {
    handleTabClick (id) {
      this.currentTab = id
      const selectedTab = this.dayList.find(item => item.id === id)
      this.currentTimeframe = selectedTab.timeframe
      this.currentLabel = selectedTab.Label
      this.getDailyData(this.currentTimeframe)
      // console.log(this.currentLabel)
    },
    // async getDailyData (timeframe) {
    //   const { data } = await axios.get(`http://localhost:3000/${timeframe}Activities`)
    //   this.dataList = data
    // }
    async getDailyData (timeframe) {
      const { data } = await axios.get('/data.json')
      if (timeframe === 'daily') {
        this.dataList = data.dailyActivities
      } else if (timeframe === 'weekly') {
        this.dataList = data.weeklyActivities
      } else if (timeframe === 'monthly') {
        this.dataList = data.monthlyActivities
      }
    }
    // easy
    // async getDailyData (timeframe) {
    //   const { data } = await axios.get('/data.json')
    //   this.dataList = data[`${timeframe}Activities`] || []
    // }
  },
  created () {
    this.getDailyData(this.currentTimeframe)
  }
}
</script>

<style lang="less">
@import '@/style/style.less';
</style>
