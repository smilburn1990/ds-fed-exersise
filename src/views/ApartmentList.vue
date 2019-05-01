<template>
<div class="apartment-list">
  <iframe class="apartment-list__loading" v-if="loading" src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40"></iframe>
  <div class="apartment-list__container" v-if="!loading">
    <h1 class="apartment-list__container--title">Available apartments</h1>
    <!-- Pass data to new dynamic list component -->
    <dynamic-list class="apartment-list__container--list" :data="filterApartmentData"/>
  </div>
</div>
</template>

<script>
// Import new DynamicList component
import { mapActions, mapGetters, mapState } from 'vuex'
import DynamicList from '@/components/DynamicList'

export default {
  name: 'ApartmentList',
  // Define new DynamicList component
  components: {
    DynamicList
  },
  async mounted() {
    await this.fetchApartmentList();
  },
  computed: {
    ...mapGetters(['filterApartmentData']),
    ...mapState({
      apartmentData: state => state.apartmentList,
      loading: state => state.loading
    })
  },
  methods: {
    ...mapActions([
      'fetchApartmentList'
    ])
  }
}
</script>

<style scoped lang="scss">
.apartment-list {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1024px) {
      padding: 0 2rem;
    }
    &--logo {
      width: 16rem;
    }
    &--list {
      width: 100%;
    }
  }
  &__loading {
    width: 100%;
    border: none;
  }
}
</style>