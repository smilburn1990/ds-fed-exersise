<template>
  <div>
    <lazy-component class="dynamic-list" v-for="(item, i) in data" :key="i" @click.native="detailNumber = i">
      <div class="dynamic-list__left" v-show="detailNumber === i">
        <img class="dynamic-list__left--image" :src="item.image_src"/>
        <h3 class="dynamic-list__left--price">{{ item.price | currencyParse }}</h3>
        <h3 class="dynamic-list__left--price" :style="item.status === 'available' ? 'background-color:#04BAB3' : 'background-color:#ff4c4c'">{{ item.status }}</h3>
      </div>
      <div class="dynamic-list__right">
        <h2>{{ item.name }}</h2>
        <p v-show="detailNumber === i">{{ item.desc }}</p>
      </div>
    </lazy-component>
  </div>
</template>

<script>
export default {
  name: 'DynamicList',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      detailNumber: null
    }
  }
}
</script>

<style scoped lang="scss">
.dynamic-list {
  cursor: pointer;
  width: 100%;
  display: flex;
  padding: 2rem;
  background-color: #000;
  line-height: 1.7rem;
  color: #FFF;
  font-weight: 600;
  margin: 1rem 0;
  &:hover {
    transform: scale(1.01);
    opacity: 0.9;
  }
  &__left {
    padding: 1.5rem 0;
    width: 20%;
    text-align: center;
    &--image {
      width: 15rem;
    }
    &--price {
      text-align: center;
      margin: 0.3rem 0;
    }
  }
  &__right {
    padding: 0 2rem;
    width: 80%;
  }
}
</style>