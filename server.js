const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req, res)=>{
    res.send([
        {
          id:1,
          image:'https://placeimg.com/64/64/1',
          name:'bae',
          birthday: '880214',
          gender:'man',
          job:'developer'
        },
        {
          id:2,
          image:'https://placeimg.com/64/64/2',
          name:'so',
          birthday: '910423',
          gender:'official',
          job:'Official'
        },
        {
          id:3,
          image:'https://placeimg.com/64/64/3',
          name:'go',
          birthday: '130330',
          gender:'man',
          job:'student'
        }]);
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));