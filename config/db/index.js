const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect("mongodb+srv://thanhttph23851:thanh@ass.aovyef1.mongodb.net/Ass?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (err) {
        console.log("Connect Failed");
    }
}

module.exports = {connect};