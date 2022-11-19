import { AwsRegion, getRegions } from "@remotion/lambda";

// Two regions were reserved to save the concurrency for other projects.
// Adjust to you own use.
export const usedRegions: AwsRegion[] = getRegions().filter(
  (r) => r !== "eu-central-1" && r !== "us-east-1"
);

export const getRandomRegion = (): AwsRegion => {
  return usedRegions[Math.floor(Math.random() * usedRegions.length)];
};
