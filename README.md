# Mergit

A GitHub pull request auto-merge bot that merges PRs on command, with full
approval attribution in commit messages.

## How It Works

1. A contributor comments a trigger phrase (e.g. `/merge`) on a pull request.
2. Mergit verifies that CI checks are green.
3. Once all checks pass, Mergit rebases and squash-merges the PR.
4. The final commit message includes:
   - The PR title as the subject line
   - The PR description as the commit body
   - `Signed-off-by:` lines for each user who approved the PR (following the
     standard Git sign-off convention)
   - The pull request URL as the last line

### Example Commit Message

```
Add user authentication flow

Implement OAuth2 login with GitHub provider, session management,
and token refresh logic.

This replaces the previous session-cookie approach and adds support
for automatic token refresh.

Signed-off-by: Alice <alice@example.com>
Signed-off-by: Bob <bob@example.com>

https://github.com/org/repo/pull/42
```

The PR title becomes the first line and the PR description becomes the body,
so authors control the final commit message by writing a good PR description.

## Features

- **Comment-triggered merging** — merge PRs by posting a comment (e.g. `/merge`)
- **CI gating** — only merges when all GitHub Actions / status checks are green
- **Rebase & squash** — default merge strategy keeps history clean
- **Approval attribution** — `Signed-off-by` trailers for every approver
- **PR URL in commit** — every squash commit links back to its PR
- **Web dashboard** — view merge queue status, configuration, and history

## Architecture

### Backend

- **Runtime:** Node.js + TypeScript
- **Framework:** Express (or Fastify)
- **GitHub integration:** Probot / Octokit for webhook handling and GitHub API calls
- **Webhook events consumed:**
  - `issue_comment` — detect merge trigger comments
  - `pull_request_review` — track approvals
  - `check_suite` / `check_run` — monitor CI status
- **Queue:** In-memory queue (upgradeable to Redis) to manage pending merges

### Frontend

- **Server-side rendered** HTML templates (e.g. EJS or Handlebars) served by
  the same Express app — no separate frontend build step
- **Pages:**
  - **Dashboard** — list of repositories and active merge queue
  - **PR detail** — status of a specific PR's merge (checks, approvals, position in queue)
  - **Settings** — configure trigger phrases, required approvals, merge strategy per repo
  - **History** — log of completed merges with commit links

### Project Structure

```
mergit/
├── src/
│   ├── app.ts                  # Express app setup & view engine config
│   ├── webhooks/               # GitHub webhook handlers
│   │   ├── comment.ts          # /merge comment handler
│   │   ├── review.ts           # PR approval tracker
│   │   └── checks.ts          # CI status handler
│   ├── merge/
│   │   ├── queue.ts            # Merge queue management
│   │   ├── strategy.ts         # Rebase & squash logic
│   │   └── commit.ts           # Commit message builder (sign-offs + PR URL)
│   ├── github/
│   │   └── client.ts           # Octokit wrapper
│   ├── routes/                 # Express routes serving HTML pages
│   │   ├── dashboard.ts
│   │   ├── pr.ts
│   │   ├── settings.ts
│   │   └── history.ts
│   ├── db/                     # Persistence for per-repo settings
│   └── config.ts               # App configuration
├── views/                      # Server-side templates (EJS / Handlebars)
│   ├── layout.html
│   ├── dashboard.html
│   ├── pr.html
│   ├── settings.html
│   └── history.html
├── public/                     # Static assets (CSS, icons)
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md
```

## Merge Flow

```
Comment "/merge" on PR
        │
        ▼
  Is commenter authorized?
        │
     yes │
        ▼
  Are CI checks green?
   │              │
   no             yes
   │              │
   ▼              ▼
  Queue:        Collect PR approvals
  wait for CI        │
   │                 ▼
   └──►  Build commit message:
           • PR title + description
           • Signed-off-by per approver
           • PR URL
                     │
                     ▼
           Rebase & squash merge
                     │
                     ▼
              Post success comment
```

## Configuration

All configuration lives in the Mergit service — there are no config files
stored in target repositories. Per-repo settings are managed through the web
dashboard or the Mergit REST API.

| Setting            | Default    | Description                                     |
|--------------------|------------|-------------------------------------------------|
| `trigger`          | `/merge`   | Comment phrase that triggers a merge             |
| `strategy`         | `squash`   | Merge strategy: `merge`, `squash`, or `rebase`   |
| `required_checks`  | `all`      | `all` or a list of specific check names          |
| `delete_branch`    | `true`     | Delete the source branch after merging           |

## Development

```bash
# Install dependencies
npm install

# Start in dev mode (watches for changes)
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Start production server
npm start
```

## Planned Milestones

1. **Project scaffolding** — monorepo setup, TypeScript config, CI pipeline
2. **GitHub webhook handling** — receive and validate webhook events
3. **Merge logic** — rebase/squash merge with commit message formatting
4. **CI gating** — wait for green checks before merging
5. **Web dashboard** — server-rendered frontend for queue visibility and configuration
6. **Auth & multi-repo** — GitHub App installation across multiple repos

## License

See [LICENSE](./LICENSE).
