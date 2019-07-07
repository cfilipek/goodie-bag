'use strict'
const Candy = require('../db/models/Candy')

const router = require('express').Router()

router.get('/candies', async (req,res,next)=> {
  try {
    const allCandies = await Candy.findAll();
    // res.status(200);

    res.status(200).json(allCandies);

 } catch (error) {
   next(error)
 }
})

router.get('/candies/:id', async (req,res,next)=> {
  try {
    const singleCandies = await Candy.findOne({
      where: {
        id: req.params.id
      }
    });
    // res.status(200);
    res.status(200).json(singleCandies);

 } catch (error) {
   next(error)
 }
})

// router.put('/candies/:id', async (req,res,next)=> {
//   try {
//     const singleCandies = await Candy.findOne({
//       where: {
//         id: req.params.id
//       }
//     });
//     const candy = singleCandies.update(req.body)
//     // res.status(200);
//     res.status(200).json(candy);

//  } catch (error) {
//    next(error)
//  }
// })




router.post('/candies', async (req,res,next)=> {
  try {
    const candy = req.body.candy;
    const newPost = await Candy.create(candy);
    res.status(201).json(newPost);

 } catch (error) {
   next(error)
 }
})

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
