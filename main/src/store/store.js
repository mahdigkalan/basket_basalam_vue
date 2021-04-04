import vue from "vue" ;
import vuex from "vuex" ;
vue.use(vuex) ;

export const store = new vuex.Store({
    state: {
        count : 3 ,
        cost : 5 ,
        final : 0 , 
    } ,
    getters:{
        checkCost : state => {
            return state.final ;
        }
    }
});