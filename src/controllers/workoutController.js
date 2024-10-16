const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) =>{
    const allWorkouts = workoutService.getAllWorkouts();
    //res.send(`Get all workouts ${req.params.workoutId}`); sin conexion a la BD
    res.send({ 
        status: 'OK',
        data: allWorkouts
    });
}

const getOneWorkout = (req, res) =>{
    const { params: { workoutId } } = req;
    if(!workoutId){
        return;
    }
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ stauts: "OK", data: workout })
    //res.send("Get an existing workout");
}

const createNewWorkout = (req, res) =>{
    const { body } = req;
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }
    const createNewWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createNewWorkout});
    //res.send(`Get one workout ${req.params.workoutId}`);
}

const updateOneWorkout = (req, res) =>{
    const { body, params: { workoutId } } = req;
    if(!workoutId){
        return;
    }
    const updateWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.send({ status: "OK", data: updateWorkout });
}

const deleteOneWorkout = (req, res) =>{
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}