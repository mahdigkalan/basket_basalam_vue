import vue from "vue";
import vuex from "vuex";
vue.use(vuex);

// fake data
import FakeProducts from "@/fakeProducts.json";


export const store = new vuex.Store({
    state: {
        tode : null ,
        jsonData : FakeProducts ,
    },

    getters: {
        productCount(state) {
            let newArray = state.jsonData.map((vendor) => vendor.productsArray)
            return newArray.flat().length
        },
    },

    mutations: {
        ADD_TODO_TO_STATE(state, payload) {
            state.todo = payload
        } 
    },

    actions: {
        getApi(context, apiUrl) {

            fetch(apiUrl.url)
                .then(response => response.json())
                .then(json => { context.commit('ADD_TODO_TO_STATE', json) })
        },
    },
});