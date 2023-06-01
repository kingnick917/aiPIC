const { Schema } = require('mongoose');
const imageSchema = new Schema({

  user: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  
  imageId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
  },
});

module.exports = imageSchema;
