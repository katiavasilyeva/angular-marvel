import md5 from 'md5';

export const date = new Date();
export const timeStamp = date.getTime().toString();
export const privateKey = 'e44c3a8e9faac2b86ef1edcbf178e02a55a495e5';
export const publicKey = 'bb762c2dbfa1c3304c3f0c443da71d49';
export const hash = md5(timeStamp + privateKey + publicKey);
