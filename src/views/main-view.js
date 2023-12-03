"use client";
import { Box, Container, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useEffect } from 'react';

const professors = [
  "Hozo Minja",
  "Širbegović Vedina",
  "Seno Čolo",
  "Avdagić Lejla",
  "Busuladžić Nela",
  "Zulčić Ankica",
  "Čolić Adnan",
  "Softić Adelisa",
  "Mehmedović Nihad",
  "Hujdur Lejla",
];
const subjects = [
  "BHS",
  "ENG",
  "NJEM",
  "TZO",
  "MAT",
  "HIST",
  "VJE",
  "INF",
  "FIZ",
  "GEO",
  "HEM",
  "DSPK",
  "MAR",
  "BIZEKO",
  "OSEKO",
  "INFTEH",
  "MEĐEKO",
  "EUIMS",
  "TBR",
  "BAKPOS",
  "PRAVO",
  "UUPP",
  "EKOMAT",
  "PRAKSA",
  "KNJI",
  "PZV",
];

const time = [
  "M1",
  "M2",
  "M3",
  "M4",
  "M5",
  "M6",
  "TU1",
  "TU2",
  "TU3",
  "TU4",
  "TU5",
  "TU6",
  "W1",
  "W2",
  "W3",
  "W4",
  "W5",
  "W6",
  "TH1",
  "TH2",
  "TH3",
  "TH4",
  "TH5",
  "TH6",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
];

const classrooms = [
  "PR1",
  "PR2",
  "MULTI",
  "P1",
  "P2",
  "P3",
  "P4",
  "P5",
  "P6",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "T1",
  "T2",
  "T3",
  "T4",
  "T5",
  "Sala",
];

const classes = [
  "I.1",
  "I.2",
  "I.3",
  "I.4",
  "II.1",
  "II.2",
  "II.3",
  "II.4",
  "III.1",
  "III.2",
  "III.3",
  "III.4",
  "IV.1",
  "IV.2",
  "IV.3",
  "IV.4",
];
//  5-tuple consisting of 5 indices, first index represents professor,
//  second index represents the time, third index is subject, fourth is classroom and
//  fifth is class

const cell1 = {
  professorIdx: 0,
  timeIdx: 0,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 0,
};
const cell2 = {
  professorIdx: 0,
  timeIdx: 1,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 1,
};
const cell3 = {
  professorIdx: 0,
  timeIdx: 2,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 2,
};
const cell4 = {
  professorIdx: 0,
  timeIdx: 3,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 3,
};
const cell5 = {
  professorIdx: 0,
  timeIdx: 7,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 0,
};
const cell6 = {
  professorIdx: 0,
  timeIdx: 8,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 1,
};
const cell7 = {
  professorIdx: 0,
  timeIdx: 9,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 2,
};
const cell8 = {
  professorIdx: 0,
  timeIdx: 10,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 3,
};
const cell9 = {
  professorIdx: 0,
  timeIdx: 14,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 0,
};
const cell10 = {
  professorIdx: 0,
  timeIdx: 15,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 1,
};
const cell11 = {
  professorIdx: 0,
  timeIdx: 16,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 2,
};
const cell12 = {
  professorIdx: 0,
  timeIdx: 17,
  subjectIdx: 0,
  classroomIdx: 15,
  classIdx: 3,
};
const cell13 = {
  professorIdx: 2,
  timeIdx: 1,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 0,
};
const cell14 = {
  professorIdx: 2,
  timeIdx: 2,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 1,
};
const cell15 = {
  professorIdx: 2,
  timeIdx: 3,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 2,
};
const cell16 = {
  professorIdx: 2,
  timeIdx: 4,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 3,
};
const cell17 = {
  professorIdx: 2,
  timeIdx: 8,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 0,
};
const cell18 = {
  professorIdx: 2,
  timeIdx: 9,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 1,
};
const cell19 = {
  professorIdx: 2,
  timeIdx: 10,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 2,
};
const cell20 = {
  professorIdx: 2,
  timeIdx: 11,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 3,
};
const cell21 = {
  professorIdx: 2,
  timeIdx: 15,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 0,
};
const cell22 = {
  professorIdx: 2,
  timeIdx: 16,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 1,
};
const cell23 = {
  professorIdx: 2,
  timeIdx: 17,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 2,
};
const cell24 = {
  professorIdx: 2,
  timeIdx: 18,
  subjectIdx: 1,
  classroomIdx: 17,
  classIdx: 3,
};
const cell300 = {
  professorIdx: 1,
  timeIdx: 0,
  subjectIdx: 1,
  classroomIdx: 1,
  classIdx: 1,
};
const cell301 = {
  professorIdx: 2,
  timeIdx: 2,
  subjectIdx: 2,
  classroomIdx: 2,
  classIdx: 2,
};
const cell302 = {
  professorIdx: 2,
  timeIdx: 0,
  subjectIdx: 2,
  classroomIdx: 2,
  classIdx: 3,
};

const tempSolution2 = [cell1, cell2, cell3, cell4];

/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////    HELPER FUNCTIONS    /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

//  Function that checks if array has breaks between class times

const checkIfClassDayIsContinous = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1][0] == arr[i][0]) {
      // If its still the same day M == M for example (monday == monday)
      if (arr[i + 1][1] - arr[i][1] != 1) {
        return false;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
};

const checkIfProfessorDayIsContinousOrWithOneBreak = (arr) => {
  let foundOneBreakInOneDay = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1][0] == arr[i][0]) {
      // If its still the same day m == m for example (monday == monday)
      if (arr[i + 1][1] - arr[i][1] > 1) {
        return false;
      } else if (arr[i + 1][1] - arr[i][1] == 1) {
        if (foundOneBreakInOneDay === true) {
          //  We found another break in one day
          return false;
        }
        foundOneBreakInOneDay = true;
        continue;
      } else {
        continue;
      }
    } else {
      foundOneBreakInOneDay = false; // We switched from one day to another so we need to restart the variable for checking one break a day
      continue;
    }
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//  Function to check if some professor is in different classes at the same time
//  Solution is made of 'solutionCells', we have to check if some two cells have the
//  the same attributes professorIdx and timeIdx which would mean that the same professor
//  is asigned to different class at the same time
const checkForSameProfessorDifferentClass = (solution) => {
  //  we will accumulate penalties in this variable
  let sum = 0;

  //    we will iterate through the solution(all cells) for all professors and check if the times collide
  for (let i = 0; i < professors.length; i++) {
    let timesForProfessor = new Array(time.length).fill(false);
    for (let j = 0; j < solution.length; j++) {
      // console.log("s", solution[j]);
      if (
        solution[j].professorIdx === i &&
        timesForProfessor[solution[j].timeIdx] === true
      ) {
        sum -= 10000; //    We found a cell in which is professor assigned to a time in which he is already assigned
      } else if (
        solution[j].professorIdx === i &&
        timesForProfessor[solution[j].timeIdx] === false
      ) {
        timesForProfessor[solution[j].timeIdx] = true;
      } else {
        continue;
      }
    }
    // console.log("times for proff", timesForProfessor);
  }
  return sum; //   We didnt find double times for the same professor
};

//  Function checks if some class has all their subjects one after another,
//  without time gaps of 45mins or more and have between 4 and 7 classes a day
const checkClassGapsAndNumOfLessons = (solution) => {
  //  we will accumulate penalties in this variable
  let sum = 0;

  //    we will iterate through the solution(all cells) for all classes and check if one class has continous lessons in a day
  for (let i = 0; i < classes.length; i++) {
    let classesPerDay = new Array(5).fill(0); //    Array of zeros for each day from monday to friday, when we find a solution cell for we increment that index in an array
    let allClassTimesFound = new Array(); // We will fill this array with all times found for current class in current solution, then sort it and check if the times for each day are continous
    //  Could optimize this to make it instead of going through the solution for each class, check for all classes in one going by putting
    //  variables 'classesPerDay and allClassTimesFound in an array, where array is slot for each class to check
    for (let j = 0; j < solution.length; j++) {
      if (solution[j].classIdx === i) {
        if (time[solution[j].timeIdx][0] == "M") {
          classesPerDay[0]++;
          allClassTimesFound.push(time[solution[j].timeIdx]);
        } else if (time[solution[j].timeIdx][0] == "T") {
          if (time[solution[j].timeIdx][1] != "H") {
            classesPerDay[1]++;
            allClassTimesFound.push(time[solution[j].timeIdx]);
          } else {
            classesPerDay[3]++;
            allClassTimesFound.push(time[solution[j].timeIdx]);
          }
        } else if (time[solution[j].timeIdx][0] == "W") {
          classesPerDay[2]++;
          allClassTimesFound.push(time[solution[j].timeIdx]);
        } else if (time[solution[j].timeIdx][0] == "F") {
          classesPerDay[4]++;
          allClassTimesFound.push(time[solution[j].timeIdx]);
        }
      } else {
        continue;
      }
    }
    for (let j = 0; j < 5; j++) {
      if (classesPerDay[j] < 4 || classesPerDay[j] > 7) {
        sum -= 5000;
        break;
      }
    }
    allClassTimesFound.sort();
    if (checkIfClassDayIsContinous(allClassTimesFound) == false) {
      sum -= 10000;
    }
  }
  return sum; //   We didnt find double times for the same professor
};

//  Functions that checks if professor has at most one break of 45 mins,
//  a 'one lesson' gap and between 2 and 7 classes a day
const checkProfessorBreakAndNumOfLessons = (solution) => {
  //    we will iterate through the solution(all cells) for all professors and check if one professor has at most
  //    1 break of 45 mins between classes in a day and has between 2 and 7 lessons a day

  let sum = 0; // Accumulate the penalties in this variable;
  for (let i = 0; i < professors.length; i++) {
    let classesPerDay = new Array(5).fill(0); //    Array of zeros for each day from monday to friday, when we find a solution cell for we increment that index in an array
    let allClassTimesFound = new Array(); // We will fill this array with all times found for current professor in current solution, then sort it and check if the times for each day are continous
    //  or with one break at most
    //  Could optimize this to make it instead of going through the solution for each professor, check for all professor in one going by putting
    //  variables 'classesPerDay and allClassTimesFound in an array, where array is slot for each class to check
    for (let j = 0; j < solution.length; j++) {
      if (solution[j].professorIdx === i) {
        if (time[solution[j].timeIdx][0] == "M") {
          classesPerDay[0]++;
          allClassTimesFound.push(time[solution[j].timeIdx]);
        } else if (time[solution[j].timeIdx][0] == "T") {
          if (time[solution[j].timeIdx][1] != "H") {
            classesPerDay[1]++;
            allClassTimesFound.push(time[solution[j].timeIdx]);
          } else {
            classesPerDay[3]++;
            allClassTimesFound.push(time[solution[j].timeIdx]);
          }
        } else if (time[solution[j].timeIdx][0] == "W") {
          classesPerDay[2]++;
          allClassTimesFound.push(time[solution[j].timeIdx]);
        } else if (time[solution[j].timeIdx][0] == "F") {
          classesPerDay[4]++;
          allClassTimesFound.push(time[solution[j].timeIdx]);
        }
      } else {
        continue;
      }
    }
    for (let j = 0; j < 5; j++) {
      if (classesPerDay[j] == 1 || classesPerDay[j] > 7) {
        sum -= 5000;
        break;
      }
    }
    allClassTimesFound.sort();
    if (
      checkIfProfessorDayIsContinousOrWithOneBreak(allClassTimesFound) == false
    ) {
      sum -= 10;
    }
  }
  return sum; //   We didnt find double times for the same professor
};

function getRdn(min, max) {
  return Math.random() * (max - min) + min;
}

function checkBound(val, lower, upper) {
  if (val < lower) return lower;
  if (val > upper) return upper;
  return val;
}

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

// Define the cost function
function cost(x) {
  // temporaly cost function
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i].timeIdx * x[i].timeIdx;
  }
  return sum;
}


function cost_2(x) {
  let sum = 0;
  sum += checkProfessorBreakAndNumOfLessons(x);
  sum += checkForSameProfessorDifferentClass(x);
  //sum += checkClassGapsAndNumOfLessons(x);  // commented to make professor conditions work first
  return sum;
}


function switchTimes(arrayTimes, arraySolution) {
  let arrayTemp = arraySolution;
  // switch old timeslots with new timeslots
  for (let i = 0; i < arrayTimes.length; i++) {
    arrayTemp[i].timeIdx = arrayTimes[i];
  }
  return arrayTemp;
}

// bat algorithm for finding best timeslots for tempSolution, rewrites the tempSolution with new timeslots
// bestBat variable includes best timeslots for tempSolution
function batAlgorithm(
  costFunc,
  saveRate = 100,
  maxGen = 1000,
  popSize = 50,
  solution = tempSolution2,
  maxLoudness = 2,
  maxPulseRate = 1,
  fMin = 0,
  fMax = 10,
  lowerBound = 0,
  upperBound = time.length - 1,
  tempSolution,
  setTempSolution
) {
  if (!costFunc)
    throw new Error(
      "Please pass a valid cost function for your optimization problems"
    );
  const ALPHA = 0.9;
  const GAMMA = 0.9;

  // parameters initialization using uniform distribution
  let position = [];
  let velocity = [];
  let loudness = [];
  let pulseRate = [];
  let frequency = [];
  let newPosition = []; // bats local array used to calculate bats new position at each generation, before acceptation

  for (let i = 0; i < popSize; i++) {
    loudness[i] = getRdn(1, maxLoudness);
    pulseRate[i] = getRdn(0, maxPulseRate);
    frequency[i] = getRdn(fMin, fMax);
    position[i] = [];
    velocity[i] = [];
    newPosition[i] = [];

    for (let j = 0; j < solution.length; j++) {
      position[i][j] = Math.round(getRdn(lowerBound, upperBound));
      velocity[i][j] = getRdn(-3, 3);
    }
  }

  // evaluate the bats after initialization
  let cost = [];
  for (let i = 0; i < popSize; i++) {
    cost[i] = costFunc(switchTimes(position[i], solution));
  }

  let bestBat;
  // cycle through each generation

  for (let gen = 1; gen <= maxGen; gen++) {
    let indexMax = cost.indexOf(Math.max(...cost)); // best bat index so far
    bestBat = position[indexMax]; // best bat so far

    if (gen % saveRate === 0 || gen === 1) {
      let data = {};

      data.gen = gen;
      data.loudness = loudness;
      data.pulseRate = pulseRate;
      data.frequency = frequency;
      data.position = position;
      data.velocity = velocity;
      data.bestBat = bestBat;
    }

    // cycle through the population
    for (let i = 0; i < popSize; i++) {
      // getRdn(0,1) = beta
      frequency[i] = fMin + (fMax - fMin) * getRdn(0, 1); // assign new frequency to each bat (2)
      for (let j = 0; j < solution.length; j++) {
        velocity[i][j] =
          velocity[i][j] + (position[i][j] - bestBat[j]) * frequency[i]; // assign new velocity to each bat (3)
        newPosition[i][j] = Math.round(position[i][j] + velocity[i][j]); // creating a new position that is not yet assigned to the bat (4)
        newPosition[i][j] = checkBound(
          newPosition[i][j],
          lowerBound,
          upperBound
        );
      }

      // generate a local solution around the best solution
      if (getRdn(0, 1) > pulseRate[i]) {
        for (let j = 0; j < solution.length; j++) {
          // getRdn(-1, 1) = epsilon
          newPosition[i][j] = Math.round(
            bestBat[j] + getRdn(-1, 1) * average(loudness)
          ); // random walk (5)
          newPosition[i][j] = checkBound(
            newPosition[i][j],
            lowerBound,
            upperBound
          );
        }
      }
      
      let newCost = costFunc(switchTimes(newPosition[i], solution)); // bat 'newPosition's cost

      // tr y to accept the new solution
      if (getRdn(0, 1) < loudness[i] || newCost >= cost[i]) {
        // new solution accepted, assigning new position to each bat
        for (let j = 0; j < solution.length; j++) {
          position[i][j] = newPosition[i][j];
        }
        cost[i] = newCost;
        loudness[i] = loudness[i] * ALPHA; // loudness update (6)
        pulseRate[i] = pulseRate[i] * (1 - Math.exp(-GAMMA * gen)); // pulse rate update (6)
      }
    }


  }

  let newSolution = solution;
  setTempSolution(newSolution);
  solution = switchTimes(bestBat, solution);
  return solution;
}

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
});


const renderCell = (timeslotIndex, professorLessons) => {
  const lessonsInThisTimeslot = professorLessons.filter(
    lesson => lesson.timeIdx === timeslotIndex
  );

  const cellStyles = {
    bgcolor: lessonsInThisTimeslot.length > 0 ? "secondary.main" : "background.paper",
    color: lessonsInThisTimeslot.length > 0 ? "common.white" : "text.primary",
    textAlign: "center",
    borderRight: timeslotIndex < time.length - 1 ? "1px solid rgba(224, 224, 224, 1)" : "",
  };

  return (
    <TableCell key={`cell-${timeslotIndex}`} sx={cellStyles}>
      {lessonsInThisTimeslot.map((lesson, idx) => (
        <div key={idx}>
          {classes[lesson.classIdx]}
          <br />
          {classrooms[lesson.classroomIdx]}
          <br />
          {subjects[lesson.subjectIdx]}
        </div>
      ))}
    </TableCell>
  );
};

const initialSolution1 = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10, cell11, cell12, cell13, cell14, cell15, cell16, cell17, cell18, cell19, cell20, cell21, cell22, cell23, cell24];
console.log(cost_2(initialSolution1)); // hardcoded solution has no gaps and 4 lessons every day but checkIfProfessorDayIsContinousOrWithOneBreak returns -5020


export default function MainView() {

  const initialSolution = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10, cell11, cell12, cell13, cell14, cell15, cell16, cell17, cell18, cell19, cell20, cell21, cell22, cell23, cell24];
  const [tempSolution, setTempSolution] = useState(initialSolution);

  const groupedLessons = {};
  tempSolution.forEach(lesson => {
      const professorName = professors[lesson.professorIdx];
      if (!groupedLessons[professorName]) {
          groupedLessons[professorName] = [];
      }
      groupedLessons[professorName].push(lesson);
  });

  const tableCellStyle = {
    fontWeight: "bold",
    bgcolor: "primary.dark",
    color: "common.white",
    textAlign: "center",
  };

  const tableHeaderStyle = {
    bgcolor: "primary.main",
    color: "common.white",
    textAlign: "center",
  };

  useEffect(() => {
    batAlgorithm(
      cost_2,
      150,
      10000,
      100,
      initialSolution,
      2,
      1,
      -10,
      10,
      0,
      time.length - 1,
      tempSolution,
      setTempSolution
    ); 
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: "70px", pl: 0, width: "100%" }}>
        <Box display="flex" justifyContent="center">
          <TableContainer component={Paper} elevation={3}>
            <Table sx={{ minWidth: 650 }} aria-label="schedule table">
              <TableHead>
                <TableRow>
                  <TableCell sx={tableHeaderStyle}>Professor</TableCell>
                  {time.map((timeslot, index) => (
                    <TableCell key={`head-cell-${index}`} sx={tableHeaderStyle}>
                      {timeslot}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(groupedLessons).map((professorName, index) => (
                  <TableRow key={`row-${index}`}>
                    <TableCell component="th" scope="row" sx={tableCellStyle}>
                      {professorName}
                    </TableCell>
                    {time.map((_, timeslotIndex) => (
                      renderCell(timeslotIndex, groupedLessons[professorName])
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </ThemeProvider>
  );

                    
}