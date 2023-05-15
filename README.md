This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Premise

In our data grid users can change the days of the week a current line would air on. What we would like to see is how you would handle this particular request.

# Scope
The function should be able to handle the following.
Accept days in the following formats
m,t,w,th,f,s,su
mon, tue, etc
monday, tuesday, etc
The event should not be case sensitive
A dash (-) should be allowed for consecutive days (m-w = Monday, Tuesday,  Wednesday)
Commas would allow individual days (th,s,su = Thursday, Saturday Sunday)
The dash and comma can be combined (m-w,s,su = Monday, Tuesday, Wednesday, Saturday, Sunday)
The function should return numbers to represent the days Sunday being 1 and Saturday being 7
It should not matter what order the days, dashes or commas are in. (th,m-w,su)

# Result
A front end UI was built to display a data grid where a user can enter days of the week in the mentioned formats and see a list of numbers corresponding with the entered days.

# Testing
Jest was used for testing purposes. The testing suite can be run on your local machine with a 'yarn test' (or whatever package manager you use).