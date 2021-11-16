const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const Users = require('../models/users')
const OS = require('../models/os')
const Sessions = require('../models/session')

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})
passport.use(new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
    state: true
  },
  async function (accessToken, refreshToken, extraParams, profile, done) {
    await initProfile(profile)
    return done(null, profile)
  }
))
async function initProfile (profile) {
  const user = await Users.findOne({ _id: profile.id }).exec()
  const os = await OS.findOne({ _id: profile.id }).exec()
  if (!os) {
    const newOS = new OS({
      _id: profile.id,
      apps: [],
      background: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
      theme: 'dark'
    })
    newOS.save()
  }
  if (!user) {
    const newUser = new Users({
      _id: profile.id,
      avatar: profile.picture,
      nickname: profile.nickname,
      isAdmin: false
    })
    newUser.save()
  }
}
