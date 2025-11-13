import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { generateMetaTags, generateStructuredData } from '../utils/seo';

const Home = () => {
  const [news, setNews] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const [newsRes, videosRes] = await Promise.all([
        axios.get('/api/news?limit=3'),
        axios.get('/api/videos?limit=3'),
      ]);
      setNews(newsRes.data.news || []);
      setVideos(videosRes.data.videos || []);
    } catch (error) {
      console.error('Error fetching home data:', error);
    } finally {
      setLoading(false);
    }
  };

  const metaTags = generateMetaTags({});
  const structuredData = generateStructuredData('website', {});

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta property="og:title" content={metaTags.openGraph.title} />
        <meta property="og:description" content={metaTags.openGraph.description} />
        <meta property="og:image" content={metaTags.openGraph.image} />
        <meta property="og:url" content={metaTags.openGraph.url} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden grid-background">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gta-dark/50 to-gta-dark"></div>
          
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-gta font-bold mb-6 animate-fade-in">
              <span className="text-gta-neon neon-text">WELCOME TO</span>
              <br />
              <span className="text-gta-gold neon-text-gold">GTA LUX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-body mb-8 animate-slide-up">
              Your Ultimate Destination for GTA 6 News, Videos, Guides & More
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/news"
                className="px-8 py-4 bg-gta-neon text-gta-dark rounded-lg font-gta font-bold text-lg hover:shadow-neon transition-all duration-300 gta-button"
              >
                Latest News
              </Link>
              <Link
                to="/videos"
                className="px-8 py-4 bg-gta-gold text-gta-dark rounded-lg font-gta font-bold text-lg hover:shadow-gold transition-all duration-300 gta-button"
              >
                Watch Videos
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gta-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Featured Trailer Section */}
        <section className="py-20 px-4 bg-gta-blue">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-gta font-bold text-center mb-12">
              <span className="text-gta-neon">Official</span>{' '}
              <span className="text-gta-gold">Trailer</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="video-container rounded-xl overflow-hidden shadow-2xl border-2 border-gta-neon/30 hover:border-gta-neon transition-all duration-300">
                <iframe
                  src="https://www.youtube.com/embed/QdBZY2fkU-0"
                  title="GTA 6 Official Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-gta font-bold">
                <span className="text-gta-neon">Latest</span>{' '}
                <span className="text-gta-gold">News</span>
              </h2>
              <Link
                to="/news"
                className="text-gta-neon hover:text-gta-gold font-body font-semibold transition-colors duration-300"
              >
                View All →
              </Link>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="gta-loader"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.length > 0 ? (
                  news.map((item) => (
                    <Link
                      key={item._id}
                      to={`/news/${item._id}`}
                      className="gta-card rounded-xl overflow-hidden group"
                    >
                      <div className="aspect-video bg-gta-blue-light overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gta-neon text-6xl">
                            📰
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-gta font-bold text-white mb-2 group-hover:text-gta-neon transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 font-body line-clamp-2 mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 font-body">
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                          <span className="text-gta-neon">Read More →</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-gray-400 font-body text-lg">No news available yet. Check back soon!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Featured Videos Section */}
        <section className="py-20 px-4 bg-gta-blue">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-gta font-bold">
                <span className="text-gta-neon">Featured</span>{' '}
                <span className="text-gta-gold">Videos</span>
              </h2>
              <Link
                to="/videos"
                className="text-gta-neon hover:text-gta-gold font-body font-semibold transition-colors duration-300"
              >
                View All →
              </Link>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="gta-loader"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.length > 0 ? (
                  videos.map((video) => (
                    <div key={video._id} className="gta-card rounded-xl overflow-hidden group">
                      <div className="aspect-video bg-gta-blue-light overflow-hidden">
                        {video.thumbnail ? (
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gta-neon text-6xl">
                            🎬
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-gta-neon rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-gta-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-gta font-bold text-white mb-2 group-hover:text-gta-neon transition-colors duration-300">
                          {video.title}
                        </h3>
                        <p className="text-gray-400 font-body line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-gray-400 font-body text-lg">No videos available yet. Check back soon!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-gta font-bold text-center mb-12">
              <span className="text-gta-neon">Why Choose</span>{' '}
              <span className="text-gta-gold">GTA Lux?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '📰', title: 'Latest News', desc: 'Stay updated with breaking GTA 6 news and announcements' },
                { icon: '🎬', title: 'Exclusive Videos', desc: 'Watch gameplay, trailers, and community content' },
                { icon: '📝', title: 'In-Depth Blogs', desc: 'Read detailed analysis, guides, and theories' },
                { icon: '💬', title: 'Active Forum', desc: 'Join discussions with fellow GTA enthusiasts' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="gta-card rounded-xl p-8 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-gta font-bold text-gta-neon mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-body">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gta-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-gta font-bold mb-6">
              <span className="text-gta-neon neon-text">Join the Community</span>
            </h2>
            <p className="text-xl text-gray-300 font-body mb-8">
              Be part of the largest GTA 6 community. Share your thoughts, theories, and excitement!
            </p>
            <Link
              to="/register"
              className="inline-block px-10 py-4 bg-gta-gold text-gta-dark rounded-lg font-gta font-bold text-xl hover:shadow-gold transition-all duration-300 gta-button"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
