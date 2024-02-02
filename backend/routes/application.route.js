const express = require('express');
const router = express.Router();
const Application = require('../models/application.model');

router.route('/applications').get(async (req, res)  => {
   const applications = await Application.find()
            res.json(applications);
       
   
});
 


router.route('/applications/:id').get(async (req, res) => {
   await Application.findById(req.params.id)
    .then(application => {
        res.json(application);    })
    .catch(err => {
        res.status(400).send('Failed to get application');
        console.log(err);
    });
  
});


router.route('/applications/add').post((req, res) => {
    const application = new Application(req.body);

    application.save()
        .then(application => {
            res.status(200).json({'application': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to add new application');
        });
});

router.route('/applications/update/:id').post(async(req, res) => {

    try {
        const updatedResult = await Application.findByIdAndUpdate(
          { _id: req.params.id },
          {
            jobTitle: req.body.jobTitle,
            company :req.body.company,
            applicationDate : req.body.applicationDate,
            status : req.body.status,
          },
        );
        console.log(updatedResult);
      } catch (error) {
        console.log(error);
      }
    
});


router.route('/applications/delete/:id').get(async (req, res) => {
    const _id =req.params.id
  await  Application.findByIdAndDelete({_id })
    .then((d)=>{
        res.json('Removed successfully');
    }).catch(err => {
        res.json(err);
    });
       
});

module.exports = router;
