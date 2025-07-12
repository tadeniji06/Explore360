import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import {
	getBlogPost,
	getRelatedPosts,
	urlFor,
} from "../utils/sanity";
import {
	CalendarDaysIcon,
	ClockIcon,
	UserIcon,
	TagIcon,
	ArrowLeftIcon,
	ShareIcon,
	BookmarkIcon,
	EyeIcon,
} from "@heroicons/react/24/outline";
import {
	BookmarkIcon as BookmarkSolidIcon,
	HeartIcon as HeartSolidIcon,
} from "@heroicons/react/24/solid";

const ViewBlog = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const [relatedPosts, setRelatedPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [readingProgress, setReadingProgress] = useState(0);

	useEffect(() => {
		if (slug) {
			loadBlogPost();
		}
	}, [slug]);

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = (window.pageYOffset / totalHeight) * 100;
			setReadingProgress(Math.min(progress, 100));
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const loadBlogPost = async () => {
		try {
			setLoading(true);
			setError(null);

			const postData = await getBlogPost(slug);

			if (!postData) {
				setError("Post not found");
				return;
			}

			setPost(postData);

			// Load related posts
			if (postData.categories) {
				const related = await getRelatedPosts(
					postData.categories,
					postData._id
				);
				setRelatedPosts(related);
			}
		} catch (err) {
			console.error("Error loading blog post:", err);
			setError("Failed to load blog post");
		} finally {
			setLoading(false);
		}
	};

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: post.title,
					url: window.location.href,
				});
			} catch (err) {
				console.log("Error sharing:", err);
			}
		} else {
			// Fallback: copy to clipboard
			navigator.clipboard.writeText(window.location.href);
			alert("Link copied to clipboard!");
		}
	};

	const toggleBookmark = () => {
		setIsBookmarked(!isBookmarked);
		// Here you would typically save to localStorage or backend
	};

	const toggleLike = () => {
		setIsLiked(!isLiked);
		// Here you would typically save to backend
	};

	// Custom components for PortableText
	const portableTextComponents = {
		types: {
			image: ({ value }) => (
				<div className='my-8'>
					<img
						src={urlFor(value).width(800).url()}
						alt={value.alt || "Blog image"}
						className='w-full rounded-lg shadow-lg'
					/>
					{value.caption && (
						<p className='text-center text-sm text-gray-600 mt-2 italic'>
							{value.caption}{" "}
						</p>
					)}
				</div>
			),
		},
		block: {
			h1: ({ children }) => (
				<h1 className='text-3xl font-bold text-gray-900 mt-8 mb-4'>
					{children}
				</h1>
			),
			h2: ({ children }) => (
				<h2 className='text-2xl font-bold text-gray-900 mt-6 mb-3'>
					{children}
				</h2>
			),
			h3: ({ children }) => (
				<h3 className='text-xl font-semibold text-gray-900 mt-5 mb-2'>
					{children}
				</h3>
			),
			normal: ({ children }) => (
				<p className='text-gray-700 leading-relaxed mb-4'>
					{children}
				</p>
			),
			blockquote: ({ children }) => (
				<blockquote className='border-l-4 border-primary-brown pl-6 py-2 my-6 bg-gray-50 italic text-gray-800'>
					{children}
				</blockquote>
			),
		},
		marks: {
			link: ({ children, value }) => (
				<a
					href={value.href}
					target='_blank'
					rel='noopener noreferrer'
					className='text-primary-brown hover:text-light-brown underline transition-colors duration-200'
				>
					{children}
				</a>
			),
			strong: ({ children }) => (
				<strong className='font-semibold text-gray-900'>
					{children}
				</strong>
			),
		},
		list: {
			bullet: ({ children }) => (
				<ul className='list-disc list-inside space-y-2 mb-4 text-gray-700'>
					{children}
				</ul>
			),
			number: ({ children }) => (
				<ol className='list-decimal list-inside space-y-2 mb-4 text-gray-700'>
					{children}
				</ol>
			),
		},
	};

	if (loading) {
		return (
			<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-16 w-16 border-b-2 border-primary-brown mx-auto mb-4'></div>
					<p className='text-gray-600'>Loading article...</p>
				</div>
			</div>
		);
	}

	if (error || !post) {
		return (
			<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						{error === "Post not found" ? "404" : "Error"}
					</h1>
					<p className='text-gray-600 mb-8'>
						{error === "Post not found"
							? "The blog post you are looking for does not exist."
							: "Something went wrong while loading the blog post."}
					</p>
					<button
						onClick={() => navigate("/blog")}
						className='bg-primary-brown hover:bg-light-brown text-white px-6 py-3 rounded-lg transition-colors duration-200'
					>
						Back to Blog
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Reading Progress Bar */}
			<div className='fixed top-0 left-0 w-full h-1 bg-gray-200 z-50'>
				<div
					className='h-full bg-primary-brown transition-all duration-150 ease-out'
					style={{ width: `${readingProgress}%` }}
				/>
			</div>

			{/* Back Button */}
			<div className='sticky top-4 z-40 px-4 sm:px-6 lg:px-8 pt-4'>
				<button
					onClick={() => navigate("/blog")}
					className='inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl'
				>
					<ArrowLeftIcon className='w-4 h-4 mr-2' />
					Back to Blog
				</button>
			</div>

			<article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				{/* Hero Image */}
				{post.mainImage && (
					<div className='relative mb-8 rounded-2xl overflow-hidden shadow-2xl animate-fade-in'>
						<img
							src={urlFor(post.mainImage)
								.width(1200)
								.height(600)
								.url()}
							alt={post.title}
							className='w-full h-96 object-cover'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
					</div>
				)}

				{/* Article Header */}
				<header className='mb-8 animate-slide-up'>
					{/* Categories */}
					{post.categories && post.categories.length > 0 && (
						<div className='flex flex-wrap gap-2 mb-4'>
							{post.categories.map((category, index) => (
								<span
									key={index}
									className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-brown text-white'
								>
									<TagIcon className='w-3 h-3 mr-1' />
									{category.title}
								</span>
							))}
						</div>
					)}

					{/* Title */}
					<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
						{post.title}
					</h1>

					{/* Meta Information */}
					<div className='flex flex-wrap items-center gap-6 text-gray-600 mb-6'>
						<div className='flex items-center'>
							<CalendarDaysIcon className='w-5 h-5 mr-2' />
							{formatDate(post.publishedAt)}
						</div>
						<div className='flex items-center'>
							<ClockIcon className='w-5 h-5 mr-2' />
							{post.estimatedReadingTime} min read
						</div>
						{/* <div className='flex items-center'>
							<EyeIcon className='w-5 h-5 mr-2' />
							{Math.floor(Math.random() * 1000) + 100} views
						</div> */}
					</div>

					{/* Author */}
					{post.author && (
						<div className='flex items-center justify-between bg-white rounded-xl p-6 shadow-lg mb-8'>
							<div className='flex items-center'>
								{post.author.image ? (
									<img
										src={urlFor(post.author.image)
											.width(60)
											.height(60)
											.url()}
										alt={post.author.name}
										className='w-12 h-12 rounded-full mr-4'
									/>
								) : (
									<div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4'>
										<UserIcon className='w-6 h-6 text-gray-500' />
									</div>
								)}
								<div>
									<h3 className='font-semibold text-gray-900'>
										{post.author.name}
									</h3>
									{post.author.bio && (
										<p className='text-gray-600 text-sm line-clamp-2'>
											<PortableText value={post.author.bio} />
										</p>
									)}
								</div>
							</div>

							{/* Action Buttons */}
							<div className='flex items-center space-x-3'>
								<button
									onClick={toggleLike}
									className={`p-2 rounded-full transition-colors duration-200 ${
										isLiked
											? "text-red-500 bg-red-50 hover:bg-red-100"
											: "text-gray-500 hover:text-red-500 hover:bg-red-50"
									}`}
								>
									<HeartSolidIcon className='w-5 h-5' />
								</button>
								<button
									onClick={toggleBookmark}
									className={`p-2 rounded-full transition-colors duration-200 ${
										isBookmarked
											? "text-primary-brown bg-orange-50 hover:bg-orange-100"
											: "text-gray-500 hover:text-primary-brown hover:bg-orange-50"
									}`}
								>
									{isBookmarked ? (
										<BookmarkSolidIcon className='w-5 h-5' />
									) : (
										<BookmarkIcon className='w-5 h-5' />
									)}
								</button>
								<button
									onClick={handleShare}
									className='p-2 rounded-full text-gray-500 hover:text-primary-brown hover:bg-orange-50 transition-colors duration-200'
								>
									<ShareIcon className='w-5 h-5' />
								</button>
							</div>
						</div>
					)}
				</header>

				{/* Article Content */}
				<div className='prose prose-lg max-w-none animate-fade-in'>
					<div className='bg-white rounded-xl p-8 shadow-lg'>
						<PortableText
							value={post.body}
							components={portableTextComponents}
						/>
					</div>
				</div>

				{/* Related Posts */}
				{relatedPosts.length > 0 && (
					<section className='mt-16'>
						<h2 className='text-3xl font-bold text-gray-900 mb-8'>
							Related Articles
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{relatedPosts.map((relatedPost, index) => (
								<Link
									key={relatedPost._id}
									to={`/blog/${relatedPost.slug.current}`}
									className='group animate-fade-in'
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<article className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'>
										{relatedPost.mainImage && (
											<img
												src={urlFor(relatedPost.mainImage)
													.width(400)
													.height(200)
													.url()}
												alt={relatedPost.title}
												className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
											/>
										)}
										<div className='p-6'>
											<div className='flex items-center text-sm text-gray-500 mb-2'>
												<CalendarDaysIcon className='w-4 h-4 mr-1' />
												{formatDate(relatedPost.publishedAt)}
												<span className='mx-2'>•</span>
												<ClockIcon className='w-4 h-4 mr-1' />
												{relatedPost.estimatedReadingTime} min
											</div>
											<h3 className='font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-brown transition-colors duration-200'>
												{relatedPost.title}
											</h3>
											{relatedPost.author && (
												<p className='text-sm text-gray-600 mt-2'>
													By {relatedPost.author.name}
												</p>
											)}
										</div>
									</article>
								</Link>
							))}
						</div>
					</section>
				)}
			</article>
		</div>
	);
};

export default ViewBlog;
