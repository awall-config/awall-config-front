<template>
<div>
    <div>Use this screen to define dnat rules, i.e. port forwarding rules allowing redirecting
      port on an interface to a specific host on another interface
    </div>
    <v-btn icon color="primary" @click="addDnat">
      <v-icon>add</v-icon>
    </v-btn>
    <form>
      <v-container fluid>
        <v-layout row>
          <v-flex xs3>In</v-flex>
          <v-flex xs3>Destination</v-flex>
          <v-flex xs3>Service</v-flex>
          <v-flex xs3>Destination port</v-flex>
        </v-layout>
        <div v-for="(d,i1) in dnat" :key="i1" >
          <v-layout row>
            <v-flex xs3>
              <v-autocomplete v-model="d.in" :items="inAutoCompleteItems" @change="updateDnat(d, i1)"/>
            </v-flex>
            <v-flex xs3>
              <v-autocomplete v-model="d.dest" :items="destAutoCompleteItems" @change="updateDnat(d, i1)"/>
            </v-flex>
            <v-flex xs3>
              <v-select v-model="d.service" :items="services" @change="updateDnat(d, i1)"/>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-model="d.toPort" @change="updateDnat(d, i1)"/>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </form>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: "Dnat",
  computed: {
    ...mapState({
      dnat: (s) => s.dnat,
      services: (s) => s.services.map( serv => serv.name),
      inAutoCompleteItems: (s) => {
        let items = s.variables.map( v => '$' + v.key).concat(items)

        items = s.zones.map( z => z.name).concat(items)

        return items
      },
      destAutoCompleteItems: (s) => {
        return s.variables.map(v => '$' + v.key)
      }
    })
  },
  methods: {
    ...mapMutations(['updatedDnat']),
    addDnat: function() {
      this.dnat.push({})
    },
    updateDnat: function(dnat, index) {
      this.updatedDnat({dnat,index})
    }
  }
}
</script>
