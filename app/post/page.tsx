// /app/page.tsx
"use client";
import { useState } from "react";
import { Post } from "../types/type";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/api/post', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ title, content }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to create post');
  //     }

  //     const newPost = await response.json();
  //     setPosts([...posts, newPost]);
  //     setTitle('');
  //     setContent('');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const newPost = await response.json();
      setPosts([...posts, newPost]);
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container m-auto">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
          <div>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="block w-full p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
