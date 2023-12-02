import mongoose from "mongoose";
import { book } from "../models/bookModel.js";
import express from "express"
const router = express.Router()
//add book to the database
router.post("/", async (req , res)=>{
    try {
        if(
            !req.body.title || !req.body.author || !req.body.Year 
        ){
            res.status(400).send(
                {message : "you should pass all the required filed : title , auth , year ...."}
            )
        }else {
            const newBook = {
                title : req.body.title , 
                author : req.body.author ,
                Year : req.body.Year 
            }
            const books = await book.create(newBook);
            res.status(201).send(books)
        }

    }catch(err){
        console.error(err.message)
        res.status(500).send({message : err.message})
    }
})
//get a book from the database
router.get("/", async (req ,res )=>{
    try {
        let renderBooks = await book.find()
        return res.status(200).send(renderBooks)
    }catch(err) {
        console.error(err.message)
        res.status(201).send({message : err.message})
    }
})
router.get("/:id", async (req ,res )=>{
    try {
        const {id} = req.params;
        let renderBook = await book.findById(id)
        return res.status(200).json({ renderBook })
    }catch(err) {
        console.error(err.message)
        res.status(201).send({message : err.message})
    }
})
//update a book 
router.put("/:id" , async (req , res)=>{
    try {
        if(
            !req.body.title || !req.body.author || !req.body.Year 
        ){
            res.status(400).send(
                {message : "you should pass all the required filed : title , auth , year ...."}
            )
        }else {
            const {id} = req.params
            const result =await book.findByIdAndUpdate(id,{title : req.body.title , author : req.body.author  , Year : req.body.Year})
            if (!result) {
                res.status(404).json({message : "book not found"})
            }else {
                res.status(200).json({message : "book updated sucsesfuly"})
            }

        }
    }catch(err) {
        console.error(err.message)
        res.status(500).send({message : err.message})
    }
})
//Delete a book 
router.delete("/:id", async (req , res)=>{
    try {
        const {id} = req.params
        const result = await book.findByIdAndDelete(id)
        if (!result) {
            return res.status(201).send({message  : "the book doesn't exist"})
        }else {
            return res.status(200).send({message : "the supression complete"})
        }
    }catch(err) {
        console.error(err.message)
        res.status(500).send({message : err.message})
    }
})
export default router ;