auto.waitFor();
requestScreenCapture();
log("申请权限完成");

var k="#ffff3333";
var ax;
var times=100;
var colors=[[0,88,k],[69,0,k],[69,88,k]];
var xc1;
var xc2;
log("创建参数完成");

var window = floaty.window(
    <vertical>
        <button id="ok" text="确定"/>
    </vertical>
);
log("浮悬窗建立完成");

window.ok.on("click", ()=>{
    aim();
    window.disableFocus();
});

window.ok.on("long_click", ()=>{
    window.setAdjustEnabled(!window.isAdjustEnabled());
   log("重新配置浮悬窗");
});

setInterval(()=>{}, 1000);

var lock = threads.lock();

function aim(){
    threads.start(function(){
        xc1=xx();
        if(xc1>970){
            click(1260,300);
            swipe(1260,300,200,300,800);
            log("左滑动");
        }else if(xc1<950){
            click(200,300);
            swipe(200,300,1260,300,800);
            log("右滑动");
        }
    });

    threads.start(function(){
        while(true){
            xc2=xx();
            if(950<xc2&&xc2<970){
                click(device.width-280,device.height-280);
            }
            sleep(20);
        }
    });
}
function xx(){
  lock.lock();
    var point=images.findMultiColors(captureScreen(), k, colors);
    if(point!=null){
        ax=point.x+35;
        log("检测到x坐标:"+ax);
    }else{
        ax=-1;
    }
  lock.unlock();

    return ax;
}

