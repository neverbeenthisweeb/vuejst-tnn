new Vue({
    // refer to element based on its id
    el:'#vue-app',
    data: {
        a:0,
        b:0,
        age:25
    },
    methods: {
        hello:function(){
            console.log("f:hello")
            return "Hi!";
        }
    },
    computed: {
        addToA:function(){
            console.log("f:addToA")
            return this.a + this.age;
        },
        addToB:function(){
            console.log("f:addToB")
            return this.b + this.age;
        }
    }
});