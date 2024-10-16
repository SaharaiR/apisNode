const DB = require("./db.json");
const { saveToDB } = require("./utils");

/*ESTO ES PORQUE SE ESTA MANEJANDO COMO DB UN ARCHIVO JSON, AQUI DEBE DE IR LA CONEXION A LA DB */
const getAllWorkouts = () => {
    return DB.workouts;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = 
        DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > 1;
    if(isAlreadyAdded){
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDB(DB)
    return newWorkout;
}

module.exports = {
    getAllWorkouts,
    createNewWorkout
}