<template>
  <div>
    Defines zones available for the config.
    <v-btn icon color="primary" @click="addZone">
      <v-icon>add</v-icon>
    </v-btn>
    <table>
      <thead>
        <tr>
            <th>Zone name</th>
            <th>Interface</th>
        </tr>
        <tr v-for="(z,index) in zones" :key="index">
          <td><v-text-field v-model="z.name" @change="updateZone(z)"/></td>
          <td>
            <v-radio-group v-model="z.iface" row @change="updateZone(z)">
              <v-radio v-for="i in interfaces" :key="i.iface" :label="i.iface" :value="i.iface"></v-radio>
            </v-radio-group>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: "Zones",
  data: () => ({}),
  computed: {
    ...mapState({
      interfaces: (s) => s.interfaces,
      zones: (z) => z.zones
    })
  },
  methods: {
    ...mapActions(['listInterfaces']),
    ...mapMutations(['updatedZone']),
    addZone() {
      this.zones.push({})
    },
    updateZone: function(zone) {
      if (zone.name != null && zone.name.trim() !== "") {
        this.updatedZone({zone})
      }
    }
  },
  mounted: function() {
    this.listInterfaces()
  }
}
</script>
