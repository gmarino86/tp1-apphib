import express from 'express'; 
import path from 'path';
import fs from 'fs';
import personaController from '../controllers/personaController.js';

const router = express.Router()

router.get('/new', function(req,res){
    res.sendFile('./templates/new.html', { root : path.resolve() })
})
router.get('/error', function(req,res){
    res.sendFile('./templates/error.html', { root : path.resolve() })
})

router.post('/new',function(req, res){
    fs.readFile("./data/persons.json", function(err, data){
        const personas = err ? [] : JSON.parse(data.toString())
        
        if(req.body.name){
            let persona = {
                name:req.body.name,
                type: req.body.type
            }
            
            personas.push(persona);
            
            fs.writeFile('./data/persons.json', JSON.stringify(personas), function(err){
                console.log("Esta parte del error: ", err)
            })
            
            res.redirect('/persons')
        }else{
            fs.writeFile('./data/persons.json', JSON.stringify(personas), function(err){
                console.log(err)
            })
            res.redirect('/error')
        }
    })
    
})

router.get('/persons', personaController.verPersonas)
router.get('/prueba', personaController.verPrueba)

export default router