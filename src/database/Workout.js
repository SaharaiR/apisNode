const DB = require("./db.json");
const { saveToDB } = require("./utils");

/*ESTO ES PORQUE SE ESTA MANEJANDO COMO DB UN ARCHIVO JSON, AQUI DEBE DE IR LA CONEXION A LA DB */
const getAllWorkouts = () => {
    return DB.workouts;
}

const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workout.id);
    if(!workout){
        return;
    }
    return workout;
}

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = 
        DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > 1;
    if(isAlreadyAdded){
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    return newWorkout;
}

const updateOneWorkout = (workoutId, changes) => {
    const indexForUpdated  = DB.workouts.findIndex((workout) => (workout.id = workout.id))
    if(indexForUpdated === -1 ){
        return;
    }
    const updatedWorkout = {
        ...DB.workouts[indexForUpdated],
        ...changes,
        updateAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
    }
    DB.workouts[indexForUpdated] = updatedWorkout;
    saveToDB(DB);
    return updatedWorkout;
}

const deleteOneWorkout = (workoutId) => {
    const indexForDeleted = DB.workouts.findIndex( (workout) => workout.id === workout.id )
    if(indexForDeleted === -1){
        return
    }
    DB.workouts.splice(indexForDeleted, 1);
    saveToDB(DB);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}