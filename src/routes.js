var express = require('express')
var router = express.Router()

// Import routes
const ExperienceController = require('./controllers/experienceController')
const FileController = require('./controllers/fileController')
const LocationController = require('./controllers/locationController')
const NetworkController = require('./controllers/networkController')
const ProfilController = require('./controllers/profilController')
const SkillController = require('./controllers/skillController')
const TechnologyController = require('./controllers/technologyController')
const UserController = require('./controllers/userController')

const path = '/api'

// Global router
router.get(`${path}`, function (req, res) {
  res.render('index', {
    title: 'Sequelize: Express Example'
  })
})

// Experience router
router.route(`${path}/experiences`)
  .get(ExperienceController.getExperiences)
  .post(ExperienceController.createExperience)

router.route(`${path}/experience/:id`)
  .get(ExperienceController.getExperience)
  .put(ExperienceController.updateExperience)
  .delete(ExperienceController.deleteExperience)

// File router
router.route(`${path}/files`)
  .get(FileController.getFiles)
  .post(FileController.createFile)

router.route(`${path}/file/:id`)
  .get(FileController.getFile)
  .put(FileController.updateFile)
  .delete(FileController.deleteFile)

// Location router
router.route(`${path}/locations`)
  .get(LocationController.getLocations)
  .post(LocationController.createLocation)

router.route(`${path}/location/:id`)
  .get(LocationController.getLocation)
  .put(LocationController.updateLocation)
  .delete(LocationController.deleteLocation)

// Network router
router.route(`${path}/networks`)
  .get(NetworkController.getNetworks)
  .post(NetworkController.createNetwork)

router.route(`${path}/network/:id`)
  .get(NetworkController.getNetwork)
  .put(NetworkController.updateNetwork)
  .delete(NetworkController.deleteNetwork)

// Profil router
router.route(`${path}/profils`)
  .get(ProfilController.getProfils)
  .post(ProfilController.createProfil)

router.route(`${path}/profil/:id`)
  .get(ProfilController.getProfil)
  .put(ProfilController.updateProfil)
  .delete(ProfilController.deleteProfil)

// Skill router
router.route(`${path}/skills`)
  .get(SkillController.getSkills)
  .post(SkillController.createSkill)

router.route(`${path}/skill/:id`)
  .get(SkillController.getSkill)
  .put(SkillController.updateSkill)
  .delete(SkillController.deleteSkill)

// Technology router
router.route(`${path}/technologies`)
  .get(TechnologyController.getTechnologies)
  .post(TechnologyController.createTechnology)

router.route(`${path}/technology/:id`)
  .get(TechnologyController.getTechnology)
  .put(TechnologyController.updateTechnology)
  .delete(TechnologyController.deleteTechnology)

// User router
router.route(`${path}/users`)
  .get(UserController.getUsers)
  .post(UserController.createUser)

router.route(`${path}/user/:id`)
  .get(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser)

module.exports = router
