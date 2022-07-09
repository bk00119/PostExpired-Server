import user_schema from '../models/newUser.js';

import fs from 'fs';

//POST
export const createUser = async(req, res) => {
    const user = new user_schema(req.body);
    
    try {
        if(req.body.email && req.body.email!=undefined && req.body.email !=''){ //checking if there's any error in req.body
            console.log(req.body.email,"created an account.");
            await user.save(); //saves user data on DB
        }
        res.status(201).json(user); //201: created
    } catch (error) {
        res.status(409).json({ message : error.message });
    }
}

//GET
export const getUserByGoogleId = async(req, res) => {
    //FIX: USE TRY&CATCH INSTEAD OF IF&ELSE
    const { googId : _googId } = req.params;
    console.log(_googId);
    // const user = await user_schema.findOne({ "googleId" : _googId } , (error, user_data) => {
    //     console.log(user_data);
    //     // if(error) return res.status(500).json({ message : "error" });
    //     if(user_data) {
    //         res.status(200).json(user_data);
    //     } else { //FIX: IF NOT FOUND RES.STATUS(409) WHY RES.STATUS(200)?
    //         console.log(`not found ${_googId} on DB`);
    //         res.status(200).json(user_data); 
    //     }
    // });
}