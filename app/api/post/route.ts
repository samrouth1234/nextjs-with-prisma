// /app/api/post/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import fs from 'fs';
import path from 'path';

// export async function POST(request: Request) {
//   const { title, content } = await request.json();

//   try {
//     const newPost = await prisma.post_db.create({
//       data: {
//         title,
//         content,
//       },
//     });

//     return NextResponse.json(newPost);
//   } catch (error) {
//     console.error('Failed to create post:', error);
//     return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
//   }
// }

export async function POST(request: Request) {
  const formData = await request.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as File | null;

  let imageUrl = '';

  if (image) {
    // Define the uploads directory
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

    // Ensure the uploads directory exists
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Create a unique file name
    const imageName = `${Date.now()}-${image.name}`;
    const imagePath = path.join(uploadsDir, imageName);

    // Save the image to the uploads directory
    try {
      const buffer = Buffer.from(await image.arrayBuffer());
      fs.writeFileSync(imagePath, buffer);
      imageUrl = `/uploads/${imageName}`; // URL to access the image
    } catch (error) {
      console.error('Failed to save image:', error);
      return NextResponse.json({ error: 'Failed to save image' }, { status: 500 });
    }
  }
  try {
    const newPost = await prisma.post_db.create({
      data: {
        title,
        content,
        image: imageUrl,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.error('Failed to create post:', error);
    return NextResponse.json({ error: 'Failed to create post' },
      {
        status: 500
      });
  }
}
