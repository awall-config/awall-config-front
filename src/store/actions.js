import {LISTED_INTERFACES} from './mutation_types'
import injector from 'vue-inject'

let encase = injector.encase.bind(injector)

export default {
  listInterfaces: encase(['awallApiService'], (api) => async ({commit}) => {
    
    let interfaces = await api.listInterfaces()

    commit(LISTED_INTERFACES, {interfaces: interfaces})

  })
}
