const {Router} = require('express');
const {userRegistration,getUserPicUrl,getUserAadharUrl,getUserPanUrl,getUserPic} = require('../Controllers/user_registration.controller.js')
const {upload} = require('../middleware/multer.middleware.js')

const router = Router();

router.post('/new_user',upload.fields([{name:"user_pic",maxCount :1},{name : "aadhar",maxCount : 1},{name: "pan",maxCount : 1}]),userRegistration);
router.get('/userpic',getUserPicUrl);
router.get('/useraadhar',getUserAadharUrl);
router.get('/userpan',getUserPanUrl);
router.get('/images/:name',getUserPic);


module.exports = {router};