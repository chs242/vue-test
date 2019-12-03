new Vue ({
    el: '#app',
    data: {
        toShow: true,
        message: ""
    },
    methods: {
        handleClick (){
            this.toShow = false
        }
    }
})





// build a small app when
//The user enters secret and clicks on Reveal
//The input and the button disappear-----------------
//In the same time, the protected content appears---------------

//[Data}, methods, [v-if, v-else], v-model, @.