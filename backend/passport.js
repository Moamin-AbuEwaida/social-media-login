const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


const passport = require('passport');

const GOOGLE_CLIENT_ID = '357278182108-krf9chq8bbvk6c2ssrvjbmv9ri53ftlb.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

const GITHUB_CLIENT_ID = 'c3dae73e155003e831a5'
const GITHUB_CLIENT_SECRET = 'af9ac78766c6dd6d12ba2aa14a0fef9e46e2cee6'

const FACEBOOK_APP_ID = '680547373144736'
const FACEBOOK_APP_SECRET = 'e4deacabc4eb23d7bc3821d2cc5a92a7'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "https://localhost:8000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));


passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "https://localhost:8000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));



passport.serializeUser((user, done)=>{
    done(null,user)
});

passport.deserializeUser((user, done)=>{
    done(null,user)
});