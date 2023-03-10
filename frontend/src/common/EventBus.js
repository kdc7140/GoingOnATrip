import Vue from 'vue';
import _ from 'lodash';
const EventBus = new Vue();

export default EventBus;

export function $popAlert(param) {
    if(_.isString(param)) param = { text: param };
    EventBus.$emit('showAlert', param);
    EventBus.$off('CBAlert');
    return new Promise((resolve) => {
        EventBus.$on('CBAlert', () => {
            EventBus.$off('CBAlert');
            resolve(true);
        })
    })
}

export function $popConfirm(param) {
    if (_.isString(param)) param = { text: param };
    EventBus.$emit('showConfirm', param);
    EventBus.$off('CBConfirm');
    return new Promise((resolve) => {
        EventBus.$on('CBConfirm', (rs) => {
            EventBus.$off('CBConfirm');
            resolve(rs, param);
        });
    })
}

export function $list() {
    EventBus.$emit('showList');
    EventBus.$off('CBList');
    return new Promise((resolve) => {
        EventBus.$on('CBList', (rs) => {
            EventBus.$off('CBList');
            resolve(rs);
        });
    })
}