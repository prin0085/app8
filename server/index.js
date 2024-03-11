const epxress = require('express');
const app = epxress();
const port = 8000;

app.use(epxress.urlencoded({ extended: true }));
app.use(epxress.json())
app.use(epxress.static('public'))

app.post('/api/form-post', (req, res) => {
    let name = req.body.name || '';
    let email = req.body.email || '';
    let msg = req.body.message || '';
    let text = `
    <table border="1">
    <caption>ข้อมูลที่ส่งไป</caption>
    <tr><td>ชื่อ:</td><td>${name}</td></tr>
    <tr><td>อีเมล:</td><td>${email}</td></tr>
    <tr><td>ข้อความ:</td><td>${msg}</td></tr>
    </table>
    `
    res.send(text);
})

app.listen(port, () => {
    console.log("the bluetooth device is connected successfully");
})