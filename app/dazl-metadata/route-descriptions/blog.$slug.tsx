import { blogPosts } from "~/data/blog";

interface SuggestedRoute {
  title: string;
  uri: string;
}

interface RouteDescription {
  suggestedRoutes: SuggestedRoute[];
  itemTitle: string;
}

export function getRouteDescription(): RouteDescription {
  return {
    suggestedRoutes: blogPosts.map((post) => ({
      title: post.title,
      uri: `/blog/${post.slug}`,
    })),
    itemTitle: "Blog Post",
  };
}
