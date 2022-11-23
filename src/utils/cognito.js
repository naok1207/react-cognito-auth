import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID,
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const signUp = async (username, password) => {
  return await new Promise((resolve, reject) => {
    userPool.signUp(username, password, [], null, (err, result) => {
      if (err) {
        console.error(err);
        reject();
        return;
      }
      const cognitoUser = result.user;
      console.log("username is ", cognitoUser.getUsername());
      resolve();
    });
  });
};

const authenticate = async (username, password) => {
  return await new Promise((resolve, reject) => {
    const userData = { Username: username, Pool: userPool };
    const authenticationData = { Username: username, Password: password };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    const authenticationDetails =
      new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (data) => resolve(data),
      onFailure: (err) => reject(err),
    });
  });
};

const signOut = async () => {
  return await new Promise((resolve, reject) => {
    const cognitoUser = userPool.getCurrentUser();
    if (!cognitoUser) reject();
    cognitoUser.signOut(() => resolve());
  });
};

const getSession = () => {
  const cognitoUser = userPool.getCurrentUser();
  if (!cognitoUser) {
    return undefined;
  }
  return cognitoUser.getSession((err, session) => {
    if (err) {
      console.error(err);
      return undefined;
    }
    console.log({ session });
    console.log("sesion validity: ", session.isValid());
    return session;
  });
};

export { signUp, authenticate, signOut, getSession };
