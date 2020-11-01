new Vue({
    // refer to element based on its id
    el:'#vue-app',
    data: {
        name:'Shaun',
        job:'Ninja'
    },
    methods: {
        greet:function(time){
            // NOTE: 'this' referes to Vue object.
            // NOTE: Vue take all the properties in data to the topper
            // level.
            return 'Good ' + time + ', ' + this.name +'!';
        }
    }
});