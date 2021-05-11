const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://naPostu:naPostu999@testcluster10.1e1vj.mongodb.net/naPOSTUdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require('./models/user');
const User = mongoose.model('user');

app.use('/static', express.static(__dirname + '/public'));

app.get("/users", require('./routes/user'));
app.get("/user", require('./routes/user'));
app.post("/user", require('./routes/user'));





app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
