<img src="public/promo1.png">
<img src="public/promo2.png">

**Try it out live:** [GitHubUnwrapped.com](https://www.githubunwrapped.com)

A platform that generates a year in review video for each GitHub user. Built with Next.JS, Remotion and AWS Lambda.

## Make your own

Want to make your own year in review for your users?

- **Developers**: Feel free to fork use this repository as a template! Note the legal disclaimers at the bottom of this README.
- **Non-developers**: Reach out to [hi@remotion.dev](mailto:hi@remotion.dev) and we'll reach out to you in Fall 2023 for a free consultation!

## Setup

1. Run `npm i` to install dependencies.
2. Rename `.env.example` to `.env`
3. Set up your AWS account according to the [Remotion Lambda Setup guide](https://remotion.dev/docs/lambda/setup). We use multiple accounts for load-balancing:
   - Use `AWS_KEY_1` instead of `REMOTION_AWS_ACCESS_KEY_ID` and `AWS_SECRET_1` instead of `REMOTION_AWS_SECRET_ACCESS_KEY`.
   - You can use `AWS_KEY_2` and `AWS_SECRET_2` to load-balance between two accounts, or paste the same credentials as before to use the same account.
   - In `src/set-env-for-key.ts`, we rotate the environment variables.
4. Deploy the functions into your AWS account(s):
   ```
   npx ts-node deploy.ts
   ```
5. For caching the videos and GitHub API responses, set up a MongoDB (We use a free MongoDB Atlas Cloud instance) to save the videos. Set the connection string as `MONGO_URL`
6. For fetching data from GitHub, create a personal access token in your user settings and set it as `GITHUB_TOKEN`.
7. Optionally, provide `DISCORD_CHANNEL` and `DISCORD_TOKEN` values to send monitoring logs to Discord.

You now have all environment variables.

Run the web app:

```console
npm run dev
```

Edit the template in the Remotion preview:

```console
npm run preview
```

To deploy, connect your repository to Vercel.

Don't forget to also set the environment variables there too.

## Scaling strategy

To allow thousands of people to render their video at the same time, we applied multiple strategies for scaling:

- Caching the video whenever possible. Before each render, a MongoDB database lock is created to avoid multiple renders for the same GitHub user to be accidentally created.
- Renders are distributed across an array of AWS regions and accounts to avoid hitting the [concurrency limit](https://www.remotion.dev/docs/lambda/troubleshooting/rate-limit).

## Credits

We thank GitHub for their support in realization and promotion of this project.

## Music copyright disclaimer

The music was licensed for GitHubUnwrapped.com specifically. If you create a derivative project, you may not use it.

## License

The code in this repository: Licensed under MIT.  
The Remotion framework (a dependency of this project): Companies need to obtain a paid license. Read the terms [here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md#company-license).
