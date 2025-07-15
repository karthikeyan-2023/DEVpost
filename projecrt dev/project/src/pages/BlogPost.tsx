import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Eye, ArrowLeft, Tag, Share2 } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams();

  const mockPost = {
    id: 1,
    title: 'Building Scalable React Applications',
    content: `
# Building Scalable React Applications

When building large-scale React applications, architecture and organization become crucial for maintainability and team collaboration. In this comprehensive guide, we'll explore the best practices and patterns that will help you build scalable React applications.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Component Architecture](#component-architecture)
3. [State Management](#state-management)
4. [Performance Optimization](#performance-optimization)
5. [Testing Strategies](#testing-strategies)

## Project Structure

A well-organized project structure is the foundation of any scalable application. Here's a recommended structure:

\`\`\`
src/
├── components/
│   ├── common/
│   ├── forms/
│   └── layout/
├── hooks/
├── services/
├── utils/
├── types/
└── pages/
\`\`\`

### Component Organization

Organize your components by feature rather than by file type. This approach makes it easier to locate and maintain related code.

\`\`\`jsx
// Good: Feature-based organization
src/
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   └── dashboard/
│       ├── components/
│       ├── hooks/
│       └── services/
\`\`\`

## Component Architecture

### 1. Separation of Concerns

Keep your components focused on a single responsibility. Separate business logic from presentation logic:

\`\`\`jsx
// Custom hook for business logic
function useUserData(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(userId).then(setUser).finally(() => setLoading(false));
  }, [userId]);
  
  return { user, loading };
}

// Presentational component
function UserProfile({ userId }) {
  const { user, loading } = useUserData(userId);
  
  if (loading) return <LoadingSpinner />;
  return <UserCard user={user} />;
}
\`\`\`

### 2. Prop Drilling Solutions

Avoid prop drilling by using context API or state management libraries:

\`\`\`jsx
// Context for shared state
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
\`\`\`

## State Management

Choose the right state management solution based on your application's complexity:

### Local State
Use \`useState\` for component-specific state that doesn't need to be shared.

### Context API
Perfect for sharing state across multiple components without prop drilling.

### Redux/Zustand
For complex applications with intricate state interactions.

\`\`\`jsx
// Example with Zustand
import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null })
}));
\`\`\`

## Performance Optimization

### 1. Code Splitting

Implement code splitting to reduce initial bundle size:

\`\`\`jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

### 2. Memoization

Use React.memo and useMemo strategically:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({ ...item, processed: true }));
  }, [data]);
  
  return <div>{processedData.map(item => <Item key={item.id} {...item} />)}</div>;
});
\`\`\`

### 3. Virtual Scrolling

For large lists, implement virtual scrolling:

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <Item data={items[index]} />
    </div>
  );
  
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </List>
  );
}
\`\`\`

## Testing Strategies

### Unit Testing

Test individual components in isolation:

\`\`\`jsx
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('displays user information', () => {
  const user = { name: 'John Doe', email: 'john@example.com' };
  render(<UserProfile user={user} />);
  
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
});
\`\`\`

### Integration Testing

Test component interactions:

\`\`\`jsx
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('submits form with correct data', async () => {
  const mockSubmit = jest.fn();
  render(<LoginForm onSubmit={mockSubmit} />);
  
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'test@example.com' }
  });
  
  fireEvent.click(screen.getByText('Login'));
  
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com'
  });
});
\`\`\`

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. Focus on:

- Clean architecture and organization
- Proper state management
- Performance optimization
- Comprehensive testing
- Code reusability

By following these guidelines, you'll create maintainable applications that can grow with your needs.

---

*What are your thoughts on React scalability? Share your experiences in the comments below!*
    `,
    author: 'John Doe',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedDate: '2024-01-15',
    readTime: '8 min read',
    views: 1250,
    tags: ['React', 'JavaScript', 'Architecture', 'Performance', 'Testing'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200'
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'React Performance Optimization Tips',
      excerpt: 'Learn how to optimize your React applications for better performance',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'State Management in React',
      excerpt: 'Comparing different state management solutions for React applications',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: mockPost.title,
        text: mockPost.content.substring(0, 100) + '...',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-6">
            <img
              src={mockPost.image}
              alt={mockPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {mockPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center space-x-3">
              <img
                src={mockPost.authorAvatar}
                alt={mockPost.author}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{mockPost.author}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(mockPost.publishedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{mockPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{mockPost.views} views</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {mockPost.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
            {mockPost.content}
          </div>
        </article>
      </div>

      {/* Related Posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{post.excerpt}</p>
              <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;