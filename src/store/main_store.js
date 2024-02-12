import {createStore} from 'vuex'
import pokState from './state'
import pokGetters from './getters'
import pokeMutations from './mutations'
import pokeActions from './actions'

export default new createStore({
    state:pokState,
    getters:pokGetters,
    mutations:pokeMutations,
    actions:pokeActions
})
