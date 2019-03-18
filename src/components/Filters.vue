<template>
  <div>
    <div>Use this screen to define filters, i.e. actions done by the firewall depending on the source, 
      destination (ip or zone) and service
    </div>
    <v-btn icon color="primary" @click="addFilter">
      <v-icon>add</v-icon>
    </v-btn>
    <form>
      <v-container fluid>
        <v-layout row>
          <v-flex xs3>In</v-flex>
          <v-flex xs3>Out</v-flex>
          <v-flex xs3>Service</v-flex>
          <v-flex xs3>Action</v-flex>
        </v-layout>
        <div v-for="(f,index) in filters" :key="index" >
          <v-layout row>
            <v-flex xs3>
              <v-autocomplete v-model="f.in" :items="autoCompleteItems" @change="updateFilter(f, index)"/>
            </v-flex>
            <v-flex xs3>
              <v-autocomplete v-model="f.out" :items="autoCompleteItems" @change="updateFilter(f, index)"/>
            </v-flex>
            <v-flex xs3>
              <v-select v-model="f.service" :items="services" @change="updateFilter(f, index)"/>
            </v-flex>
            <v-flex xs3>
              <v-radio-group v-model="f.action" row @change="updateFilter(f, index)">
                <v-radio label="Accept" value="accept"></v-radio>
                <v-radio label="Drop" value="drop"></v-radio>
              </v-radio-group>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-switch label="Connection limit" v-model="f.connLimitSet" @change="updateFilter(f, index)"/>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-if="f.connLimitSet" label="count" v-model="f.connLimit.count" @change="updateFilter(f, index)"/>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-if="f.connLimitSet" label="interval" v-model="f.connLimit.interval" @change="updateFilter(f, index)"/>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4>
              <v-switch label="Flow limit" v-model="f.flowLimitSet" @change="updateFilter(f, index)"/>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-if="f.flowLimitSet" label="count" v-model="f.flowLimit.count" @change="updateFilter(f, index)"/>
            </v-flex>
            <v-flex xs4>
              <v-text-field v-if="f.flowLimitSet" label="interval" v-model="f.flowLimit.interval" @change="updateFilter(f, index)"/>
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
  name: 'Filters',
  computed: {
    ...mapState({
      filters: (s) => s.filters,
      services: (s) => s.services.map( serv => serv.name),
      autoCompleteItems: (s) => {
        let items = ['_fw']
        
        items = s.variables.map( v => '$' + v.key).concat(items)

        items = s.zones.map( z => z.name).concat(items)

        return items
      }
    })
  },
  methods: {
    ...mapMutations(['updatedFilter']),

    addFilter: function() {
      this.filters.push({})
    },
    updateFilter: function(filter, index) {
      if (filter.connLimitSet && !filter.connLimit) {
        filter.connLimit = {}
      }
      if (filter.flowLimitSet && !filter.flowLimit) {
        filter.flowLimit = {}
      }

      this.updatedFilter(filter, index)

    }
  }

}
</script>
