const {conn} = require('../DBConnection.js');
const path = require('path');
const ShortUniqueId = require('short-unique-id')

const User = {
   userRegistration : async(req,res) => {
      try
      {
         const row = req.body;
         const {user_pic,aadhar,pan} = req.files;
         const uid = new ShortUniqueId({ length: 10 });
         const value = [uid.randomUUID(),row.name,user_pic[0].filename,aadhar[0].filename,pan[0].filename,row.email,row.phone_no,row.username,row.password,row.bank_name,row.bank_acc_no,row.bank_ifsc,row.bank_acc_holder_name,row.reference];
      
         const [rows,field] = await conn.query("INSERT INTO User_Registeration (user_id,name,user_pic,aadhar_image,pan_image,email,phone_no,username,password,bank_name,bank_acc_no,bank_ifsc,bank_acc_holder_name,reference) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",value);
      
         res.status(200).json({"rows" : rows , "field" : field , "filePath" : [user_pic[0].filename,aadhar[0].filename,pan[0].filename]});
   
      }
      catch(err)
      {
         res.status(500).json({
            "message" : "Something went wrong",
            "error" : err
         })
      }
   },

   getUserPicUrl : async(req,res) => {
      try
      {
         const {name,username} = req.body;
         const [rows,field] = await conn.query("SELECT user_pic FROM User_Registeration WHERE name LIKE ? OR username LIKE ?",['%'+name+'%','%'+username+'%']);
         res.status(200).json({
            "user_pic" : rows
         })
      }
      catch(err)
      {
         res.status(500).json({
            "message" : "Something went wrong",
            "error" : err
         })
      }
   },

   getUserAadharUrl : async(req,res,next) => {
      try
      {
         const {name,username} = req.body;
         const [rows,field] = await conn.query("SELECT aadhar_image FROM User_Registeration WHERE name LIKE ? OR username LIKE ?",['%'+name+'%','%'+username+'%']);
         res.status(200).json({
            "aadhar_image" : rows
         })
      }
      catch(err)
      {
         res.status(500).json({
            "message" : "Something went wrong",
            "error" : err
         })
      }
   },

   getUserPanUrl : async(req,res) => {
      try
      {
         const {name,username} = req.body;
         const [rows,field] = await conn.query("SELECT pan_image FROM User_Registeration WHERE name LIKE ? OR username LIKE ?",['%'+name+'%','%'+username+'%']);
         res.status(200).json({
            "pan_image" : rows
         })
      }
      catch(err)
      {
         res.status(500).json({
            "message" : "Something went wrong",
            "error" : err
         })
      }
   },
   
   getUserPic : async(req,res) => {
      try
      {
         const imageName = req.params.name;
         let location = "";

         if(imageName.indexOf("aadhar") !== -1)
         {
            location += "aadhar";
         }
         else if(imageName.indexOf("pan") !== -1)
         {
            location += "pan";
         }
         else
         {
            location +="userPic";
         }

         const options = {
            root: `./uploads/${location}`
         };
         res.status(200).sendFile(imageName,options, (err) => {
            if (err) {
                console.log(err);
                return res.status(404).send('Image not found');
            }
         });
      }
      catch(err)
      {
         return res.status(500).json({
            "message" : "Something went wrong",
            "error" : err
         })
      }
   }

}

module.exports = User;