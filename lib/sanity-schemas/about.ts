export default {
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
    {
      name: "team",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "role",
              title: "Role",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "bio",
              title: "Bio",
              type: "text",
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "role",
              media: "image",
            },
          },
        },
      ],
    },
  ],
}
