// main.js
import injector from 'vue-inject';
import Vue from 'vue';
import axios from 'axios';
import AwallApiService from '../api'
import Config from '../config'

injector.constant('axios', axios);

injector.service('config', ['axios'], Config);
injector.service('awallApiService', ['axios', 'config'], AwallApiService);

Vue.use(injector);
