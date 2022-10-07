## 3.6.0（2022-09-29）
v3.6.0
  
原生新增基本配置`style`二维码风格属性，基础版支持`default`默认风格，`Plus`版支持`art`艺术码，`liquid`液态码，`round`圆点码；
原生新增基本配置`foregroundPadding`前景内边距，可调整码点间距，仅`default`，`round`风格支持；
原生新增基本配置`foregroundRadius`前景圆角半径，可调整码点圆角，仅`Plus`版本，`liquid`，`round`风格支持；
原生新增基本配置`patterns`艺术码图案组合，仅`Plus`版本，`art`风格支持。
  
组件新增`type`属性，canvas组件类型。微信小程序可选`2d`。注意：`v3.6.0`之前版本微信小程序默认为`2d`，升级`v3.6.0`后如还需继续使用`2d`类型，需要设置`type="2d"`，否则可能会出现层级问题；
组件新增`sizeUnit`属性，二维码尺寸单位。可选`px`，`rpx`；
组件新增`isQueueLoadImage`属性，是否队列加载图片；
组件新增`change`事件，该事件为二维码重绘时触发；
组件`make`，`remake`方法新增回调参数，可在调用后通过回调处理逻辑，无需再通过`complete`事件处理。
  
`v3.6.0 Plus`版本请联系QQ：`540000228`获取。
