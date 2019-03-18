<template>
  <v-app>
    <v-navigation-drawer
    :clipped="clipped" v-model="drawer" enable-resize-watcher app dark class="primary lighten-1"
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="./assets/logo.png">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Awall config</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.id"
          @click="goto(item.id)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>AWall configuration</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="warning" v-if="updated">
        <v-icon>undo</v-icon>
      </v-btn>
      <v-btn icon color="warning" v-if="updated">
        <v-icon>save</v-icon>
      </v-btn>
    </v-toolbar> 
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import _ from 'lodash'

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState (['updated'])
  },
  methods: {
    goto: function(id) {
      let url = _.find(this.items, i => i.id === id).url
      this.$router.push(url)
    }
  },
  data () {
    return {
      drawer: null,
      clipped: false,
      items: [
        { title: 'Home', icon: 'dashboard', id: 'home', url: '/'},
        { title: 'Variables', icon: 'work', id: 'variables', url: '/variables'},
        { title: 'Zones', icon: 'dehaze', id: 'zones', url: '/zones' },
        { title: 'Policies', icon: 'lock', id: 'policies', url: '/policies' },
        { title: 'Services', icon: 'loop', id: 'services', url: '/services' },
        { title: 'Filters', icon: 'swap_horiz', id: 'filters', url:'/filters' },
        { title: 'Snat', icon: 'vertical_align_top', id: 'snat', url:'/snat' },
        { title: 'Dnat', icon: 'vertical_align_bottom', id: 'dnat', url:'/dnat' }

      ]
    }
  }
}
</script>
