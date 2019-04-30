<template>
  <div class="apartment-list">
    <h1 class="apartment-list__title">Available apartments</h1>
    <!-- Pass data to new dynamic list component -->
    <dynamic-list class="apartment-list__list" :data="apartmentData"/>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6rem;
  &__logo {
    width: 16rem;
  }
}
</style>
