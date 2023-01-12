let vue = new Vue({
    el: '#app',
    data: {
        result: '',
        numbers:[1,2,3,4,5,6,7,8,9,0],
        operations:['+','-','*','/'],
    },
    methods:{
      input(ell){
        this.result = this.result.toString()
        this.result = this.result+ell
      },
      reset(){
        this.result = ''
      },
      calc(){
        this.result=eval(this.result)
      }
    }
})