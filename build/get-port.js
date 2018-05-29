/*
  参考: 
  https://stackoverflow.com/questions/28050171/nodejs-random-free-tcp-ports
  https://github.com/ujc/get-port-sync
*/
var net = require('net');
var deasync = require('deasync');

// 异步获取端口
function _getPortAsync(port = 0) {
  return new Promise(function(resolve, reject) {
    var server = net.createServer();

    server.on('error', reject);

    server.listen({ port }, function() {
      var address = server.address();
      if (!address && !address.port) {
        reject()
      };

      server.close(() => {
        // 从node事件循环中移除
        server.unref();

        resolve(address.port);
      });
    });
  });
}

function getPortAsync(port = 0) {
  return _getPortAsync(port).catch(function() {
    // 如果失败就尝试监听0.0.0.0:0， 从系统中获取一个 free port
    return _getPortAsync(0)
  })
}

// 同步获取端口
function getPortSync(port = 0) {
  var isDone = false;
  // 默认端口
  var res = 8080;

  getPortAsync(port).then(function(port) {
    isDone = true;
    res = port;
  }).catch(function(err) {
    isDone = true;
  });

  deasync.loopWhile(function() {
    return !isDone;
  });
  console.log('---------listening port: ', res)
  return res;
}

exports.getPortSync = getPortSync
