
const express = require('express');
const app = express();

const PORT = 3000;

main();

function main():void{
  app.get('/', (req, res)=>{
    res.send('app works');
  });

  app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
  })
}