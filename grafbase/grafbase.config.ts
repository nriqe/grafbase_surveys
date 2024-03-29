import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 3 }),
  lastName: g.string().length({ min: 3 }),
  secondLastName: g.string().length({ min: 3 }),  
  email: g.email().unique(),
  userName: g.string().length({ min: 3 }).unique(),
  password: g.string().length({ min: 6 }),
  role: g.enumRef(g.enum('Role', ['admin', 'user'])),
  status: g.enumRef(g.enum('Status', ['active', 'inactive', 'gone'])),
  lastLoginAt: g.datetime(),
  surveys: g.relation(() => Survey).list().optional()
});

const Nominated = g.model('Nominated', {
  name: g.string().length({ min: 3 }),
  image: g.url().optional(),
  youtubeId: g.string().optional(),
  createdBy: g.relation(() => User),
});

const Subcategory = g.model('Subcategory', {
  name: g.string().length({ min: 3 }),
  image: g.url(),
  youtubeId: g.string().optional(),
  createdBy: g.relation(() => User),
  nominateds: g.relation(() => Nominated).list().optional(),
});

const Category = g.model('Category', {
  title: g.string().length({ min: 3 }),
  slug: g.string(),
  description: g.string(),
  image: g.url(),
  ogImage: g.url().optional(),
  createdBy: g.relation(() => User),
  subcategories: g.relation(() => Subcategory).list().optional(),
});

const Survey = g.model('Survey', {
  title: g.string().length({ min: 3 }),
  slug: g.string(),
  description: g.string(),
  image: g.url(),
  ogImage: g.url().optional(),
  createdAt: g.datetime(),
  updatedAt: g.datetime(),
  startsAt: g.datetime(),
  endsAt: g.datetime(),
  createdBy: g.relation(() => User),
  categories: g.relation(() => Category).list().optional(),
});

export default config({
  schema: g
})
