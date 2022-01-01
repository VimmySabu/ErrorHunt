const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@casestudy2.6jpva.mongodb.net/LibraryApp?retryWrites=true&w=majority',{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;