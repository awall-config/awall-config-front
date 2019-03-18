<template>
  <div>
    <div>Use this screen to define services, i.e. set of protocol and port</div>
    <v-btn icon color="primary" @click="addService">
      <v-icon>add</v-icon>
    </v-btn>
    <form>
      <v-container fluid>
        <v-layout row>
          <v-flex xs4>&nbsp;</v-flex>
          <v-flex xs4>Protocol</v-flex>
          <v-flex xs4>Port</v-flex>
        </v-layout>
        <div v-for="(s,i1) in services" :key="i1" >
          <v-layout row>
            <v-flex xs4>
              <v-text-field label="Service name" v-model="s.name" @change="updateService(s)"/>
            </v-flex>
            <v-spacer xs8/>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-btn icon color="secondary" @click="addEntry(s)">
                <v-icon>add</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <div v-for="(e,i2) in s.entries" :key="i2">
            <v-layout row>
              <v-flex xs4>&nbsp;</v-flex>
              <v-flex xs4>
                <v-radio-group v-model="e.proto" row @change="updateService(s)">
                  <v-radio label="Tcp" value="tcp"></v-radio>
                  <v-radio label="Udp" value="udp"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs4>
                <v-text-field label="Port" v-model="e.port" @change="updateService(s)"/>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-container>
    </form>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Services',
  methods: {
    ...mapMutations(['updatedService']),
    addService: function() {
      this.services.push({
        entries: []
      })
    },

    addEntry: function(service) {
      service.entries.push({})
    },

    updateService: function(service) {
      this.updatedService({service})
    }
  },
  computed: {
    ...mapState({
      services: s => s.services
    })
  }
}
</script>
