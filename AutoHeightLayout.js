/* 
    自动高度布局,在需要自动最高的容器中增加样式AutoHeight
    <div>
        <h1>标题</h1>
        <div class="AutoHeight"></div>
        <footer>脚注栏</footer>
    </div>  
*/
//(function ($) {
//$(window, ".wrapper").resize(

function AutoHeight(el) {

    if (el == undefined) {
        el = window.document.body;
    }

    $(el).find(".AutoHeight").each(function () {
            var _this = $(this);
            var _box = $(this).parent();
            var boxheight = _box.height();
            var allChildHeight = 0;
            _box.children().each(function () {

                if ($(this).is(":hidden") || $(this).is(".AutoHeight")) {
                    //隐藏的元素也会被忽略高度.
                    //左右布局的时候加上 AutoHeight 样式,包括自身, 会被忽略高度.
                    //<div> 
                    ////<div style="height:20px;"></div>
                    ////<div class="AutoHeight"> 左边 </div>
                    ////<div class="AutoHeight"> 右边 </div>
                    //</div>
                } else {
                    allChildHeight = allChildHeight + $(this).outerHeight(true);
                }
            });
            if (boxheight > allChildHeight) {
                //_box
                //.children(".AutoHeight")
                ////.css("height", "100%");
                //.each(function () {
                //    var m = boxheight - allChildHeight;
                //    console.log("调整高度为:" + m);
                //    $(this).outerHeight(m);
                //});
                var m = boxheight - allChildHeight;
                _this.outerHeight(m);
            } else {
                console.log("无需变化");
            }
        });
    }

$(document.body).height("100%");
/*给jquery 增加任何一个元素都可以resize的事件. */  
    $(document).ready(function () {
        //界面加载完成,初始化一下界面布局 
        AutoHeight();
    });
    $(document).on("click", function () {
        //每点击一次就计算一次. 
        AutoHeight();
    });
 ////})(jQuery)
    