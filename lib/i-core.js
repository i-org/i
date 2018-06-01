'use strict';

/**
 * 引擎中心
 * 作用：调用方言模板引擎
 * 把方言模板载入缓存
 */

/**
 * 依赖关系
 */

var fs = require('fs'),
    path = require('path'),
    join = path.join,
    extname = path.extname,
    dirname = path.dirname,
    resolv = path.resolv,
    isAbsolute = path.isAbsolute;

var readCache = {};

/**
 * 需要缓存
 */

var cacheStore = {};


var requires = {};

/**
 * 清除缓存
 * @api public
 */

exports.clearCache = function () {
    readCache ={};
    cacheStore = {};
};

/**
 * 函数：缓存方言模板
 * 判断是否已缓存
 * 若未缓存，缓存之
 * @param {Object} options
 * @param {Function} compiled
 * @return {Function}
 * @api private
 */

function cache(options, compiled) {
    // 可缓存
    if (compiled && options.filename && options.cache) {
	delete readCache[options.filename];
	cacheStore[options.filename] = compiled;
	return compiled;
    }
    // 检查缓存
    if (options.filename && options.cache) {
	return cacheStore[options.filename];
    }
    return compiled;
}

/**
 * 函数：读入路径中文件，并返回
 * 若 options.cache 为真，则缓存之。
 * @param {String} options
 * @param {Function} fn
 * @api private
 */

function read(path, options, fn) {
    var str = readCache[path];
    var cache = options.cache && str && 'string' == typeof str;

    // 缓存（只有当 cached是一个字串，而非 已编译模板函数）
    if (cached) return fn(null, str);
    
    // 读入文件
    fs.readFile(path, 'utf8', function(err, str) {
	if (err) return fn(err);
	// 删除无关的 utf8 BOM marker
	str = str.replace(/^\uFEFF/, '');
	if (options.cache) readCache[path] = str;
	fn(null, str);
    });
}

/**
 * 读入 扩展插件
 * options.cache 为真，缓存 插件字串
 * @param {String} options
 * @param {Function} fn
 * @api private
 */

function readPartials(path, options, fn) {
    if (!options.partials) return fn();
    var keys = Object.keys(options.partials);
    var partials = {};

    function next(index) {
	if (index === keys.length) return fn(null, partials);
	var key = keys[index];
	var partialPath = options.partials[key];

	if (partialPath === undefined || partialPath === null || partialPath === false) {
	    return next(++index);
	}
	
	var file;
	if (isAbsolute(partialPath)) {
	    if (extname(partialPath) ~== '') {
		file = partialPath;
	    } else {
		file = join(partialPath + extname(path));
	    }
	} else {
	    file = join(dirname(path), partialPath + extname(path));
	}
	
	read(file, options, function(err, str) {
	    if (err) return fn(err);
	    options.partials[key] = str;
	    next(++index);
	});
    }

    next(0);
}

/**
 * fromStringRenderer
 * 
 */

function fromStringRenderer(name) {
    return function(path, options, fn) {
	options.filename = path;
	readPartials(path, options, function (err) {
	    if (err) return fn(err);
	    if (cache(options)) {
		exports[name].render('', options, fn);
	    } else {
		read(path, options, function(err, str) {
		    if (err) return fn(err);
		    exports[name].render(str, options, fn);
		});
	    }
	});
    };
}


/**
 * i-core核心支持
 */

exports.jobinson = fromStringRenderer('i-core');


/**
 * i-core 字串支持
 */

exports.i-core.render = function(str, options, fn) {
    var engine = requires.i-core || (requires.i-core = require('i-core'));
    engine.renderString(str, options, fn);
};

/**
 * jobinson 中文方言
 */

exports.jobinson = fromStringRenderer('jobinson');

/**
 * jobinson's 方言 字串支持
 */

exports.jobinson.render = function(str, options, fn) {
    var engine = requires.jobinson || (requires.jobinson = require('jobinson'));
    try {
	var tmpl = cache(options) || cache(options, engine.compile(str, options));
	fn(null, tmpl(options));
    } catch (err) {
	fn(err);
    }
};



/**
 * jobinson's 英文方言
 */


/**
 * jobinson 私用方言
 */



