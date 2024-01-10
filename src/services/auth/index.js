import { AuthSDK } from '@platforms-web/mosaic-auth-js-sdk';

export const authService = new AuthSDK({ apiKey: process.env.X_API_KEY });

export default authService;
