$(document).ready(function() {

    'use strict';

    // ========================================================================= //
    //  Header 标题
    // ========================================================================= //

    const WebHeader = {
        data() {
            return {
                title: null,
                slogan: 'Chat, Consult, Pour~'
            }
        },
        mounted() {
            axios.get('http://localhost:10011/index/test').then(response => (this.title = response))
        }
    };
    Vue.createApp(WebHeader).mount('#webHeader');
  
});