const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://'+ process.env.DB_USER_PASS +'@cluster0.k55gp.mongodb.net/AppliSDVitrail',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }
    )
    .then(() => console.log('connected to MongoDB'))
    .catch((err) => console.log('failed to connect to MogoDB', err))