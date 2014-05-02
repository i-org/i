// 配置require.js
require.config( {

      // 指代链接位置
      paths: {

            "jquery": "/static/javascript/modules/jquery"
	    "mathjax": "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"

      },

      // 设置非AMD的模块
      shim: {

      } // end Shim Configuration

} );


//调用想要的模块并配置

requirejs(['jquery'], function($) {

    
}
    






