import React, {
  useEffect,
  useState,
} from "react";

import {
  Plus,
  Search,
  Eye,
  Loader2,
  Pencil,
  FileText,
  Trash2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { API_URL } from "../../services/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All Categories");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [deleteId, setDeleteId] =
    useState(null);

  const [deleting, setDeleting] =
    useState(false);

  const navigate = useNavigate();

  // =====================================================
  // FETCH BLOGS FROM BACKEND
  // =====================================================

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_URL}/blogs`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to fetch blogs"
        );
      }

      setBlogs(data.blogs || []);
    } catch (error) {
      console.error(
        "Fetch Blogs Error:",
        error
      );

      setError(
        error.message ||
          "Unable to load blogs"
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOAD BLOGS
  // =====================================================

  useEffect(() => {
    fetchBlogs();
  }, []);


  // =====================================================
  // DELETE BLOG
  // =====================================================

  const handleDeleteBlog = async () => {
    if (!deleteId) return;

    try {
      setDeleting(true);

      const response = await fetch(
        `${API_URL}/blogs/${deleteId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.message || "Failed to delete blog"
        );
      }

      setBlogs((prev) =>
        prev.filter((b) => b._id !== deleteId)
      );

      setDeleteId(null);
    } catch (err) {
      console.error("Delete Blog Error:", err);
    } finally {
      setDeleting(false);
    }
  };

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // =====================================================
  // FILTER BLOGS
  // =====================================================

  const filteredBlogs = blogs.filter(
    (blog) => {
      const searchText =
        search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        blog.title
          ?.toLowerCase()
          .includes(searchText) ||
        blog.category
          ?.toLowerCase()
          .includes(searchText) ||
        blog.author
          ?.toLowerCase()
          .includes(searchText);

      const matchesCategory =
        category === "All Categories" ||
        blog.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  // =====================================================
  // GET UNIQUE CATEGORIES
  // =====================================================

  const categories = [
    "All Categories",
    ...new Set(
      blogs
        .map((blog) => blog.category)
        .filter(Boolean)
    ),
  ];

  return (
    <>
    <div className="min-h-screen bg-[#f3f6fa]">

      {/* =================================================
          PAGE CONTENT
      ================================================== */}

      <div className="w-full">

        <main className="p-5 md:p-7 lg:p-8">

          <div className="bg-white">

            {/* =================================================
                PAGE HEADER
            ================================================== */}

            <section className="border-b border-slate-200 px-6 py-7 md:px-8">

              <div className="flex flex-col gap-5">

                <div>

                  <div className="mb-3 flex items-center gap-3">

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#faf2df]">

                      <FileText
                        size={20}
                        strokeWidth={1.8}
                        className="text-[#c18d27]"
                      />

                    </span>

                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#b88b32]">
                      CONTENT MANAGEMENT
                    </span>

                  </div>

                  <h1 className="text-3xl font-extrabold tracking-tight text-[#14294b] md:text-4xl">
                    Blogs
                  </h1>

                  <p className="mt-1 text-sm text-slate-400 md:text-base">
                    Manage all blogs for your website.
                  </p>

                </div>

                {/* ADD BLOG */}

                <button
                  type="button"
                  onClick={() =>
                    navigate("/admin/add-blog")
                  }
                  className="
                    flex
                    w-full
                    min-h-[50px]
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-950
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-slate-800
                  "
                >

                  <Plus
                    size={19}
                    strokeWidth={2}
                  />

                  Add Blog

                </button>

              </div>

            </section>

            {/* =================================================
                SEARCH
            ================================================== */}

            <section className="bg-[#f8fafc] px-6 py-6 md:px-8">

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                <div className="flex flex-col gap-3 md:flex-row">

                  {/* Search */}

                  <div className="relative flex-1">

                    <Search
                      size={20}
                      strokeWidth={1.8}
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      type="text"
                      value={search}
                      onChange={(e) =>
                        setSearch(
                          e.target.value
                        )
                      }
                      placeholder="Search blogs..."
                      className="
                        h-[52px]
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        pl-12
                        pr-4
                        text-sm
                        text-slate-700
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#c18d27]
                      "
                    />

                  </div>

                  {/* Category */}

                  <select
                    value={category}
                    onChange={(e) =>
                      setCategory(
                        e.target.value
                      )
                    }
                    className="
                      h-[52px]
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      text-sm
                      text-slate-700
                      outline-none
                      md:w-[210px]
                    "
                  >

                    {categories.map(
                      (item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      )
                    )}

                  </select>

                </div>

              </div>

            </section>

            {/* =================================================
                ALL BLOGS
            ================================================== */}

            <section className="bg-[#f8fafc] px-6 pb-8 md:px-8">

              {/* Section Heading */}

              <div className="mb-4">

                <h2 className="text-lg font-extrabold text-[#14294b]">
                  All Blogs
                </h2>

                <p className="mt-1 text-sm text-slate-400">

                  {filteredBlogs.length}{" "}
                  {filteredBlogs.length === 1
                    ? "blog"
                    : "blogs"}{" "}
                  found

                </p>

              </div>

              {/* =================================================
                  ERROR
              ================================================== */}

              {error && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* =================================================
                  TABLE
              ================================================== */}

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {/* =================================================
                    LOADING
                ================================================== */}

                {loading ? (

                  <div className="flex min-h-[250px] items-center justify-center">

                    <div className="text-center">

                      <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#c18d27]" />

                      <p className="text-sm text-slate-400">
                        Loading blogs...
                      </p>

                    </div>

                  </div>

                ) : filteredBlogs.length === 0 ? (

                  /* =================================================
                      EMPTY
                  ================================================== */

                  <div className="flex min-h-[250px] items-center justify-center px-6">

                    <div className="text-center">

                      <FileText
                        size={40}
                        className="mx-auto mb-3 text-slate-300"
                      />

                      <h3 className="text-base font-bold text-[#14294b]">
                        No blogs found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">

                        {search ||
                        category !==
                          "All Categories"
                          ? "Try changing your search or category filter."
                          : "No blogs have been added yet."}

                      </p>

                    </div>

                  </div>

                ) : (

                  <>

                    {/* =================================================
                        DESKTOP TABLE
                    ================================================== */}

                    <div className="hidden overflow-x-auto md:block">

                      <table className="w-full min-w-[850px]">

                        <thead>

                          <tr className="border-b border-slate-200 bg-[#f8fafc]">

                            <th className="px-6 py-5 text-left text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                              Blog
                            </th>

                            <th className="px-5 py-5 text-left text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                              Category
                            </th>

                            <th className="px-5 py-5 text-left text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                              Date
                            </th>

                            <th className="px-5 py-5 text-left text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                              Status
                            </th>

                            <th className="px-6 py-5 text-right text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                              Actions
                            </th>

                          </tr>

                        </thead>

                        <tbody>

                          {filteredBlogs.map(
                            (blog) => (

                              <tr
                                key={
                                  blog._id
                                }
                                className="
                                  border-b
                                  border-slate-100
                                  last:border-0
                                  hover:bg-slate-50
                                "
                              >

                                {/* BLOG */}

                                <td className="px-6 py-5">

                                  <div className="flex items-center gap-4">

                                    {blog.featuredImage ? (

                                      <img
                                        src={
                                          blog.featuredImage
                                        }
                                        alt={
                                          blog.title
                                        }
                                        className="
                                          h-14
                                          w-20
                                          rounded-lg
                                          object-cover
                                          ring-1
                                          ring-slate-200
                                        "
                                      />

                                    ) : (

                                      <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-slate-100 ring-1 ring-slate-200">

                                        <FileText
                                          size={22}
                                          className="text-slate-300"
                                        />

                                      </div>

                                    )}

                                    <div className="max-w-[380px]">

                                      <h3 className="line-clamp-2 text-sm font-extrabold text-[#14294b]">
                                        {
                                          blog.title
                                        }
                                      </h3>

                                      <p className="mt-1 text-xs text-slate-400">
                                        Website Blog
                                      </p>

                                    </div>

                                  </div>

                                </td>

                                {/* CATEGORY */}

                                <td className="px-5 py-5">

                                  <span className="rounded-full bg-[#faf2df] px-3 py-1.5 text-xs font-semibold text-[#a8781f]">
                                    {
                                      blog.category
                                    }
                                  </span>

                                </td>

                                {/* DATE */}

                                <td className="px-5 py-5 text-sm text-slate-600">

                                  {formatDate(
                                    blog.createdAt
                                  )}

                                </td>

                                {/* STATUS */}

                                <td className="px-5 py-5">

                                  <span
                                    className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                                      blog.status ===
                                      "published"
                                        ? "bg-blue-50 text-blue-600"
                                        : "bg-slate-100 text-slate-500"
                                    }`}
                                  >
                                    {blog.status ===
                                    "published"
                                      ? "Published"
                                      : "Draft"}
                                  </span>

                                </td>

                                {/* ACTIONS */}

                                <td className="px-6 py-5">

                                  <div className="flex justify-end gap-4">

                                    {/* VIEW */}

                                    <button
                                      type="button"
                                      onClick={() =>
                                        navigate(
                                          `/blog/${blog._id}`
                                        )
                                      }
                                      className="
                                        text-slate-400
                                        transition
                                        hover:text-[#b88b32]
                                      "
                                      title="View Blog"
                                    >

                                      <Eye
                                        size={19}
                                        strokeWidth={
                                          1.8
                                        }
                                      />

                                    </button>

                                    {/* EDIT */}

                                    <button
                                      type="button"
                                      onClick={() =>
                                        navigate(
                                          `/admin/blogs/edit/${blog._id}`
                                        )
                                      }
                                      className="
                                        text-slate-400
                                        transition
                                        hover:text-[#b88b32]
                                      "
                                      title="Edit Blog"
                                    >

                                      <Pencil
                                        size={19}
                                        strokeWidth={
                                          1.8
                                        }
                                      />

                                    </button>


                                    {/* DELETE */}

                                    <button
                                      type="button"
                                      onClick={() =>
                                        setDeleteId(
                                          blog._id
                                        )
                                      }
                                      className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-[#f0d9d9]
                                        bg-white
                                        text-[#bd7373]
                                        transition
                                        hover:bg-[#fff5f5]
                                        hover:text-[#b33f3f]
                                      "
                                      title="Delete Blog"
                                    >
                                      <Trash2
                                        size={17}
                                        strokeWidth={1.8}
                                      />
                                    </button>

                                  </div>

                                </td>

                              </tr>

                            )
                          )}

                        </tbody>

                      </table>

                    </div>

                    {/* =================================================
                        MOBILE BLOG CARDS
                    ================================================== */}

                    <div className="divide-y divide-slate-100 md:hidden">

                      {filteredBlogs.map((blog) => (

                        <div key={blog._id} className="px-4 py-4">

                          <div className="flex gap-3">

                            {/* THUMBNAIL */}

                            <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
                              {blog.featuredImage ? (
                                <img
                                  src={blog.featuredImage}
                                  alt={blog.title}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <FileText size={22} className="text-slate-300" />
                              )}
                            </div>


                            {/* CONTENT */}

                            <div className="min-w-0 flex-1">

                              {/* Title + Status */}

                              <div className="flex items-start gap-2">

                                <h3 className="min-w-0 flex-1 text-[13px] font-extrabold leading-snug text-[#14294b]">
                                  {blog.title}
                                </h3>

                                <span
                                  className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-extrabold ${
                                    blog.status === "published"
                                      ? "bg-blue-50 text-blue-600"
                                      : "bg-slate-100 text-slate-500"
                                  }`}
                                >
                                  {blog.status === "published" ? "Published" : "Draft"}
                                </span>

                              </div>


                              {/* Category + Date */}

                              <div className="mt-1 flex items-center gap-2">
                                {blog.category && (
                                  <span className="rounded-full bg-[#faf2df] px-2 py-0.5 text-[10px] font-bold text-[#a8781f]">
                                    {blog.category}
                                  </span>
                                )}
                                <p className="text-[11px] text-slate-400">
                                  {formatDate(blog.createdAt)}
                                </p>
                              </div>


                              {/* Actions */}

                              <div className="mt-2.5 flex items-center justify-end gap-1">

                                <button
                                  type="button"
                                  onClick={() => navigate(`/blog/${blog._id}`)}
                                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-800"
                                  title="View Blog"
                                >
                                  <Eye size={15} />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}
                                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-[#fbf4e5] hover:text-[#b88b32]"
                                  title="Edit Blog"
                                >
                                  <Pencil size={15} />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setDeleteId(blog._id)}
                                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#f0d9d9] bg-white text-[#bd7373] transition hover:bg-[#fff5f5] hover:text-[#b33f3f]"
                                  title="Delete Blog"
                                >
                                  <Trash2 size={15} />
                                </button>

                              </div>

                            </div>

                          </div>

                        </div>

                      ))}

                    </div>

                  </>

                )}

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>


      {/* =====================================================
          DELETE MODAL
      ====================================================== */}

      {deleteId && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#07112b]/40
            px-4
            backdrop-blur-[2px]
          "
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setDeleteId(null);
            }
          }}
        >

          <div
            className="
              w-full
              max-w-md
              rounded-2xl
              border
              border-[#dce5ef]
              bg-white
              p-6
              shadow-2xl
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-red-50
                text-red-600
              "
            >
              <Trash2 size={21} />
            </div>

            <h3
              className="
                mt-5
                text-xl
                font-bold
                text-[#07112b]
              "
            >
              Delete Blog?
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-[#7083a0]
              "
            >
              This blog will be permanently removed.
              This action cannot be undone.
            </p>


            <div className="mt-6 flex justify-end gap-3">

              <button
                type="button"
                disabled={deleting}
                onClick={() =>
                  setDeleteId(null)
                }
                className="
                  h-11
                  rounded-xl
                  border
                  border-[#dce5ef]
                  bg-white
                  px-5
                  text-sm
                  font-semibold
                  text-[#526680]
                  transition
                  hover:bg-[#f7f9fb]
                  disabled:opacity-50
                "
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={deleting}
                onClick={handleDeleteBlog}
                className="
                  inline-flex
                  h-11
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#b33f3f]
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#993434]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >

                {deleting && (
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                )}

                Delete Blog

              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default Blogs;