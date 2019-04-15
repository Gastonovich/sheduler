const express = require('express'),
  path = require('path'),
  PORT = process.env.PORT || 4000,
  app = express(),
  bodyParser = require('body-parser')

let id = 1;
let data = [];

function addShedule(id){
  let element = {
    id: id,
    participants: []
  }
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api/create', function (req, res) {
  res.send({ id });
  id++;
})

app.get('/api/shedule/:id', (req, res) => {
  const { id } = req.params
  //checking
  if(!id){
    res.send('nothing')
  }
  //result  

})

app.post('/api/shedule/:id', (req, res) => {
  const { id, names, colors } = req.params
  //checking
  if(!id){
    res.send('nothing')
  }
  //result  

})



// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, function () {
  console.error(`Node listening on port ${PORT}`);
});