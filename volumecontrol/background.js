var spawn = require('child_process').spawn;
var py = spawn('python', ['app.py']);

py.stdout.on('data', function(data){
  console.log(data.toString());
});

py.stderr.on('data', function(data){
  console.error(data.toString());
});
