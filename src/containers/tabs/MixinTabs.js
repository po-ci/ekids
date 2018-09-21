export default {
    data: function(){
      return {
          inputText:""
      }
    },
    methods: {
        repeat: function(){
            this.gameList = Object.assign([], this.baseList)
            this.gameListDone = []
            this.points = this.initialPoints
            this.finishGame = false
            this.dialog = false
            this.itemSelected = null
            this.inputText= ""
        },
    }
}