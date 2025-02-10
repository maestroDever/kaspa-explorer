# Nacho the Kat – Frontend Coding Assessment

## Objective
Build a modern, simple, and functional Kaspa Token Explorer using Next.js, Tailwind CSS, and RESTful API calls. This small app will fetch and display token details from a provided API and should be built in a serverless manner (deployable on Cloudflare Pages).

## Requirements
- Create a Next.js app that displays information about a specific KRC20 token (e.g., NACHO token on Kaspa).
- Use Tailwind CSS for styling and create a clean, responsive UI.
- Fetch token data from the Kasplex Token API (we will provide a test API endpoint).
- Display the following token details:
  - Token Logo
  - Token Name
  - Token Ticker
  - Total Supply
  - Holders Count
  - Latest Transactions (last 50 transactions)
- Allow the user to search for any Kaspa token by Ticker and update the UI dynamically.
- Ensure the app is serverless (no backend required) and Cloudflare Pages-compatible.

## Bonus (Optional, if time permits)
- Implement a dark mode toggle using Tailwind.
- Add a simple loading state while fetching data.
- Use TypeScript for better type safety.

## Submission
- Provide a GitHub repository with your solution.
- Include a README with setup instructions.
- Deployment is not required, but we will deploy it live in the interview.

## API Documentation for Kaspa Tokens
- [Kasplex Indexer API Documentation](https://docs.kasplex.org/tools-and-reference/kasplex-indexer-api/krc-20)
- Mainnet Base URL: `https://api.kasplex.org`

## Evaluation Criteria
- Code quality (clean, modular, and well-structured).
- Proper usage of Next.js, Tailwind CSS, and RESTful API integration.
- UI/UX considerations (should be simple yet intuitive).
- Ability to handle dynamic data updates (search functionality).
