import user_schema from '../models/newUser.js';

import fs from 'fs';

//POST
export const createUser = async(req, res) => {
    const user = new user_schema(req.body);
    
    try {
        if(req.body.email && req.body.email!=undefined && req.body.email !=''){ //checking if there's any error in req.body
            await user.save(); //saves user data on DB
            console.log("created!");
        }
        res.status(201).json(user); //201: created
        console.log(res.status);
    } catch (error) {
        res.status(409).json({ message : error.message });
        console.log(res.status);
    }
}

//GET
export const getUserByGoogleId = async(req, res) => {
    //FIX: USE TRY&CATCH INSTEAD OF IF&ELSE
    const { googleId : _googId } = req.params;
    const user = await user_schema.findOne({ "googleId" : _googId } , (error, user_data) => {
        if(error) return res.status(500).json({ message : "error" });
        if(user) {
            res.status(200).json(user);
        } else { //FIX: IF NOT FOUND RES.STATUS(409) WHY RES.STATUS(200)?
            console.log(`not found ${_googId} on DB`);
            res.status(200).json(user); 
        }
    });
}