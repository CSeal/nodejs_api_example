import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';

mongoose.plugin(uniqueValidator);

const UserSchema = new Schema({
  email: {
    type: String,
    unique: 'Usdr with email "VALUE" already exist',
    lowercase: true,
    required: 'Email is required',
  },
  password: {
    type: String,
    required: 'Password is required',
  },
  firstName: {
    type: String,
    lowercase: true,
    required: 'First name is required',
  },
  lastName: {
    type: String,
    lowercase: true,
    required: 'Last name is required',
  },
}, {
  timestamp: true,
});

UserSchema.statics.createFields = ['email', 'password', 'firstName', 'lastName'];

UserSchema.pre('save', function(next) {
  if ( !this.isModified('password') ) {
    return next();
  }
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

UserSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.statics.findOneWithPublicFields = function(params, callback) {
  return this.findOne(params, callback).select({password: 0, _id: 0, __v: 0 });
};
const User = mongoose.model('user', UserSchema);
User.init();
export default User;
