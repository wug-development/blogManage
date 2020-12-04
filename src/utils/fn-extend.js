const FnExtends = () => {
    /**
     * 字符串、数组、Object原生方法兼容
     * 数组: filter、map、includes
     * 字符串: includes
     * Object: assign
    */
    Array.prototype.filter || (Array.prototype.filter = function(e) {
        if (null == this)
            throw new TypeError;
        var t = Object(this)
          , o = t.length >>> 0;
        if ("function" != typeof e)
            throw new TypeError;
        for (var r = [], n = 2 <= arguments.length ? arguments[1] : void 0, i = 0; i < o; i++)
            if (i in t) {
                var a = t[i];
                e.call(n, a, i, t) && r.push(a)
            }
        return r
    }),
    Array.prototype.map || (Array.prototype.map = function(e, t) {
        var o, r, n;
        if (null == this)
            throw new TypeError(" this is null or not defined");
        var i = Object(this)
          , a = i.length >>> 0;
        if ("function" != typeof e)
            throw new TypeError(e + " is not a function");
        for (t && (o = t),
        r = new Array(a),
        n = 0; n < a; ) {
            var s, l;
            n in i && (s = i[n],
            l = e.call(o, s, n, i),
            r[n] = l),
            n++
        }
        return r
    }),
    String.prototype.includes || (String.prototype.includes = function(e, t) {
        return "number" != typeof t && (t = 0),
        !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
    }),
    Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(e) {
            if (null == e)
                throw new TypeError("Cannot convert first argument to object");
            for (var t = Object(e), o = 1; o < arguments.length; o++) {
                var r = arguments[o];
                if (null != r) {
                    r = Object(r);
                    for (var n = Object.keys(Object(r)), i = 0, a = n.length; i < a; i++) {
                        var s = n[i]
                          , l = Object.getOwnPropertyDescriptor(r, s);
                        void 0 !== l && l.enumerable && (t[s] = r[s])
                    }
                }
            }
            return t
        }
    }),
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this)
                throw new TypeError('"this" is null or not defined');
            var o = Object(this)
              , r = o.length >>> 0;
            if (0 == r)
                return !1;
            var n, i, a = 0 | t, s = Math.max(0 <= a ? a : r - Math.abs(a), 0);
            for (; s < r; ) {
                if ((n = o[s]) === (i = e) || "number" == typeof n && "number" == typeof i && isNaN(n) && isNaN(i))
                    return !0;
                s++
            }
            return !1
        }
    });
    // 清除两边的空格
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, '')
    }
    // 合并多个空白为一个空白
    String.prototype.ResetBlank = function() {
        var regEx = /\s+/g
        return this.replace(regEx, ' ')
    }
    
    // 保留数字
    String.prototype.GetNum = function() {
        var regEx = /[^\d]/g
        return this.replace(regEx, '')
    }
    
    // 保留中文
    String.prototype.GetCN = function() {
        var regEx = /[^\u4e00-\u9fa5\uf900-\ufa2d]/g
        return this.replace(regEx, '')
    }
    
    // String转化为Number  
    String.prototype.ToInt = function() {
        return isNaN(parseInt(this)) ? this.toString() : parseInt(this)
    }
    
    // 得到字节长度
    String.prototype.GetLen = function() {
        var regEx = /^[\u4e00-\u9fa5\uf900-\ufa2d]+$/
        if (regEx.test(this)) {
            return this.length * 2
        } else {
            var oMatches = this.match(/[\x00-\xff]/g)
            var oLength = this.length * 2 - oMatches.length
            return oLength
        }
    }
    
    // 获取文件全名
    String.prototype.GetFileName = function() {
        var regEx = /^.*\/([^\/\?]*).*$/
        return this.replace(regEx, '$1')
    }
    
    // 获取文件扩展名
    String.prototype.GetExtensionName = function() {
        var regEx = /^.*\/[^\/]*(\.[^\.\?]*).*$/
        return this.replace(regEx, '$1')
    }
    
    //替换所有
    String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {
        if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
            return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith)
        } else {  
            return this.replace(reallyDo, replaceWith)
        }
    }
    //格式化字符串
    String.Format = function() { 
        if (arguments.length == 0) {
            return ''
        }
        if (arguments.length == 1) {
            return arguments[0]
        }
        var reg = /{(\d+)?}/g
        var args = arguments
        var result = arguments[0].replace(reg, function($0, $1) {
            return args[parseInt($1) + 1]
        })
        return result
    }
    
    // 数字补零  
    Number.prototype.LenWithZero = function(oCount) {
        var strText = this.toString()
        while (strText.length < oCount) {
            strText = '0' + strText
        }
        return strText
    }
    
    // Unicode还原  
    Number.prototype.ChrW = function() {  
        return String.fromCharCode(this)
    }
    
    // 数字数组由小到大排序
    Array.prototype.Min2Max = function() {
        var oValue
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j <= i; j++) {
                if (this[i] < this[j]) {
                    oValue = this[i]
                    this[i] = this[j]
                    this[j] = oValue
                }
            }
        }
        return this
    }
    
    // 数字数组由大到小排序
    Array.prototype.Max2Min = function() {
        var oValue
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j <= i; j++) {
                if (this[i] > this[j]) {
                    oValue = this[i]
                    this[i] = this[j]
                    this[j] = oValue
                }  
            }  
        }  
        return this
    }

    Array.prototype.sort || (Array.prototype.sort = function (f) {
        var f = f && typeof f === 'function'? f : function (x, y) {
            return String(x) < String(y)? -1 : (x===y ? 0 : 1)
        }
        var len = this.length,
        i = 0,
        t;
        for (i = 0, t = undefined; i < len -1; i++) {
            if (f(this[i], this[i + 1]) > 0) {
                t = this[i + 1],
                this[i + 1] = this[i]
            }
            if (t) {
                for (var j = i - 1; j >= 0; j--) {
                    if (f(this[j], t) > 0) {
                        this[j + 1] = this[j]
                    } else {
                        this[j + 1] = t
                        t = undefined
                        break
                    }
                }
            }
        }
        return this
    })
    
    // 获得数字数组中最大项  
    Array.prototype.GetMax = function() {
        var oValue = 0
        for (var i = 0; i < this.length; i++) {  
            if (this[i] > oValue) {  
                oValue = this[i]
            }  
        }  
        return oValue
    }
    
    // 获得数字数组中最小项
    Array.prototype.GetMin = function() {
        var oValue = 0
        for (var i = 0; i < this.length; i++) {
            if (this[i] < oValue) {
                oValue = this[i]
            }
        }
        return oValue
    }
    
    // 获取当前时间的中文形式
    Date.prototype.GetCNDate = function() {
        var oDateText = '';
        oDateText += this.getFullYear().LenWithZero(4) + new Number(24180).ChrW();
        oDateText += this.getMonth().LenWithZero(2) + new Number(26376).ChrW();
        oDateText += this.getDate().LenWithZero(2) + new Number(26085).ChrW();
        oDateText += this.getHours().LenWithZero(2) + new Number(26102).ChrW();
        oDateText += this.getMinutes().LenWithZero(2) + new Number(20998).ChrW();
        oDateText += this.getSeconds().LenWithZero(2) + new Number(31186).ChrW();
        oDateText += new Number(32).ChrW() + new Number(32).ChrW() + new Number(26143).ChrW() + new Number(26399).ChrW() + new String('26085199682010819977222352011620845').substr(this.getDay() * 5, 5).ToInt().ChrW();
        return oDateText;
    };

    Date.prototype.Diff = function(objDate, interval) {
        //若参数不足或 objDate 不是日期类型則回传 undefined
        if (arguments.length < 2 || objDate.constructor != Date) { return undefined; }
        switch (interval) {
            //计算秒差
            case 's': return parseInt((objDate - this) / 1000);
                //计算分差
            case 'm': return parseInt((objDate - this) / 60000);
                //计算時差
            case 'h': return parseInt((objDate - this) / 3600000);
                //计算日差
            case 'd': return parseInt((objDate - this) / 86400000);
                //计算周差
            case 'w': return parseInt((objDate - this) / (86400000 * 7));
                //计算月差
            case 'M': return (objDate.getMonth() + 1) + ((objDate.getFullYear() - this.getFullYear()) * 12) - (this.getMonth() + 1);
                //计算年差
            case 'y': return objDate.getFullYear() - this.getFullYear();
                //输入有误
            default: return undefined;
        }
    };
    // 简写输出日志
    typeof window.log === 'undefined' && (window.log = console.log)
}

export default FnExtends