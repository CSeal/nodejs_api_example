import {pick} from 'lodash';
import jwt from 'jsonwebtoken';
import models from '../models/models';
const { User } = models;

export default {
  singUp: async function(ctx) {
    const { _id } = await User.create(pick(ctx.request.body, User.createFields));
    const user = await User.findOneWithPublicFields({_id});
    ctx.body = {data: user};
  },
  singIn: async function(ctx) {
    const {email, password} = ctx.body;
    if (!email || !password) {
      ctx.throw(400, {message: 'Invalid data'});
    }
    const user = User.findOne({email});
    if (!user) {
      ctx.throw(400, {message: 'Invalid data'});
    }
  },
};
