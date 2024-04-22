let express =require('express')
const app=express()
const axios= require('axios')
const cors =require ('cors')

app.use(cors());
app.get("/:params",(req,res)=>{
    const page = parseInt(req.query.page) || 1; // Default page number is 1
    const pageLimit = parseInt(req.query.limit) || 10; // Default limit is 10 items per page
    // already paginating the data inside the api
    axios('https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/'+req.params.params+"?limit="+pageLimit+"&page="+page)
    .then(response => {
      return response.data;
    })
    .then(data => {
        console.log('API response:', data);
        res.send(data)
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
})

         

app.listen(3030,()=>{
    console.log('listening')
})