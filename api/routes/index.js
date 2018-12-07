import express from 'express'

import authRoutes from './auth'
import experienceRoutes from './experiences'
import fileRoutes from './files'
import locationRoutes from './locations'
import networkRoutes from './networks'
import profilRoutes from './profils'
import skillRoutes from './skills'
import userRoutes from './users'

import { sequelize } from './../models'

const router = express.Router()

router.get('/api/status', (req, res) => res.json({ status: 'ok' }))

router.use('/api/auth', authRoutes)

router.use('/api', [
    experienceRoutes,
    fileRoutes,
    locationRoutes,
    networkRoutes,
    profilRoutes,
    skillRoutes,
    userRoutes
])

sequelize.sync()

module.exports = router

