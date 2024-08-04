import Room from './views/Room.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Room, meta: { title: 'Room' }},
  { path: '/about', component: About, meta: { title: 'About' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
