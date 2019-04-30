import Vue from 'vue';
import Vuex from 'vuex';
import * as api from '@/api/urls.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apartmentList: [],
    loading: true
  },
  mutations: {
    SET_APARTMENT_LIST(state, payload) {
      state.apartmentList = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    fetchApartmentList: ({ commit }) => {
      api.getApartmentList()
        .then(response => {
          commit('SET_APARTMENT_LIST', response.data);
          commit('SET_LOADING', false);
        })
        .catch(err => {
          commit('SET_LOADING', false);
          commit('SET_APARTMENT_LIST', false);
          console.error(err);
        });
    },
  },
  getters: {
    filterApartmentData: state => state.apartmentList.filter(apartment => apartment.active)
  }
});
