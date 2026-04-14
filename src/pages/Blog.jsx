const blogs = [
  {
    id: 1,
    title: "How to Study Effectively",
    desc: "Learn the best techniques to improve your study habits.",
  },
  {
    id: 2,
    title: "Top 5 Programming Languages",
    desc: "Explore the most in-demand programming languages in 2026.",
  },
  {
    id: 3,
    title: "Online Learning Tips",
    desc: "Maximize your productivity while studying online.",
  },
];

function Blog() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-6">
        Blog & Articles
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-5 rounded-xl shadow">

            <h2 className="text-lg font-semibold mb-2">
              {blog.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              {blog.desc}
            </p>

            <button className="text-blue-500 hover:underline">
              Read More →
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Blog;