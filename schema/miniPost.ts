import { defineField, defineType } from "sanity";

export default defineType({
  name: "miniPost",
  title: "Mini Post",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      options: {
        maxLength: 48,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
