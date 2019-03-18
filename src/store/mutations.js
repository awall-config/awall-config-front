import {LISTED_INTERFACES, UPDATED_ZONE, UPDATED_VARIABLE, UPDATED_DNAT,
  UPDATED_POLICY, UPDATED_SERVICE, UPDATED_FILTER, UPDATED_SNAT} from './mutation_types'

import _ from 'lodash';

function updateOrInsertInArray(arr, element, matcher) {
  let changed = false
  arr.forEach ( i => {
    if (matcher(i,element)) {
      _.assign(i,element)
      changed = true
    }
  });

  if (!changed) {
    arr.push(element);
  }
}

export default {
  [LISTED_INTERFACES]: function(state, {interfaces}) {
    state.interfaces = interfaces
  },

  [UPDATED_ZONE]: function(state, {zone}) {
    updateOrInsertInArray(state.zones, zone, (i1, i2) => i1.iface === i2.iface)

    state.updated = true
  },
  
  [UPDATED_VARIABLE]: function(state, {variable}) {
    updateOrInsertInArray(state.variables, variable, (i1, i2) => i1.key === i2.key)

    state.updated = true
  },

  [UPDATED_POLICY]: function(state, {policy, index}) {
    state.policies[index] = policy

    state.updated = true
  },

  [UPDATED_SERVICE]: function(state, {service}) {
    updateOrInsertInArray(state.services, service, (i1, i2) => i1.name === i2.name)

    state.updated = true
  },

  [UPDATED_FILTER]: function(state, {filter, index}) {
    state.filters[index] = filter

    state.updated = true
  },

  [UPDATED_SNAT]: function(state, {snat}) {
    state.snat = snat

    state.updated = true
  },

  [UPDATED_DNAT]: function(state, {dnat, index}) {
    state.dnat[index] = dnat
    
    state.updated = true
  },
}