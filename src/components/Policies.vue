<template>
  <div>
    <div>Use this screen to define policies, i.e. default actions done by the firewall when traffic
      arrives or leaves some zones.
    </div>
    <v-btn icon color="primary" @click="addPolicy">
      <v-icon>add</v-icon>
    </v-btn>
    <form>
      <table>
        <thead>
          <tr>
            <th>In</th>
            <th>Out</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p,index) in policies" :key="index">
            <td><v-select :items="inOutChoices" v-model="p.in" @change="updatePolicy(p, index)"/></td>
            <td><v-select :items="inOutChoices" v-model="p.out" @change="updatePolicy(p, index)"/></td>
            <v-radio-group v-model="p.action" row @change="updatePolicy(p, index)">
              <v-radio label="Accept" value="accept"></v-radio>
              <v-radio label="Drop" value="drop"></v-radio>
            </v-radio-group>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import _ from 'lodash'

export default {
  name: 'Policies',
  computed: {
    ...mapState({
        inOutChoices: (s) => {
          let zones = s.zones.map (z => z.name)
          
          let choices = ["","_fw"]

          return choices.concat(zones)
      },
      policies: (s) => s.policies
    })
  },
  methods: {
    ...mapMutations(['updatedPolicy']),
    addPolicy: function() {
      this.policies.push({})
    },
    updatePolicy: function(policy, index){
      if (policy.in === "") {
        policy = _.omit(policy,"in")
      }

      if (policy.out === "") {
        policy = _.omit(policy,"out")
      }


      this.updatedPolicy({policy,index})
    }
  }
}
</script>
