This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

To run unit tests:

```bash
npm run test
```

### Notes
The app uses a ISR strategy that would re-validate the data every 10 minutes. I took this approach since the data that we're displaying doesn't change very often therefore requesting it constantly wouldn't make a lot of sense in terms of resource management

### Demo
