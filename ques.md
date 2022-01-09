# 常见疑问：

 * __1.vue数据渲染页面数据展示为什么出现闪烁?__
    在使用vue绑定数据的时候，渲染页面时会出现变量闪烁，例如：
    `
        <div class="#app">
            <p>{{value.name}}</p>
        </div>
    `
    在加载的时候会看到：
    `{{value.name}}`闪烁后再显示内容。
    __原因__：原因：由于JavaScript去操作DOM，都会等待DOM加载完成（DOM ready）。
    对于vuejs、angularjs这些会在DOM ready完会才回去解析html view Template，
    所以对于Chrome这类快速的浏览器你会看见有闪烁的情况出现。而对于IE7，8这类解
    析稍慢的浏览器大部分情况下是不会出现这个问题的。

    __解决办法__：在页面出现，过了几秒之后才会渲染数据，在vue中有个指令可以解决这个问题，
    v-cloak,v-cloak要放在什么位置呢，是不是每个需要渲染数据的标签都要添加这个指令，
    经过我的试验发现，v-cloak并不需要添加到每个标签，只要在el挂载的标签上添加就可以。
    `
        <div class="#app" v-cloak>
            <p>{{value.name}}</p>
        </div>
    `
    而且，在css里面要添加
    `
        [v-cloak] {
            display: none;
        }
    `
    这样就可以防止页面闪烁了。
