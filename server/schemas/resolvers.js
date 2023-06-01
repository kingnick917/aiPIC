const { AuthenticationError } = require('apollo-server-express');
const { User, } = require('../models');
const { signToken } = require('../utils/auth')



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return User.findOne({ _id: context.user.id });
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne(email)
      user.isCorrectPassword(password)
      const token = signToken(user);
      return token
    },
    
    addUser: async (parent, { username, email, password }) => {
      console.log(username, email, password)
       const user = await User.create(username, email, password)
       const token = signToken(user);
       return token
    },
    saveImage: async(parent, {imageData}, context) => {
      console.log(image)
        const saveimage = await  saveimage.any({});
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { savedImages: imageData } },
            { new: true }
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },

// 
// IMAGEDATA OR IMAGEID TO IDENTIFY IMAGE IN DATABASE????
//

    removeImage: async (parent, { imageId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedImages: { imageId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },


  },
};

module.exports = resolvers;