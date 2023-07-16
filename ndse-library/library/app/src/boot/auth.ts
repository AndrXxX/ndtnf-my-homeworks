import { User } from "/models/User";
import passport from 'passport';
import passportLocal, { IStrategyOptions, IVerifyOptions, VerifyFunction } from 'passport-local';
import { usersStore } from "/store/UsersStore";
import checker from '/utils/HashGenerator';

type doneVerify = (error: Error | null, user?: User | null, options?: IVerifyOptions) => void;

const verify: VerifyFunction = async (username: string, password: string, done: doneVerify) => {
  const user = await usersStore.getUser({ username });
  if (!user || !checker.isValid(password, user.password)) {
    return done(new Error('Неверное имя или пароль'));
  }
  return done(null, user);
}

const options: IStrategyOptions = {
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: false,
}

export default () => {
  passport.use('local', new passportLocal.Strategy(options, verify))
  passport.serializeUser((user, cb) => {
    cb(null, (user as User).id);
  })
  passport.deserializeUser(async (id: string, cb: (err: Error, user?: User) => void) => {
    const user = await usersStore.getUser({ id });
    cb(null, user);
  })
};
