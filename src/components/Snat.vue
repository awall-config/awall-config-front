<template>
  <div>
    <div>Specifies out zones for source nating (or masquerading). This is used to provide
    access to a network to multiple clients. In case of Internet access, specifies the
    WAN interface there.</div>
    <v-checkbox v-for="z in zones" :key="z" :value="z" multiple v-model="selSnat" :label="z" @change="updateSnat"/>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'Snat',
  data: () => ({
    selSnat: []
  }),
  computed: {
    ...mapState({
      zones: s => s.zones.map( i => i.name ),
      snat: s => s.snat
    })
  },
  methods: {
    ...mapActions(["listInterfaces"]),
    ...mapMutations(["updatedSnat"]),

    updateSnat: function() {
      this.updatedSnat({snat: this.selSnat})
    }
  },
  mounted: function() {
    this.listInterfaces()
    this.selSnat = this.snat 
  }
}
</script>
