
## How to run the development server

First, Install dependencies:

```bash
npm install
# or
bun install
```

Second, run the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Third, run json server as a mock API.

```bash
npx json-server --watch db.json --port 3001
# or
bunx json-server --watch db.json --port 3001
```

