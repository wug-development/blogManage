const _ = {
    getItem: (key: string) => {
        return sessionStorage.getItem(key)
    },
    setItem: (key: string, value: any) => {
        if (!value) return false
        if (typeof value === 'object') {
            value = JSON.stringify(value)
        }
        sessionStorage.setItem(key, value)
    },
    checkMobile: (v: string): boolean => {
        return /^1[3,4,5,6,7,8,9]\d{9}$/.test(v)
    },
    checkEmail: (v: string): boolean => {
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v)
    },
    addSome: (v: any, len: number, d?: string, end?: boolean): string => {
        if (end) {
            return String(v).padEnd(len, d)
        } else {
            return String(v).padStart(len, d || '0')
        }
    },
    dateFormat: (date: Date, format: string): string => {
        let d: Date = new Date()
        let fmt: string = 'yyyy-MM-dd'
        if (typeof date === 'object' && typeof date.getDate === 'function') {
            d = date
            if (typeof format === 'string') {
                fmt = format
            }
        } else if (typeof date === 'string') {
            if (typeof format === 'string') {
                d = new Date(date)
                fmt = format
            } else {
                fmt = date
            }
        }
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', '日', '一', '二', '三', '四', '五', '六']
        return fmt.replace(/yyyy|yy|MM|dd|hh|MM|ss|星期|周|www|week/g, (f) => {
            let t: any = ''
            switch (f) {
                case 'yyyy': t = d.getFullYear(); break;
                case 'yy': t = (d.getFullYear() + '').slice(2); break;
                case 'MM': t = _.addSome(d.getMonth() + 1, 2); break;
                case 'dd': t = _.addSome(d.getDate(), 2); break;
                case 'hh': t = _.addSome(d.getHours(), 2); break;
                case 'MM': t = _.addSome(d.getMinutes(), 2); break;
                case 'ss': t = _.addSome(d.getSeconds(), 2); break;
                case '星期': t = '星期' + week[d.getDay() + 7]; break;
                case '周': t = '周' + week[d.getDay() + 7]; break;
                case 'week': t = week[d.getDay()]; break;
                case 'www': t = week[d.getDay()].slice(0,3); break;
            }
            return t
        })
    },
    checkCardNo: (code: string): object => {
        let city = {11:'北京',12:'天津',13:'河北',14:'山西',15:'内蒙古',21:'辽宁',22:'吉林',23:'黑龙江 ',31:'上海',32:'江苏',33:'浙江',34:'安徽',35:'福建',36:'江西',37:'山东',41:'河南',42:'湖北 ',43:'湖南',44:'广东',45:'广西',46:'海南',50:'重庆',51:'四川',52:'贵州',53:'云南',54:'西藏 ',61:'陕西',62:'甘肃',63:'青海',64:'宁夏',65:'新疆',71:'台湾',81:'香港',82:'澳门',91:'国外 '}
        let tip = ''
        let len = code.length
        if (len < 18) {
            tip = '身份证号码位数少' + (18 - len) + '位'
        } else if (len > 18){
            tip = '身份证号码位数多' + (len - 18) + '位'
        }
        let _prov = Number(code.substr(0, 2))
        if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
            tip = '身份证号格式错误'
        } else if(!city.hasOwnProperty(_prov)){
            tip = '地址编码错误'
        } else{
            let _code = code.split('')
            //∑(ai×Wi)(mod 11)
            //加权因子
            let factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
            //校验位
            let parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ]
            let sum = 0
            let ai: any
            let wi = 0
            for (let i = 0; i < 17; i++)
            {
                ai = _code[i]
                wi = factor[i]
                sum += ai * wi
            }
            if(Number(parity[sum % 11]) !== Number(_code[17])){
                tip = '校验位错误'
            }
            let _idc = _code.join('')
            let _y = Number(_idc.substr(6,4))
            let _m = Number(_idc.substr(10,2))
            let _d = Number(_idc.substr(12,2))
            let _nowY = (new Date()).getFullYear()
            if (_m < 1 || _m > 12 || _d > 31 || _d < 1) {
                tip = '生日错误'
            } else if ((_nowY - _y) < 12 || (_nowY - _y) > 100) {
                tip = '生日错误'
            }
        }
        return {
            verify: !tip,
            msg: tip
        }
    }
}

export default _