import '../scss/yatian.scss';
import '../css/contact.css';

$(function(){
    // 百度地图API功能
    var map = new BMapGL.Map("allmap");
    var point = new BMapGL.Point(104.07439,30.556513);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    var marker = new BMapGL.Marker(point);  // 创建标注

    var opts = {
        width: 250,     // 信息窗口宽度
        height: 100,    // 信息窗口高度
        title: "成都中翌诚企业管理有限责任公司"  // 信息窗口标题
    }

    var infoWindow = new BMapGL.InfoWindow(`
        <p>电话：12345678900</p>
        <p>地址：成都市朝阳三元桥时间国际8号楼</p>

    `, opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter());        // 打开信息窗口
});
