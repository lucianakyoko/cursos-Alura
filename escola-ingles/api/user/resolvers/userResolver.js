const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id}, { dataSources }) => dataSources.usersAPI.getUSerById(id)
  }
};

module.exports = userResolvers;