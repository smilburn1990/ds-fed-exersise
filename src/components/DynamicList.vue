<template>
  <div>
    <lazy-component class="dynamic-list" v-for="(item, i) in data" :key="i" @click.native="detailNumber = i">
      <div class="dynamic-list__left" v-show="detailNumber === i">
        <img class="dynamic-list__left--image" :src="item.image_src"/>
        <h3 class="dynamic-list__left--price">{{ item.price | currencyParse }}</h3>
        <h3 class="dynamic-list__left--status" :style="item.status === 'available' ? 'background-color:#04BAB3' : 'background-color:#ff4c4c'">{{ item.status }}</h3>
      </div>
      <div class="dynamic-list__right">
        <h2 class="dynamic-list__right--name">{{ item.name }}</h2>
        <p class="dynamic-list__right--description" v-show="detailNumber === i">{{ item.desc }}</p>
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
    padding: 2rem;
    background-color: #000;
    line-height: 1.7rem;
    display: flex;
    @media (min-width: 320px) and (max-width: 767px) {
      display: block;
    }
    color: #FFF;
    font-weight: 600;
    margin: 1rem 0;
    &:hover {
      transform: scale(1.01);
      opacity: 0.9;
    }
    &__left {
      padding: 1.5rem 0;
      @media (min-width: 768px) and (max-width: 1024px) {
        width: 50%;
      }
      @media (min-width: 320px) and (max-width: 767px) {
        width: 100%;
      }
      width: 30%;
      text-align: center;
      &--image {
        width: 100%;
      }
      &--price {
        text-align: center;
        margin: 0.3rem 0;
      }
    }
    &__right {
      padding: 0 2rem;
      width: 70%;
      @media (min-width: 768px) and (max-width: 1024px) {
        width: 50%;
      }
      @media (min-width: 320px) and (max-width: 767px) {
        width: 100%;
      }
      &--name,
      &--description {
        @media (max-width: 767px) {
          text-align: center;
        }
      }
    }
  }
</style>