import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-north-1_dYfcNE54U',
  ClientId: '2b743cjaovgbqgg5ed8nbacg2t',
};

export default new CognitoUserPool(poolData);
