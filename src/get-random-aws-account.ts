import { getAccountCount } from "./get-account-count";

export const getRandomAwsAccount = () => {
  return Math.ceil(Math.random() * getAccountCount());
};
