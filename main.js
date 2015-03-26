/**
 * Created by shidoudou on 15/1/1.
 */
var canvas = {
     init : function(){
          var self = this;
          var node = document.getElementById('guaBg'),
              canvas_url = 'gg-mask.jpg',
              type = 'image';

          var lottery = new Lottery(node, canvas_url, type, window_w, window_h, self.callback,self.clear);
          lottery.init();
     },
     callback : function(){
          //计算用户滑到70%的时候去掉canvas
          //$('#guaBg').hide();
          this.getTransparentPercent();
          console.log(this.getTransparentPercent())
     },
     clear : function(){
          //清除mask
          $('#guaBg canvas').fadeOut();
          setTimeout(function(){
               $('#guaBg canvas').remove();
          },1000);
     }
}
var window_h, window_w;
$(document).ready(function(){
     window_w = $(window).width();
     window_h = $(window).height();

     canvas.init();
});