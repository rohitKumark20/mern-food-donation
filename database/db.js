const mongoose =  require('mongoose');

const Connection = async() => {
    const uri = 'mongodb+srv://foodDontaion:lSmd1yejrJwHTuTN@cluster0.dzqdlet.mongodb.net/?retryWrites=true&w=majority'

    try {
        const response = await mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('Database connected Successfully...')
    } catch (error) {
        console.log('Error while connecting the database',error)
    }
}

// foodDontaion
// lSmd1yejrJwHTuTN

module.exports = Connection;