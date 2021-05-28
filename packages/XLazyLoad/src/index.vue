<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-lazy-load',
  props: {
    domClass: String,
    domAttrs: Array,
    times: Number,
    hadMountedNumber: Number,
  },
  data() {
    return {
      lazyIns: null,
      lazyTimes: {},
    };
  },
  watch: {
    hadMountedNumber() {
      this.setObserve();
    },
  },
  methods: {
    setObserve() {
      this.$nextTick(() => {
        Array.from(document.querySelectorAll(`.${this.domClass}`)).forEach((dom) => {
          this.lazyIns.observe(dom);
        });
      });
    },
    setTimes(lazyId) {
      if (!this.lazyTimes[lazyId]) {
        this.lazyTimes[lazyId] = 1;
      } else {
        this.lazyTimes[lazyId] += 1;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.lazyIns = new IntersectionObserver(
        (changes) => {
          changes.forEach((change) => {
            if (change.intersectionRatio > 0) {
              const attrValues = {};
              const targetDom = change.target.attributes;
              // 只记录有唯一标识符的dom
              if (targetDom.lazyid && targetDom.lazyid.value) {
                const lazyId = targetDom.lazyid.value;
                // 获取当前记录的次数
                let loadTimes = 0;
                if (this.lazyTimes[lazyId]) {
                  loadTimes = this.lazyTimes[lazyId];
                }
                if (loadTimes < this.times) {
                  this.setTimes(lazyId);
                  this.domAttrs.forEach((attr) => {
                    attrValues[lazyId] = {
                      [attr]: targetDom[attr].value,
                    };
                  });
                  this.$emit('handleLazyData', attrValues);
                }
              }
            }
          });
        },
      );
    });
  },
};
</script>
