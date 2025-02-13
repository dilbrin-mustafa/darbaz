import React, { useState } from 'react';
import { 
  BookOpen,
  Clock,
  Tag,
  ArrowRight,
  MessageCircle,
  Eye,
  Bookmark,
  Search
} from 'lucide-react';

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogs = [
    {
      title: "Building Scalable React Applications with Next.js",
      description: "Learn how to create performant and scalable React applications using Next.js. We'll cover SSR, ISR, and deployment strategies.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "react",
      tags: ["React", "Next.js", "Performance"],
      views: 1240,
      comments: 28,
      image: "/api/placeholder/800/400",
      link: "#"
    },
    {
      title: "Advanced TypeScript Patterns for React",
      description: "Discover advanced TypeScript patterns and best practices for building type-safe React applications. Includes real-world examples.",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "typescript",
      tags: ["TypeScript", "React", "Development"],
      views: 980,
      comments: 15,
      image: "/api/placeholder/800/400",
      link: "#"
    },
    {
      title: "Modern State Management in React",
      description: "Compare different state management solutions in React including Context, Redux Toolkit, Zustand, and Jotai.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "react",
      tags: ["React", "State Management", "Redux"],
      views: 1560,
      comments: 42,
      image: "/api/placeholder/800/400",
      link: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'react', label: 'React' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'javascript', label: 'JavaScript' }
  ];

  const filteredBlogs = blogs
    .filter(blog => 
      (activeFilter === 'all' || blog.category === activeFilter) &&
      (searchQuery === '' || 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <section id="blogs" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white relative">
              Latest Blog Posts
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-teal-400"></span>
            </h2>
            <BookOpen className="w-12 h-12 text-teal-400" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            Thoughts, tutorials, and insights about web development, programming, and technology.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-teal-400 text-slate-900 font-medium'
                    : 'bg-slate-800 text-gray-400 hover:text-teal-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Categories and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-gray-400">{blog.readTime}</span>
                  </div>
                  <span className="text-sm text-gray-400">{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-900 rounded-full text-xs font-mono text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      {blog.views}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <MessageCircle className="w-4 h-4" />
                      {blog.comments}
                    </span>
                  </div>
                  <a
                    href={blog.link}
                    className="flex items-center gap-2 text-teal-400 hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;