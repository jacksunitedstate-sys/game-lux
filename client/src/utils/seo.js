export const generateMetaTags = (data) => {
  const {
    title = 'GTA Lux - Ultimate GTA 6 Gaming Hub',
    description = 'Your ultimate destination for GTA 6 news, videos, blogs, leaks, updates, and guides.',
    keywords = 'GTA 6, Grand Theft Auto 6, GTA VI, gaming news, game leaks, GTA updates',
    image = '/og-image.jpg',
    url = 'https://gtalux.com',
    type = 'website',
  } = data;

  return {
    title,
    description,
    keywords,
    openGraph: {
      type,
      url,
      title,
      description,
      image,
    },
    twitter: {
      card: 'summary_large_image',
      url,
      title,
      description,
      image,
    },
  };
};

export const generateStructuredData = (type, data) => {
  const baseData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'article':
      return {
        ...baseData,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate,
        author: {
          '@type': 'Person',
          name: data.author,
        },
      };
    
    case 'video':
      return {
        ...baseData,
        '@type': 'VideoObject',
        name: data.title,
        description: data.description,
        thumbnailUrl: data.thumbnail,
        uploadDate: data.uploadDate,
        contentUrl: data.url,
      };
    
    case 'website':
      return {
        ...baseData,
        '@type': 'WebSite',
        name: 'GTA Lux',
        url: 'https://gtalux.com',
        description: 'Ultimate GTA 6 Gaming Hub',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://gtalux.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      };
    
    default:
      return baseData;
  }
};
