import vue from "vue";
import vuex from "vuex";
vue.use(vuex);

// fake data
import FakeProducts from "@/fakeProducts.json";
import axios from "axios";

export const store = new vuex.Store({
    state: {
        todo: null,
        jsonData: FakeProducts,
    },

    getters: {

        productCount(state) {
            let newArray = state.jsonData.map((vendor) => vendor.productsArray)
            return newArray.flat().length
        },

        filterVendor(state) {
            let product = state.todo.cart ;
            
        }
    },

    mutations: {
        // ADD_TODO_TO_STATE(state, payload) {
        //     state.todo = payload
        // } 
        ADD_TODO_TO_STATE(state, payload) {
            state.todo = payload
        }
    },

    actions: {
        // getApi(context, apiUrl) {

        //     fetch(apiUrl.url)
        //         .then(response => response.json())
        //         .then(json => { context.commit('ADD_TODO_TO_STATE', json) })
        // },

        // getApi(context, apiUrl) {
        //     axios
        //         .get(apiUrl.url)
        //         .then((response) => (response.data.data))
        //         .then((json) => { context.commit('ADD_TODO_TO_STATE', json) })
        // }

        async getApi(context, { url }) {
            const result = await axios.get(url)
            context.commit("ADD_TODO_TO_STATE", result.data.data)
        }
    },
});