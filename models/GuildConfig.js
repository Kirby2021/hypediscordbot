const mongoose = require(`mongoose`)

const guildConfiSchema = new mongoose.Schema({
    guildID:{
        type: mongoose.SchemaTypes.String,
        require: true,
        unique: true,
    },
    prefix:{
        type: mongoose.SchemaTypes.String,
        require: true,
        defualt: 'a!',
    },
    defualtRole:{
        type: mongoose.SchemaTypes.String,
required: false,
    },
    memberLogChannel:{
        type: mongoose.SchemaTypes.String,
required: false,
    }


    
})

module.exports = mongoose.model( 'GuildConfig', guildConfiSchema )