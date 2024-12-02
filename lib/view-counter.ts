type ViewCount = {
  [slug: string]: number;
};

// In a real app, this would be stored in a database
let viewCounts: ViewCount = {};

export function incrementViewCount(slug: string): number {
  if (!viewCounts[slug]) {
    viewCounts[slug] = 0;
  }
  viewCounts[slug]++;
  return viewCounts[slug];
}

export function getViewCount(slug: string): number {
  return viewCounts[slug] || 0;
}