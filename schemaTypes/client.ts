import {defineField, defineType} from 'sanity'

export const client = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url'
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Inactive', value: 'inactive'},
          {title: 'Suspended', value: 'suspended'}
        ]
      },
      initialValue: 'active'
    }),
    defineField({
      name: 'settings',
      title: 'Client Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'timezone',
          title: 'Timezone',
          type: 'string'
        }),
        defineField({
          name: 'theme',
          title: 'Theme',
          type: 'string',
          options: {
            list: [
              {title: 'Light', value: 'light'},
              {title: 'Dark', value: 'dark'}
            ]
          },
          initialValue: 'light'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'status',
      media: 'logo'
    }
  }
})