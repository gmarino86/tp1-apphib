import fs from "fs";

function verPersonas(req, res){
    fs.readFile("data/persons.json", function(err, data){
        const personas = err ? [] : JSON.parse(data.toString())

        fs.writeFile('data/persons.json', JSON.stringify(personas), function(err,data){
            if(err){
                console.log( "Entre acá: ", err)
            }
        })
        console.log('%cpersonaController.js line:10 personas', 'color: white; background-color: #007acc;', personas);
        res.render('personas',{ personas })
    })
}

function verPrueba(req, res){
    res.render("personas",{titulo: "Este es el Titulo"})
}
export default {
    verPersonas,
    verPrueba
}
