export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
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
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "twitter",
      title: "Twitter URL",
      type: "url",
    },
    {
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    },
    {
      name: "website",
      title: "Website URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
}
