import client from './sanityClient.js'
import fetch from 'node-fetch'

// const blog = {
//   id: 524,
//   title: "Marie Theobald joins Castille’s Board",
//   title_seo: null,
//   content: "<p>&nbsp;</p><p><strong>Marie Theobald joins Castille’s Board...</p>",
//   reading_time: "3",
//   type: "blog",
//   published_by: "Brand Team",
//   published_date: "2024-12-17T00:00:00",
//   status: "Active",
//   image_url:
//     "https://castillians.fra1.digitaloceanspaces.com/portal-live-public/live/blogs/castille-facade.jpg-1734449304721-castille-facade.jpg",
//   meta_description:
//     "Marie Theobald joins Castille’s board, bringing her extensive expertise...",
//   category: "",
//   numberLike: 0,
//   likedByCandidate: false,
//   numberJobs: "0",
//   summary: "",
//   other_tags: "Castille Board Appointment, HR and Gaming Industry Leader, Malta Business Growth",
//   tags: [],
//   ls_other_tags: [
//     { tag: "Castille Board Appointment" },
//     { tag: " HR and Gaming Industry Leader" },
//     { tag: " Malta Business Growth" },
//   ],
//   cover_image_url: null,
// };

const blogs = [
  {
    id: 524,
    title: 'Marie Theobald joins Castille’s Board',
    title_seo: null,
    content: '<p>&nbsp;</p><p><strong>Marie Theobald joins Castille’s Board...</p>',
    meta_description: 'Marie Theobald joins Castille’s board, bringing her extensive expertise...',
    reading_time: '3',
    type: 'blog',
    published_by: 'Brand Team',
    author: 'Marie Theobald',
    category: 'Business',
    published_date: '2024-12-17T00:00:00',
    status: 'Active',
    ls_other_tags: [
      { tag: "Castille Board Appointment" },
      { tag: " HR and Gaming Industry Leader" },
      { tag: " Malta Business Growth" },
    ],
    image_url:
      'https://castillians.fra1.digitaloceanspaces.com/portal-live-public/live/blogs/castille-facade.jpg-1734449304721-castille-facade.jpg',
    summary: '',
    other_tags: 'Castille Board Appointment, HR and Gaming Industry Leader, Malta Business Growth',
  },
  {
    id: 520,
    title: 'How to Advance in Tech and Finance in Albania',
    title_seo: null,
    reading_time: '3',
    type: 'blog',
    published_by: 'Brand Team',
    author: 'John Doe',
    category: 'Tech',
    published_date: '2024-01-10T00:00:00',
    status: 'Active',
    image_url:
      'https://castillians.fra1.digitaloceanspaces.com/portal-live-public/live/blogs/Albania.png-1704813712194-Albania.png',
    summary: '',
    other_tags: 'Albania, Tech Jobs, Finance Jobs, Remote Work',
  },
]

// Function to upload an image to Sanity
// async function uploadImage(imageUrl) {
//   if (!imageUrl) {
//     console.log('No image URL provided.');
//     return null;
//   }

//   try {
//     const response = await client.assets.upload(
//       'image',
//       fetch(imageUrl).then((res) => res.body),
//       {
//         filename: imageUrl.split('/').pop(),
//       }
//     );
//     console.log('Image uploaded successfully:', response);
//     return {
//       _type: 'image',
//       asset: {
//         _type: 'reference',
//         _ref: response._id,
//       },
//     };
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     return null;
//   }
// }
async function uploadImage(imageUrl) {
  if (!imageUrl) {
    console.log('No image URL provided.')
    return null
  }

  try {
    // Fetch the image from the URL
    const response = await fetch(imageUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`)
    }

    // Upload the image to Sanity
    const uploadedAsset = await client.assets.upload('image', response.body, {
      filename: imageUrl.split('/').pop(),
    })

    console.log('Image uploaded successfully:', uploadedAsset)

    // Return the reference to the uploaded image
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: uploadedAsset._id,
      },
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

async function importBlog() {
  try {
    for (const blog of blogs) {
      // const lsOtherTags = blog.ls_other_tags
      //   ? blog.ls_other_tags.map((tagObj) => tagObj.tag.trim())
      //   : []
      // const tagsArray = blog?.tags.length
      //   ? blog?.tags
      //   : blog?.other_tags
      //     ? blog?.other_tags.split(',').map((tag) => tag.trim())
      //     : []
      const tagsArray = blog.other_tags ? blog.other_tags.split(',').map((tag) => tag.trim()) : []
      const uploadedImage = await uploadImage(blog.image_url)

      const mutation = {
        _type: 'blog',
        title: blog.title || 'Untitled Blog',
        titleSeo: blog.title_seo || blog.title,
        content: blog.content || 'Content not available.',
        readingTime: blog.reading_time || 'N/A',
        type: blog.type || 'blog',
        publishedBy: blog.published_by || 'Unknown',
        publishedDate: blog.published_date || new Date().toISOString(),
        status: blog.status || 'Draft',
        image: uploadedImage, // Reference the uploaded image
        metaDescription: blog.meta_description || '',
        category: blog.category || 'Uncategorized',
        numberLike: blog.numberLike || 0,
        likedByCandidate: blog.likedByCandidate || false,
        numberJobs: blog.numberJobs || '0',
        summary: blog.summary || '',
        tags: tagsArray,
        // lsOtherTags: lsOtherTags,
        coverImageUrl: blog.cover_image_url || null,
      }

      const response = await client.create(mutation)
      console.log('Blog created:', response)
    }
  } catch (error) {
    console.error('Error importing blog:', error)
  }
}

importBlog()
