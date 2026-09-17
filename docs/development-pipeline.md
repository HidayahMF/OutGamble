# OutGamble — Development Pipeline

> Code-grounded architecture and delivery guide for the current repository snapshot. Reviewed from `main` at `07e3b9fe5fb3` on 2026-09-17.

The current repository is a React educational website focused on awareness and prevention, with several informational routes and a chatbot interface prototype.

## 1. Frontend architecture

```mermaid
flowchart LR
    U[Visitor] --> A[React App]
    A --> R[React Router]
    R --> HOME[Home]
    R --> EDU[Education]
    R --> STAT[Statistics]
    R --> COM[Community]
    R --> BOT[OutGambleBot UI]
```

## 2. Route and layout flow

```mermaid
flowchart TD
    PATH[Current Route] --> CHECK{Route = /OutGambleBot?}
    CHECK -->|Yes| BOT[Render bot page without shared nav]
    CHECK -->|No| NAV[Render shared navigation]
    NAV --> PAGE[Render selected information page]
```

## 3. Chatbot status

```mermaid
flowchart LR
    INPUT[Text Input] --> UI[Bot Interface]
    UI -. no message-processing handler in reviewed source .-> NONE[No live reply pipeline]
```

The reviewed `OutGambleBot` component provides presentation elements but does not establish a live AI/message backend.

## 4. Runtime ownership

| Layer | Responsibility | Key source |
| --- | --- | --- |
| React app | Shared routing/layout | `frontend/src/App.jsx` |
| Bot page | Chatbot interface prototype | `frontend/src/pages/OutGambleBot.jsx` |
| Community | Community information UI | `frontend/src/pages/Community.jsx` |
| Assets/data | Educational content and visuals | Frontend source/assets |

## 5. Development pipeline

```mermaid
flowchart LR
    SRC[Pull source] --> NPM[Install frontend deps]
    NPM --> DEV[Run Vite]
    DEV --> CONTENT[Review content + routes]
    CONTENT --> LINT[Lint]
    LINT --> BUILD[Production build]
    BUILD --> REVIEW[Preview + review]
```

| Directory | Command | Purpose |
| --- | --- | --- |
| `frontend` | `npm run dev` | Vite development server |
| `frontend` | `npm run build` | Production frontend build |
| `frontend` | `npm run lint` | ESLint |

## 6. Verification gates

- Every route renders directly on page refresh.
- Shared navigation correctly hides/shows around the bot route.
- Back/forward navigation works.
- Forms and controls have accessible labels and keyboard behavior.
- Mobile/narrow-screen layouts remain usable.
- External links/assets resolve.
- Educational claims are independently fact-checked before publication.
- The bot UI is not described as live AI until a real processing flow exists.

## 7. Release pipeline

```mermaid
flowchart LR
    PR[Reviewed PR] --> LINT[Lint]
    LINT --> BUILD[Production build]
    BUILD --> PREVIEW[Static preview]
    PREVIEW --> ROUTES[Direct-route smoke test]
    ROUTES --> DEPLOY[Static deployment]
```

No backend, database, or GitHub Actions workflow was present in the reviewed snapshot.

## 8. Current scope vs future capability

```mermaid
flowchart TD
    CURRENT[Implemented in this repo] --> SITE[Educational React site]
    CURRENT --> BOTUI[Chatbot UI prototype]
    FUTURE[Not established by reviewed source] --> AI[Live AI replies]
    FUTURE --> ACCOUNT[Account management]
    FUTURE --> MOBILE[Android protection features]
```

## 9. Known gaps

1. No backend/database appears in the reviewed tree.
2. `OutGambleBot` is presentation-only in the inspected implementation.
3. No conventional automated test suite was found.
4. CI automation is not present under `.github/workflows/` in this snapshot.

## 10. Source map

- [`frontend/src/App.jsx`](https://github.com/HidayahMF/OutGamble/blob/07e3b9fe5fb3442af9d248dece805a88120cf133/frontend/src/App.jsx)
- [`frontend/src/pages/OutGambleBot.jsx`](https://github.com/HidayahMF/OutGamble/blob/07e3b9fe5fb3442af9d248dece805a88120cf133/frontend/src/pages/OutGambleBot.jsx)
- [`frontend/src/pages/Community.jsx`](https://github.com/HidayahMF/OutGamble/blob/07e3b9fe5fb3442af9d248dece805a88120cf133/frontend/src/pages/Community.jsx)

Keep this guide synchronized with routing, factual content, and any future backend/chatbot implementation.