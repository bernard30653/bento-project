const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors())


/*
const connection = mysql.createConnection({
    host: 'http://140.114.54.94/phpMyAdmin',
    user: '2023iie',
    password: '2023',
    database: '2023iie_group1'
  });

connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
      return;
    }
    console.log('Connected to the database');
});
*/


/*
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM 2023iie_group1';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching data from the database');
      } else {
        res.status(200).json(results);
      }
    });
  });

*/

app.get("/api/rawdata",(req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
})

app.get("/api/members",(req,res)=>{
    res.json([
        {"member_id": 145, "member_name": "Bernard", "member_tel": "0975116792", "member_mail": "bernard30653@gmail.com", "member_addr": "台北市東山路136號8樓", "member_tier": "VIP", "member_point": 100},
        {"member_id": 146, "member_name": "Alice", "member_tel": "0987654321", "member_mail": "alice@gmail.com", "member_addr": "台中市北區一中街21號", "member_tier": "Regular", "member_point": 50},
        {"member_id": 147, "member_name": "Bob", "member_tel": "0932423521", "member_mail": "bob@hotmail.com", "member_addr": "高雄市前鎮區新衙路65號", "member_tier": "Regular", "member_point": 20},
        {"member_id": 148, "member_name": "Charlie", "member_tel": "0921342314", "member_mail": "charlie@yahoo.com", "member_addr": "台南市永康區中正路86號", "member_tier": "VIP", "member_point": 200},
        {"member_id": 149, "member_name": "David", "member_tel": "0956234521", "member_mail": "david@gmail.com", "member_addr": "台北市中山區龍江路28號", "member_tier": "Regular", "member_point": 30},
        {"member_id": 150, "member_name": "Eva", "member_tel": "0988123412", "member_mail": "eva@hotmail.com", "member_addr": "台中市西區中興街46號", "member_tier": "Regular", "member_point": 10},
        {"member_id": 151, "member_name": "Frank", "member_tel": "0976654321", "member_mail": "frank@yahoo.com", "member_addr": "新北市三峽區中正路123號", "member_tier": "Regular", "member_point": 80},
        {"member_id": 152, "member_name": "Grace", "member_tel": "0912456789", "member_mail": "grace@gmail.com", "member_addr": "台北市大安區信義路四段69號", "member_tier": "VIP", "member_point": 300},
        {"member_id": 153, "member_name": "Henry", "member_tel": "0954321234", "member_mail": "henry@hotmail.com", "member_addr": "台南市安南區海佃路26號", "member_tier": "Regular", "member_point": 60},
        {"member_id": 154, "member_name": "Iris", "member_tel": "0932213412", "member_mail": "iris@yahoo.com", "member_addr": "台中市南區公益路25號", "member_tier": "Regular", "member_point": 15},
    ])
})
// image,name,price
app.get("/api/maindishes",(req,res)=>{
    res.json([
        {"image":"../images/網站照片/主菜照片/三杯雞肉","name":"三杯雞肉","price":150},
        {"image":"../images/網站照片/主菜照片/宮保雞丁","name":"宮保雞丁","price":100},
        {"image":"../images/網站照片/主菜照片/泰式雞排","name":"泰式雞排","price":80}
    ])
})



app.listen(5000, ()=>{console.log("Server started on port 5000")})