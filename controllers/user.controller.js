const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const getAllUsers = async (req, res) =>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(err.message)
    }
};

const getOneUsers = async (req, res) =>{
    try {
        const user = await User.findOne({id:req.params.id})
          res.status(200).json(user);
    } catch (error) {
        res.status(500).send(err.message)
    }
};

const createUsers = async (req, res) =>{
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save();
        res.status(201).json(newUser);
    } catch(err){
        res.status(500).send(err.message)
    }
};

const updateUsers = async (req, res) =>{
    try {
        const user = await User.findOne({id:req.params.id})
        user.name = req.body.name;
        //by default body te data string akare thake
        //tai number a convert kore nite hoy.
        user.age = Number(req.body.age);
        await user.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).send(err.message)
    }
};

const deleteUsers = async (req, res) =>{
    try {
        await User.deleteOne({id:req.params.id})
          res.status(200).json({message: "user is deleted"});
    } catch (error) {
        res.status(500).send(err.message)
    }
};

module.exports = { getAllUsers, deleteUsers, updateUsers, getOneUsers, createUsers};