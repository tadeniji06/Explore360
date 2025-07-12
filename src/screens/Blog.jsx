import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts, searchPosts, urlFor } from "../utils/sanity";
import { PortableText } from "@portabletext/react";
import {
	MagnifyingGlassIcon,
	CalendarDaysIcon,
	ClockIcon,
	UserIcon,
	TagIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [searching, setSearching] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const postsPerPage = 6;

	useEffect(() => {
		loadPosts();
	}, [currentPage]);

	const loadPosts = async () => {
		try {
			setLoading(true);
			const offset = (currentPage - 1) * postsPerPage;
			const newPosts = await getBlogPosts(postsPerPage, offset);

			if (currentPage === 1) {
				setPosts(newPosts);
			} else {
				setPosts((prev) => [...prev, ...newPosts]);
			}

			setHasMore(newPosts.length === postsPerPage);
		} catch (error) {
			console.error("Error loading posts:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!searchTerm.trim()) {
			setCurrentPage(1);
			loadPosts();
			return;
		}

		try {
			setSearching(true);
			const searchResults = await searchPosts(searchTerm);
			setPosts(searchResults);
			setHasMore(false);
		} catch (error) {
			console.error("Error searching posts:", error);
		} finally {
			setSearching(false);
		}
	};

	const loadMore = () => {
		setCurrentPage((prev) => prev + 1);
	};

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const BlogCard = ({ post }) => (
		<article className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-fade-in'>
			<div className='relative overflow-hidden'>
				{post.mainImage && (
					<img
						src={urlFor(post.mainImage).width(600).height(300).url()}
						alt={post.title}
						className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
					/>
				)}
				<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

				{post.categories && post.categories.length > 0 && (
					<div className='absolute top-4 left-4'>
						<span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-brown text-white'>
							<TagIcon className='w-3 h-3 mr-1' />
							{post.categories[0].title}
						</span>
					</div>
				)}
			</div>

			<div className='p-6'>
				<div className='flex items-center text-sm text-gray-500 mb-3 space-x-4'>
					<div className='flex items-center'>
						<CalendarDaysIcon className='w-4 h-4 mr-1' />
						{formatDate(post.publishedAt)}
					</div>
					<div className='flex items-center'>
						<ClockIcon className='w-4 h-4 mr-1' />
						{post.estimatedReadingTime} min read
					</div>
				</div>

				<h2 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-brown transition-colors duration-200'>
					{post.title}
				</h2>

				{post.body && (
					<div className='text-gray-600 mb-4 line-clamp-3 prose prose-sm'>
						<PortableText value={post.body} />
					</div>
				)}

				{post.author && (
					<div className='flex items-center mb-4'>
						{post.author.image ? (
							<img
								src={urlFor(post.author.image)
									.width(40)
									.height(40)
									.url()}
								alt={post.author.name}
								className='w-8 h-8 rounded-full mr-2'
							/>
						) : (
							<div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2'>
								<UserIcon className='w-4 h-4 text-gray-500' />
							</div>
						)}
						<span className='text-sm text-gray-600'>
							By {post.author.name}
						</span>
					</div>
				)}

				<Link
					to={`/blog/${post.slug.current}`}
					className='inline-flex items-center text-primary-brown hover:text-light-brown font-medium transition-colors duration-200 group'
				>
					Read More
					<ArrowRightIcon className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200' />
				</Link>
			</div>
		</article>
	);

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='bg-gradient-to-r from-primary-brown to-light-brown text-white py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center animate-slide-up'>
						<h1 className='text-4xl md:text-6xl font-bold mb-6'>
							Explore360 Blog
						</h1>
						<p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90'>
							Discover amazing travel stories, tips, and destinations
							from around the world
						</p>

						{/* Search Bar */}
						<form
							onSubmit={handleSearch}
							className='max-w-2xl mx-auto'
						>
							<div className='relative'>
								<input
									type='text'
									placeholder='Search articles...'
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className='w-full px-6 py-4 pl-12 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200'
								/>
								<MagnifyingGlassIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400' />
								<button
									type='submit'
									disabled={searching}
									className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-brown hover:bg-primary-brown/90 text-white px-6 py-2 rounded-full transition-colors duration-200 disabled:opacity-50'
								>
									{searching ? "Searching..." : "Search"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* Blog Posts */}
			<section className='py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					{loading && posts.length === 0 ? (
						<div className='flex justify-center items-center py-20'>
							<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary-brown'></div>
						</div>
					) : posts.length === 0 ? (
						<div className='text-center py-20'>
							<h3 className='text-2xl font-semibold text-gray-900 mb-4'>
								No posts found
							</h3>
							<p className='text-gray-600'>
								Try adjusting your search terms or check back later
								for new content.
							</p>
						</div>
					) : (
						<>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
								{posts.map((post, index) => (
									<div
										key={post._id}
										style={{ animationDelay: `${index * 0.1}s` }}
									>
										<BlogCard post={post} />
									</div>
								))}
							</div>

							{/* Load More Button */}
							{hasMore && !searchTerm && (
								<div className='text-center mt-12'>
									<button
										onClick={loadMore}
										disabled={loading}
										className='bg-primary-brown hover:bg-light-brown text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
									>
										{loading ? "Loading..." : "Load More Posts"}
									</button>
								</div>
							)}
						</>
					)}
				</div>
			</section>
		</div>
	);
};

export default Blog;
