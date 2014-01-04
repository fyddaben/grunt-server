# mopen

> open url

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install mopen --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('mopen');
```

## The "mopen" task
###注意事项
运行本插件，是在[`grunt-contrib-watch`](https://npmjs.org/package/grunt-contrib-watch)的前提下运行的，因为要本模块独立运行无法保证监听的一直运行。
### Overview
In your project's Gruntfile, add a section named `mopen` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mopen: {
    //端口
    port:9001,
    //URL根目录的相对路径
    root:"./",
    //本机IP地址
    host:"127.0.0.1"
  },
});
```

### Options

#### options.port
Type: `Number`
Default value: 9001

端口为数字型

#### options.host
Type: `String`
Default value: `127.0.0.1`

默认IP为127.0.0.1 ，建议用真实详细IP
#### options.root
Type: `String`
Default value: `./`

相对于Gruntfile.js所在的目录，进行找寻URL的根目录。
### 使用实例

#### Default Options

shell命令 `sudo grunt ` 即可开启监听
```js
grunt.initConfig({
    watch:{
        
    }
    mopen: {
        options:{
    port:9001,
    root:"./",
    host:"127.0.0.1"
  }
  },
});
grunt.registerTask('default', ['watch','mopen']);
```

## 
## Release History
_(0.1.0)_ 完成了初始化的测试工作
_(0.1.1)_  基本能完成监听端口的功能
_(0.1.2)_  修改bug