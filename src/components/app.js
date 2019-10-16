import React, { Fragment, useState } from "react";
import { Header, Footer } from "./Layouts/";
import Exercies from "../components/Exercises";
import { muscles, exercises as exercisesData } from "../store";

function getExercisesByMuscles(exercises) {
  return Object.entries(
    exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise];

      return exercises;
    }, {})
  );
}

const App = props => {
  const [exercises, setExercise] = useState(exercisesData);

  const exercisesFlattened = getExercisesByMuscles(exercises);
  const handleCatChange = e => {
    if (e.target.textContent == "All") return setExercise(exercisesData);

    let result = exercisesFlattened.filter(
      ar => ar[0] === e.target.textContent
    );

    console.log(result[0][1]);
    setExercise(result[0][1]);
  };
  return (
    <Fragment>
      <Header />
      <Exercies exercises={exercisesFlattened} />
      <Footer muscles={muscles} handleCatChange={handleCatChange} />
    </Fragment>
  );
};
export default App;
