import PostCard from "@/components/PostCard";
import { posts } from "@/app/data/posts";

const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f4f2ee] pb-10 text-slate-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        aria-hidden
        style={{
          background:
            "radial-gradient(600px 200px at 20% 0%, rgba(10,102,194,0.12), transparent), radial-gradient(500px 200px at 80% 0%, rgba(14,165,233,0.10), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 pt-8">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a66c2] to-sky-500 text-2xl font-bold text-white shadow-lg shadow-[#0a66c2]/25">
              in
            </span>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                LinkedIn<span className="text-[#0a66c2]"> Gallery</span>
              </h1>
              <p className="text-sm text-slate-500">A masonry feed of professional posts</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {posts.length} posts
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0a66c2]" fill="currentColor" aria-hidden>
                <path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H3v10h4h1h9.43c1.06 0 1.98-.78 2.07-1.84l.5-8A2 2 0 0 0 18.77 11z" />
              </svg>
              {totalLikes.toLocaleString()} likes
            </div>
          </div>
        </header>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          Built with <span className="font-semibold text-[#0a66c2]">Next.js</span> — demo
          content only
        </footer>
      </div>
    </main>
  );
}