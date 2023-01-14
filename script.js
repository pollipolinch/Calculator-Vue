let vue = new Vue({
  el: '#app',
  data: {
    previos: null,
    result: '',
    operator: null,
    operatorClicked: false
  },
  methods: {
    clear() {
      this.result = ''
    },
    sign() {
      if (this.result.charAt(0) === '-') {
        this.result = this.result.slice(1)
      } else {
        this.result = `-${this.result}`
      }
    },
    percent() {
      this.result = `${parseFloat(this.result) / 100}`
    },
    append(num) {
      if(this.operatorClicked === true){
        this.result = ''
        this.operatorClicked = false
      }
      this.result = `${this.result}${num}`
    },
    dot() {
      if (this.result.indexOf('.') === -1) {
        this.append('.')
      }
    },
    divide() {
      this.operator = (a, b) => a / b
      this.previos = this.result
      this.operatorClicked = true
    },
    times() {
      this.operator = (a,b)=> a*b
      this.previos = this.result
      this.operatorClicked = true
    },
    plus() {
      this.operator = (a,b)=> a+b
      this.previos = this.result
      this.operatorClicked = true
    },
    minus() {
      this.operator = (a,b)=> a-b
      this.previos = this.result
      this.operatorClicked = true
    },
    equal() {
      this.result = `${this.operator(parseFloat(this.previos),parseFloat(this.result))}`
    }
  }
})