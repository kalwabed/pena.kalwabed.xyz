# Pena
Website coordinates Kalwabed's abstract writings

## Demo

[https://pena.kalwabed.xyz](https://pena.kalwabed.xyz)
## Tech Stack
- Svelte Kit
- TypeScript
- Uno CSS + Tailwind CSS
- Prisma + Planetscale

## Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/kalwabed/pena.kalwabed.xyz.git
```

Then, install dependencies and fetch data to your local machine. **Note that we use PNPM.**

```bash
cd pena.kalwabed.xyz
pnpm install
```

Generate Prisma Client.
```bash
pnpx prisma generate
```

Finally, run the development server.

```bash
pnpm dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173) with your browser to see the result.
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file.

`DATABASE_URL`: Planetscale database URL.

`BOT_TOKEN`: (optional) Telegram bot token.

`BOT_GROUP_ID`: (optional) Telegram bot group id.

## Deployment
You can easily deploy to Vercel, or you can learn more from https://kit.svelte.dev/docs/adapters.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Svelte Kit Documentation](https://kit.svelte.dev/docs/introduction) - learn about Svelte Kit features and API.
- [Learn Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte) - an interactive Svelte tutorial.

## Authors

- [@kalwabed](https://www.github.com/kalwabed)

## License
[MIT](https://choosealicense.com/licenses/mit/)
