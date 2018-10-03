import {soundPath, imgPath} from '../../config/config'

export default {
    data: function(){
      return {
          enName: "",
          esName: "",
          enTitle: "",
          esTitle: "",
      }
    },
    computed: {
        getSoundPath: function () {
            return soundPath+this.enName+"/";
        },
        getImgPath: function () {
            return imgPath+this.enName+"/";
        }
    }
}