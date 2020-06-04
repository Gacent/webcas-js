# webcas-js

> 统一认证对接使用

## Usage

#### Install

`npm i -S webcas-js`

#### 方法
1. CasRun(params1,params2)
> params1:用于设置header时候的key，需要和自己请求拦截的`config.headers`的key一致，同时需要和主系统携带的参数一致
> params2:设置进localStorage的key名
2. getToken()
> 获取设置localStorage的值
3. setToken(params1)
> 设置localStorage,key是上面设置的params2

#### Import
示例:
`import {CasRun} 'webcas-js'`

#### 注意：CasRun的第二个参数依赖于主系统的携带的参数

##### 0.1.3
- 修改README.md说明并添加仓库地址
