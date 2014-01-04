/*
 * mopen
 * https://github.com/root/grunt-server
 *
 * Copyright (c) 2014 Daben1990
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('mopen', 'open url', function() {

    var port=grunt.config('mopen.options.port')||9001;
    var root=grunt.config('mopen.options.root')||"./";
    var host=grunt.config('mopen.options.host')||"127.0.0.1";
    var http = require('http');
    var fs = require("fs");
    http.createServer(function (req, res) {    
     
      if(req.url.indexOf("favicon.ico")!=-1){return;}; 
      fs.readFile(root+req.url, function (err, data) {
        if (err) throw err;
        res.end(data);
      });
    }).listen(port,host);
    grunt.log.write("the server is running http://"+host+":"+port);

    var done = this.async();
    setTimeout(function() {
      done();
    }, 1000);
  });

};
