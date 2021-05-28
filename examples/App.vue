<template>
  <div id="app">
    <x-lazy-load
      dom-class="v1"
      :dom-attrs="['uid']"
      :times="2"
      :had-mounted-number="lazyLoadMountedNumber"
      @handleLazyData="handleLazyData"
    >
      <div class="v1" :key="list.key" :uid="list.uid" :lazyid="list.key" v-for="(list) in lists">
        {{ list.content }}
      </div>
    </x-lazy-load>

    <button @click="addList">添加dom</button>   <button @click="delList">删除dom</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.lazyLoadMountedNumber = this.lists.length;
  },
  data() {
    return {
      lazyLoadMountedNumber: 0,
      lists: [
        {
          key: 'k1',
          uid: '1',
          content: 'k1',
        },
        {
          key: 'k2',
          uid: '2',
          content: 'k2',
        },
        {
          key: 'k3',
          uid: '3',
          content: 'k3',
        },
        {
          key: 'k4',
          uid: '4',
          content: 'k4',
        },
        {
          key: 'k5',
          uid: '5',
          content: 'k5',
        },
        {
          key: 'k6',
          uid: '6',
          content: 'k6',
        },
        {
          key: 'k7',
          uid: '7',
          content: 'k7',
        },
      ],
    };
  },
  methods: {
    addList() {
      let curNumber = 1;
      if (this.lists.length > 0) {
        const lastList = this.lists.pop();
        curNumber = parseInt(lastList.uid, 10) + 1;
      }
      const listData = {
        key: `k${curNumber}`,
        uid: curNumber,
        content: `k${curNumber}`,
      };
      this.lists.push(listData);
    },
    delList() {
      this.lists.splice(0, 1);
    },
    handleLazyData(data) {
      console.log(`已显示的：${data}`);
    },
  },
};
</script>

<style scoped>
  div {
    width: 500px;
    height: 300px;
  }
</style>
