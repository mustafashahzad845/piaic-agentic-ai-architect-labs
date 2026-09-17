import Image from "next/image";
import type { Post } from "@/app/data/posts";
import { CommentIcon, LikeIcon, MoreIcon, RepostIcon } from "@/components/icons";

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0a66c2]" aria-label="Verified profile">
      <path
        fill="currentColor"
        d="M12 2 9.5 3.5 6.75 3l-1.1 2.5-2.65.8.55 2.6L1.5 11l1.8 2-1.4 3 2.5 1.2 1 2.6 2.6-.3 1.4 2 2.5-1 2.5 1 1.4-2 2.6.3 1-2.6L21.9 16l-1.4-3L22 11l-2-2.1.55-2.6-2.65-.8L16.75 3l-2.75.5L12 2zm-1.2 13.6-3.4-3.4 1.4-1.4 2 2 4.8-4.8 1.4 1.4-6.2 6.2z"
      />
    </svg>
  );
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group mb-4 break-inside-avoid overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0a66c2]/30 hover:shadow-[0_12px_32px_rgba(10,102,194,0.14)]">
      <div className="flex items-center gap-3 px-4 pt-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-md ring-2 ring-white ${post.avatarColor}`}
        >
          {post.author.split(" ").map((w) => w[0]).join("")}
        </div>
        <div className="min-w-0">
          <h3 className="flex items-center gap-1 truncate text-[15px] font-bold text-slate-900">
            <span className="truncate">{post.author}</span>
            <VerifiedBadge />
          </h3>
          <p className="truncate text-xs text-slate-500">{post.headline}</p>
          <p className="text-xs text-slate-400">
            {post.time} ago
            <span className="mx-1.5">·</span>
            <svg viewBox="0 0 24 24" className="inline h-3.5 w-3.5 text-slate-400" fill="currentColor" aria-hidden>
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.24 7.5-4.98 5.4-2.5-2.4 1.06-1.06 1.4 1.35 3.92-4.25 1.1.96z" />
            </svg>
          </p>
        </div>
        <button
          type="button"
          aria-label="More options"
          className="ml-auto rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          <MoreIcon />
        </button>
      </div>

      <p className="px-4 py-3 text-[15px] leading-relaxed text-slate-700">{post.content}</p>

      <div className="relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.alt}
          width={post.imageWidth}
          height={post.imageHeight}
          className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div className="flex items-center justify-between px-4 py-2.5 text-xs text-slate-500">
        <span className="flex items-center">
          <span className="flex -space-x-1">
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#0a66c2] text-white shadow">
              <LikeIcon className="h-2.5 w-2.5" />
            </span>
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500 text-white shadow">
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor" aria-hidden>
                <path d="M21 6.5 9.5 18 3.5 12l1.4-1.4 4.6 4.6L19.6 5.1 21 6.5z" />
              </svg>
            </span>
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-500 text-white shadow">
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor" aria-hidden>
                <path d="M12 21s-6.7-4.35-9.33-8.11C.9 10.16 1.78 6.5 4.9 5.04 7.4 3.86 9.9 4.9 12 7.5c2.1-2.6 4.6-3.64 7.1-2.46 3.12 1.46 4 5.12 2.23 7.85C18.7 16.65 12 21 12 21z" />
              </svg>
            </span>
          </span>
          <span className="ml-1.5 font-medium">{post.likes.toLocaleString()}</span>
        </span>
        <span className="hover:text-[#0a66c2]">
          {post.comments.toLocaleString()} comments · {post.reposts.toLocaleString()} reposts
        </span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200/80">
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-slate-500 transition-colors hover:bg-[#0a66c2]/5 hover:text-[#0a66c2]"
        >
          <LikeIcon className="h-4.5 w-4.5" /> Like
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-slate-500 transition-colors hover:bg-emerald-500/5 hover:text-emerald-600"
        >
          <CommentIcon className="h-4.5 w-4.5" /> Comment
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-slate-500 transition-colors hover:bg-violet-500/5 hover:text-violet-600"
        >
          <RepostIcon className="h-4.5 w-4.5" /> Repost
        </button>
      </div>
    </article>
  );
}