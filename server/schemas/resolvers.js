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
    addimage: async(parent {})=>{
        const addimage = await  addimage. ()
        
    }
  },
};

module.exports = resolvers;