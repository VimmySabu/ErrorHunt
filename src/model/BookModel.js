const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@casestudy2.6jpva.mongodb.net/LibraryApp?retryWrites=true&w=majority',{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;