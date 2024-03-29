import Companies from './routes/companies/Index.vue'

import Positions from './routes/positions/Index.vue'

import CompanyComments from './routes/company-comments/Index.vue'
import PersonComments from './routes/person-comments/Index.vue'

import PositionTasks from './routes/position-tasks/Index.vue'

import CompanyFiles from './routes/company-files/Index.vue'

import CompanyTypes from './routes/company-types/Index.vue'

import CompanyCommentTypes from './routes/company-comment-types/Index.vue'
import PersonCommentTypes from './routes/person-comment-types/Index.vue'
import Points from './routes/points/Index.vue'

import Tasks from './routes/tasks/Index.vue'

let crmRoutes = [
  {
    path: 'leads',
    name: 'leads',
    component: Companies,
  },
  {
    path: 'points',
    name: 'points',
    component: Points,
  },
  {
    path: 'positions',
    name: 'positions',
    component: Positions,
  },
  {
    path: 'package',
    name: 'package',
    component: CompanyComments,
  },
  {
    path: 'person-comments',
    name: 'personComments',
    component: PersonComments,
  },
  {
    path: 'position-tasks',
    name: 'positionTasks',
    component: PositionTasks,
  },
  {
    path: 'company-files',
    name: 'companyFiles',
    component: CompanyFiles,
  },
  {
    path: 'company-types',
    name: 'companyTypes',
    component: CompanyTypes,
  },
  {
    path: 'company-comment-types',
    name: 'companyCommentTypes',
    component: CompanyCommentTypes,
  },
  {
    path: 'person-comment-types',
    name: 'personCommentTypes',
    component: PersonCommentTypes,
  },
  {
    path: 'tasks',
    name: 'tasks',
    component: Tasks,
  },
]

export default crmRoutes
