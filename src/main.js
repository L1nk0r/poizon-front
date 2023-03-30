import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import axios from "axios";

import '../public/styles.css'

const store = createStore({
   state: {
      BACKEND_URL: "http://localhost:3000",
      products: []
   },
   mutations: {
      SET_PRODUCTS_TO_STATE: (state, products) => {
         products.forEach((element) => {
            state.products.push(element);
         })
      }
   },
   actions: {
      GET_PRODUCTS_FROM_API({ commit }) {
         return axios(`${this.getters.getServerUrl}/products`, {
            method: "GET"
         })
         .then((response) => {
            commit("SET_PRODUCTS_TO_STATE", response.data);
            console.log(response.data);
            return response;
         })
         .catch((error) => {
            console.log(error);
            return error;
         })
      }
   },
   getters: {
      getServerUrl: (state) => {
         return state.BACKEND_URL;
      },
      PRODUCTS(state) {
         return state.products
      }
   }
})

const app = createApp(App);
app.use(store);

app.mount('#app');
