const User = require('./schemas/user');

const findById = async (id) => {
  return await User.findOne({ _id: id });
};

const findByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUserByVerifyToken = async (token) => {
  return await User.findOne({ verifyToken: token });
};

const create = async (options) => {
  const user = new User(options);
  return await user.save();
};

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token });
};

const updateVerifyToken = async (id, verify, verifyToken) => {
  return await User.updateOne(
    { _id: id },
    { verify, verifyTokenEmail: verifyToken }
  );
};

const updateAvatar = async (id, avatar, userIdImg = null) => {
  return await User.updateOne({ _id: id }, { avatar, userIdImg });
};

const updateSubscription = async (userId, body) => {
  const result = await User.findByIdAndUpdate(
    { _id: userId },
    { ...body },
    { new: true }
  );
  return result;
};

module.exports = {
  findById,
  findByEmail,
  create,
  updateToken,
  updateSubscription,
  updateAvatar,
  updateVerifyToken,
  getUserByVerifyToken,
};
