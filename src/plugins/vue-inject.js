// main.js
import injector from 'vue-inject';
import Vue from 'vue';
import axios from 'axios';
import AwallApiService from '../api'

injector.constant('apiRoot', 'http://localhost:7878');
injector.constant('axios', axios);

injector.service('awallApiService', ['axios', 'apiRoot'], AwallApiService)

Vue.use(injector);
