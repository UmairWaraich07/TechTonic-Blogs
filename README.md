# TechTonic - Modern Tech Blog

TechTonic is a modern, visually stunning tech blogging website built with Next.js, Tailwind CSS, and Sanity.io as the headless CMS. It's designed to impress and influence a tech-savvy audience with optimized performance, SEO, and responsive design.

## Features

- **Modern Design**: Clean, responsive layout with dark mode support
- **Headless CMS**: Sanity.io integration for content management
- **Performance Optimized**: Server-side rendering and static generation
- **SEO Friendly**: Dynamic metadata and Open Graph tags
- **Rich Content**: Code syntax highlighting, responsive images
- **Interactive UI**: Animations with Framer Motion
- **Search & Filter**: Find content by keywords or categories
- **Newsletter Integration**: Ready to connect to your email service

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Sanity.io account

### Installation

1. Clone this repository:
   \`\`\`bash
   git clone https://github.com/yourusername/tech-tonic.git
   cd tech-tonic
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Setting up Sanity.io

1. Install the Sanity CLI:
   \`\`\`bash
   npm install -g @sanity/cli
   \`\`\`

2. Initialize a new Sanity project:
   \`\`\`bash
   sanity init
   \`\`\`

3. Import the schemas from `lib/sanity-schemas` into your Sanity project.

4. Deploy your Sanity studio:
   \`\`\`bash
   sanity deploy
   \`\`\`

## Project Structure

- `app/`: Next.js App Router pages and layouts
- `components/`: Reusable React components
- `lib/`: Utility functions and Sanity client
- `lib/sanity-schemas/`: Sanity.io schema definitions
- `public/`: Static assets

## Key Components

- **Hero Section**: Eye-catching intro with TechTonic branding
- **Latest Posts**: Showcases the most recent articles
- **Popular Categories**: Displays tech topics like AI, Web Dev, etc.
- **Featured Post**: Highlights an editor's pick
- **Newsletter Signup**: Form to collect emails
- **About Page**: Details the mission of TechTonic
- **Single Blog Post Page**: Rich content with author bio, tags, and share buttons
- **Search and Filter**: Enables users to search or filter by tags and categories
- **Dark Mode Toggle**: Theme switcher for user preference

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by modifying:

- `tailwind.config.ts`: Theme colors and other Tailwind settings
- `app/globals.css`: Global styles and custom CSS

### Content Structure

The Sanity schemas define the content structure:

- `post.ts`: Blog post schema
- `author.ts`: Author information
- `category.ts`: Content categories
- `about.ts`: About page content

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set the environment variables
4. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.
