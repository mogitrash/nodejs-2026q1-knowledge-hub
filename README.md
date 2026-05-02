# Knowledge Hub

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker Image - [Docker Hub](https://hub.docker.com/repository/docker/mogitrash/nodejs-2026q1-knowledge-hub-knowledge-hub/general)

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Gemini API setup (AI routes)

Endpoints under **`/ai`** (summarize, translate, analyze, generate) call Google’s **Gemini** API via the [`@google/genai`](https://www.npmjs.com/package/@google/genai) SDK. Without a valid key those routes respond with authentication or gateway errors instead of completions.

### 1. Obtain an API key

1. Open [Google AI Studio](https://aistudio.google.com/) and sign in with a Google account.
2. Go to **Get API key** (direct link: [Gemini API key](https://aistudio.google.com/apikey)).
3. Create a key for the **Gemini Developer API** and copy it. Treat it like a secret: do not commit it to Git.

Official overview: [Gemini API - API keys](https://ai.google.dev/gemini-api/docs/api-key).

### 2. Configure environment variables

Create a `.env` file next to `.env.example` (or extend your existing `.env`). The application loads variables with `dotenv` on startup (`src/main.ts`).

| Variable | Required for AI | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes | API key string. With Node.js and `new GoogleGenAI({})`, the SDK picks this up automatically when set in the environment. |
| `GEMINI_MODEL` | Recommended | Model id passed to Gemini (must be available for your key), e.g. `gemini-2.0-flash`. Defaults in `.env.example`. |
| `AI_RATE_LIMIT_RPM` | No | Requests per minute for **POST** `/ai/**` handlers (excluding `GET /ai/usage`). Default `20`. |
| `AI_CACHE_TTL_SEC` | No | Response cache TTL in seconds for summarize/translate only. Default `300`. |

`GEMINI_API_BASE_URL` appears in `.env.example` as the canonical REST host for Gemini (`https://generativelanguage.googleapis.com`). **This codebase does not read that variable**—the `@google/genai` client targets the Gemini API endpoints by default—so changing it alone has no effect unless you integrate it yourself.

### 3. Run the app as usual

Set the variables in `.env`, then follow [Running application with Docker Compose](#running-application-with-docker-compose) or start the Nest app locally. After the server is up, try **OpenAPI** at `http://localhost:4000/doc/` under the `ai` tag, or call **`GET /ai/usage`** for in-memory request/token counters (when the API returns token usage metadata).

## Running application with Docker Compose

1. Generate Prisma Client:

```
npx prisma generate
```

2. Start the app and database with Docker Compose:

```
docker compose up --build -d
```

3. Seed the database:

```
npx prisma db seed
```

After starting the app on port (4000 as default), you can open
OpenAPI documentation in your browser by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization

```
npm run test:auth -- <path to suite>
```

To run refresh token tests

```
npm run test:refresh
```

To run RBAC (role-based access control) tests

```
npm run test:rbac
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
