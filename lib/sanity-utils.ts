import { createClient } from "next-sanity";

// Check if required environment variables are defined
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  console.error(
    "Missing required environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
  );
}

// Create client only if projectId is available
const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;

// Add fallback data for development
const fallbackCategories = [
  {
    _id: "category-ai",
    title: "AI",
    slug: "ai",
    postCount: 5,
  },
  {
    _id: "category-web-dev",
    title: "Web Development",
    slug: "web-development",
    postCount: 8,
  },
  {
    _id: "category-gadgets",
    title: "Gadgets",
    slug: "gadgets",
    postCount: 3,
  },
  {
    _id: "category-coding-tips",
    title: "Coding Tips",
    slug: "coding-tips",
    postCount: 6,
  },
];

const fallbackPosts = [
  {
    _id: "post-1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt: "Learn how to build modern web applications with Next.js",
    mainImage: "/placeholder.svg?height=300&width=600",
    publishedAt: new Date().toISOString(),
    categories: [fallbackCategories[1]],
    author: {
      _id: "author-1",
      name: "John Doe",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    _id: "post-2",
    title: "The Future of AI in Web Development",
    slug: "future-of-ai-in-web-development",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we build websites",
    mainImage: "/placeholder.svg?height=300&width=600",
    publishedAt: new Date().toISOString(),
    categories: [fallbackCategories[0], fallbackCategories[1]],
    author: {
      _id: "author-1",
      name: "John Doe",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    _id: "post-3",
    title: "Top 10 Gadgets for Developers",
    slug: "top-10-gadgets-for-developers",
    excerpt: "Essential tools and gadgets that every developer should consider",
    mainImage: "/placeholder.svg?height=300&width=600",
    publishedAt: new Date().toISOString(),
    categories: [fallbackCategories[2]],
    author: {
      _id: "author-2",
      name: "Jane Smith",
      image: "/placeholder.svg?height=40&width=40",
    },
  },
];

export async function getAllPosts() {
  if (!client) return fallbackPosts;

  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        categories[]->{
          _id,
          title,
          slug
        },
        author->{
          _id,
          name,
          image
        }
      }`
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug) {
  if (!client) {
    const post = fallbackPosts.find((p) => p.slug === slug);
    return post || null;
  }

  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug: slug.current,
        content,
        excerpt,
        mainImage,
        publishedAt,
        categories[]->{
          _id,
          title,
          slug: slug.current
        },
        author->{
          _id,
          name,
          image,
          bio,
          twitter,
          linkedin,
          website
        }
      }`,
      { slug }
    );
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

export async function getFeaturedPost() {
  if (!client) return fallbackPosts[0];

  try {
    const featured = await client.fetch(
      `*[_type == "post" && featured == true][0] {
        _id,
        title,
        slug: slug.current,
        excerpt,
        mainImage,
        publishedAt,
        categories[]->{
          _id,
          title,
          slug: slug.current
        },
        author->{
          _id,
          name,
          image,
          role
        }
      }`
    );
    return featured || fallbackPosts[0];
  } catch (error) {
    console.error("Error fetching featured post:", error);
    return fallbackPosts[0];
  }
}

export async function getAllCategories() {
  if (!client) return fallbackCategories;

  try {
    return await client.fetch(
      `*[_type == "category"] {
        _id,
        title,
        slug: slug.current,
        "postCount": count(*[_type == "post" && references(^._id)])
      }`
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return fallbackCategories;
  }
}

export async function getPostsByCategory(categorySlug) {
  if (!client) {
    return fallbackPosts.filter((post) =>
      post.categories.some((cat) => cat.slug === categorySlug)
    );
  }

  try {
    return await client.fetch(
      `*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
        _id,
        title,
        slug: slug.current,
        excerpt,
        mainImage,
        publishedAt,
        categories[]->{
          _id,
          title,
          slug: slug.current
        },
        author->{
          _id,
          name,
          image
        }
      }`,
      { categorySlug }
    );
  } catch (error) {
    console.error(`Error fetching posts for category ${categorySlug}:`, error);
    return [];
  }
}

export async function getRelatedPosts(postId, categories) {
  if (!client) {
    return fallbackPosts.filter((post) => post._id !== postId).slice(0, 3);
  }

  const categoryIds = categories ? categories.map((cat) => cat._id) : [];

  try {
    return await client.fetch(
      `*[_type == "post" && _id != $postId && count((categories[]->_id)[@ in $categoryIds]) > 0] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug: slug.current,
        excerpt,
        mainImage,
        publishedAt,
        categories[]->{
          _id,
          title,
          slug: slug.current
        },
        author->{
          _id,
          name,
          image
        }
      }`,
      { postId, categoryIds }
    );
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}

export async function searchPosts(query = "", category = "") {
  if (!client) {
    let filteredPosts = [...fallbackPosts];

    if (query) {
      const lowerQuery = query.toLowerCase();
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery)
      );
    }

    if (category) {
      filteredPosts = filteredPosts.filter((post) =>
        post.categories.some((cat) => cat.slug === category)
      );
    }

    return filteredPosts;
  }

  try {
    let searchQuery = `*[_type == "post"`;

    if (query) {
      searchQuery += ` && (title match "*${query}*" || excerpt match "*${query}*")`;
    }

    if (category) {
      searchQuery += ` && "${category}" in categories[]->slug.current`;
    }

    searchQuery += `] | order(publishedAt desc) {
      _id,
      title,
      slug: slug.current,
      excerpt,
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title,
        slug: slug.current
      },
      author->{
        _id,
        name,
        image
      }
    }`;

    return await client.fetch(searchQuery);
  } catch (error) {
    console.error("Error searching posts:", error);
    return [];
  }
}

export async function getAboutPage() {
  if (!client) {
    return {
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "TechTonic is a modern tech blog dedicated to bringing you the latest insights, tutorials, and news from the world of technology. Our mission is to make complex tech topics accessible to everyone, from beginners to experts.",
            },
          ],
          style: "normal",
        },
      ],
      mainImage: "/placeholder.svg?height=600&width=1200",
      team: [
        {
          _id: "team-1",
          name: "John Doe",
          role: "Founder & Editor",
          image: "/placeholder.svg?height=128&width=128",
          bio: "Tech enthusiast and web developer with over 10 years of experience.",
        },
        {
          _id: "team-2",
          name: "Jane Smith",
          role: "Senior Writer",
          image: "/placeholder.svg?height=128&width=128",
          bio: "AI researcher and technical writer specializing in emerging technologies.",
        },
        {
          _id: "team-3",
          name: "Mike Johnson",
          role: "UX Designer",
          image: "/placeholder.svg?height=128&width=128",
          bio: "Designer with a passion for creating intuitive and beautiful interfaces.",
        },
      ],
    };
  }

  try {
    return await client.fetch(
      `*[_type == "about"][0] {
        content,
        mainImage,
        team[] {
          _id,
          name,
          role,
          image,
          bio
        }
      }`
    );
  } catch (error) {
    console.error("Error fetching about page:", error);
    return {
      content: [],
      mainImage: "/placeholder.svg?height=600&width=1200",
      team: [],
    };
  }
}
