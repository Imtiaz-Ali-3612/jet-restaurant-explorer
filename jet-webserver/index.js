let express =require('express')
const app=express()
const axios= require('axios')
const cors =require ('cors')
const config = require('./src/config')

app.use(cors());
app.get("/restaurant/:params",(req,res)=>{
    const page = parseInt(req.query.page) || 1; // Default page number is 1
    const pageLimit = parseInt(req.query.pageLimit) || 12; // Default limit is 10 items per page
    // already paginating the data inside the api
    axios(`${config.SERVICE_URL}`+req.params.params+"?limit="+pageLimit+"&page="+page)
    .then(response => {
      return response.data;
    })
    .then(data => {
        res.send(data)
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
})


const port = process.env.SERVER_PORT || 3030;
         

app.listen(port,()=>{
    console.log('server has started ... ')
})