# AI Battle Arena - Frontend Walkthrough

## Google Stitch Design

The UI was designed in Google Stitch with a dark, modern, vibrant theme before implementation.

### Design System
| Token | Value |
|---|---|
| **Primary Color** | `#7C3AED` (Purple) |
| **Secondary Color** | `#06B6D4` (Cyan) |
| **Tertiary Color** | `#F59E0B` (Amber) |
| **Headline Font** | Space Grotesk |
| **Body Font** | Inter |
| **Mono Font** | Space Mono |
| **Color Mode** | Dark |
| **Roundness** | 12px (rounded-xl) |
| **Color Variant** | Vibrant |

---
## Project Structure

```
Frontend/
├── index.html                    # Entry HTML with SEO meta tags & Google Fonts
├── public/favicon.svg            # Lightning bolt gradient favicon
├── .env.example                  # Backend URL config
├── src/
│   ├── main.jsx                  # React entry point
│   ├── app/
│   │   ├── App.jsx               # Main app with state management & API calls
│   │   └── index.css             # Complete design system (Tailwind v4 @theme)
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky glassmorphism navbar
│   │   ├── Footer.jsx            # Minimal footer
│   │   ├── FeatureCards.jsx      # Three feature cards (Dual AI, Judge, Reasoning)
│   │   ├── LoadingBattle.jsx     # Battle-in-progress state with skeleton cards
│   │   └── SolutionCard.jsx      # Solution card with markdown, score badge, reasoning
│   └── pages/
│       ├── HomePage.jsx          # Hero section + query input + feature cards
│       └── ResultsPage.jsx       # Query card + score bar + solution cards + new battle
```

## NPM Packages Installed

| Package | Purpose |
|---|---|
| `axios` | HTTP client for backend API calls |
| `react-router-dom` | Routing (available for future use) |
| `react-markdown` | Markdown rendering for AI solutions |
| `remark-gfm` | GitHub Flavored Markdown support |
| `rehype-highlight` | Code syntax highlighting |
| `react-hot-toast` | Toast notifications |
| `lucide-react` | Modern icon library |

## Key Features Built

### 1. Home Page
- Hero section with gradient headline "AI Battle Arena"
- Glassmorphism textarea for query input
- Gradient "Start Battle" button (purple → cyan)
- Three feature cards with staggered entrance animations
- Background dot pattern

### 2. Loading State
- Animated swords icon with spinning ring
- Pulsing progress dots
- Skeleton card previews

### 3. Results Page
- **Query Card**: Displays the user's original prompt
- **Score Summary Bar**: VS badge with proportional score visualization
- **Solution Cards** (side-by-side on desktop, stacked on mobile):
  - Color-coded score badges (green ≥9, amber ≥7, red <7)
  - Winner crown + trophy badge
  - Markdown-rendered solutions with syntax highlighting
  - Judge's reasoning section
- "New Battle" button

### 4. Responsive Design
- Mobile-first with Tailwind breakpoints (`sm:`, `lg:`)
- Cards stack vertically on mobile, side-by-side on desktop
- Fluid typography scaling
- Touch-friendly button sizes

## API Integration

The frontend expects a `POST /api/battle` endpoint:

**Request:**
```json
{ "query": "Write code for factorial function in JavaScript." }
```

**Response:**
```json
{
  "problem": "Write code for factorial function in JavaScript.",
  "solution_1": "markdown content...",
  "solution_2": "markdown content...",
  "judge": {
    "solution_1_score": 9,
    "solution_2_score": 8,
    "solution_1_reasoning": "...",
    "solution_2_reasoning": "..."
  }
}
```

> [!TIP]
> Configure the backend URL via `VITE_API_BASE_URL` environment variable. Defaults to `http://localhost:3000`.

## Running the App

```bash
npm run dev
# → http://localhost:5173
```
