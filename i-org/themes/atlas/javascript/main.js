// 配置require.js
require.config( {
    // 指代链接位置
    paths: {
        "jquery": "modules/jquery",
    	"mathjax": "modules/MathJax.js?config=TeX-AMS-MML_HTMLorMML",
        "toc": "modules/toc",
        "outliner": "modules/outliner"
    },
    // 设置非AMD的模块
    shim: {

    } 
} );

//调用想要的模块并配置

require(['jquery', 'mathjax', 'toc', 'outliner'], function($) {

    console.log('Running jQuery %s', $().jquery);
});
    






