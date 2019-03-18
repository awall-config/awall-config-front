<template>
  <div>
    <div>Use this screen to define variables, one per line</div>
    <v-btn icon color="primary" @click="addVariable">
      <v-icon>add</v-icon>
    </v-btn>
    <form>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(v,index) in variables" :key="index">
            <td><v-text-field type="text" v-model="v.key" @change="updateVar(v)"/></td>
            <td><v-text-field type="text" v-model="v.value" @change="updateVar(v)"/></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>
 
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Variables',

  data: () => ({}),

  computed: {
    ...mapState({
      variables: s => s.variables
    })
  },

  methods: {
    ...mapMutations(['updatedVariable']),

    addVariable: function() {
      this.variables.push({})
    },

    updateVar: function(variable) {
      if (variable.key != null && variable.key.trim() !== "") {
        this.updatedVariable({variable: variable})
      }
    }
  }
}
</script>
