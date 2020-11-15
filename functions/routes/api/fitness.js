const express = require('express');
const router = express.Router();
const fitnessCategories = require('../../constants/fitnessCategories');
const fitnessContent = require('../../constants/fitnessContent');
const Stress = require('../../constants/Stress')

function getCategory(i)
{
  switch(i){
    case 'Stress': return Stress;
    case 'Anxiety and Panic Attacks': return '';
    case 'Sleep Disorders': return '';
  }
}
router.get('/categories', (req, res) => {
    return res.json(fitnessCategories);
  });
  
  router.get('/:category', (req, res) => {
    var category=getCategory(req.params.category)
    return res.json(category);
  });
  
  router.get('/:category/:subcategory/getContent', (req, res) => {
    var category=getCategory(req.params.category)
    return res.json(category[req.params.subcategory]['content']);
  });
  
  
  module.exports = router;