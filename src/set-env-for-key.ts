export const setEnvForKey = (key: number) => {
  process.env.REMOTION_AWS_ACCESS_KEY_ID = process.env[`AWS_KEY_${key}`];
  process.env.REMOTION_AWS_SECRET_ACCESS_KEY = process.env[`AWS_SECRET_${key}`];
};
