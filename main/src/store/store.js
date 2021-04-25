import vue from "vue";
import vuex from "vuex";
vue.use(vuex);

// fake data
import FakeProducts from "@/fakeProducts.json";
import axios from "axios";
import fakeJson from "@/fakeJson.json"

export const store = new vuex.Store({
    state: {
        todo: null,
        jsonData: FakeProducts,
        json: fakeJson,
        vendors: [],
        mainProductArray : [],
    },

    getters: {

        productCount(state) {
            let newArray = state.jsonData.map((vendor) => vendor.productsArray)
            return newArray.flat().length
        },

        // filterVendor: state => {
        //     let cart = state.todo.cart;
        //     cart.forEach(element => {
        //         let vendorTitle = element.vendor.title;

        //         cart.forEach(element => {
        //             if (element.vendor.title == vendorTitle) {
        //                 console.log("we have two the same vendor !", vendorTitle);
        //                 state.vendors.push(element);
        //                 console.log(state.vendors);
        //             }

        //         });

        //     });
        // }

        filtervendor: state => {

            let cart = state.todo.cart;
            cart.forEach(element => {
                let firstShopTitle = element.vendor.title;
                cart.forEach(element => {
                    let parametr = 1;
                    let secondShopTitle = element.vendor.title;
                    if (firstShopTitle == secondShopTitle) {
                        state.vendors.forEach(element => {
                            if (element.title == secondShopTitle) {
                                parametr *= -1;
                            }
                        });

                        if (parametr == 1) {
                            state.vendors.push({ title: secondShopTitle, cartContent: element.vendor , cart : [] });
                        }

                    }
                });
            });


            console.log("vendors in state is => ",state.vendors); 


            state.vendors.forEach((element,index) => {
                let shopTitle = element.title ; 
                let turn = index ;
                cart.forEach(element => {
                    let vendorTitle = element.vendor.title ;
                    if(vendorTitle == shopTitle){
                        state.vendors[turn].cart.push(element) ;
                        console.log("main product array is => ",state.vendors) ;
                    }
                });
            }) ;

        },
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