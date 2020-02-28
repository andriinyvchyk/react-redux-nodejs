const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://darknes:sQG9pwzh8LgQYsp3@cluster0-iczo5.mongodb.net/shop?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then( () => {
  console.log('database connected')
})
.catch((error) => console.log(error));

SERVER_PORT = 3002