const GRADE_DICT = {
  0.9: 'A',
  0.8: 'B',
  0.7: 'C',
  0.6: 'D',
  0.1: 'F',
};

const SCHOOL_DATA = {
  Standard: {
    approvalGrade: 0.7,
  },
  Hogwarts: {
    approvalGrade: 0.8,
  },
};

const gradeKeys = Object.keys(GRADE_DICT);

const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  for (let i = 0; i < gradeKeys.length; i += 1) {
    if (gradeNumber >= gradeKeys[i]) {
      letterGrade = GRADE_DICT[gradeKeys[i]];
      break;
    }
  }
  console.log(letterGrade);
  return letterGrade;
};

const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade),
});

const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  school,
  disciplines: disciplines.map(getLetterGrades) });

const approvedStudents = (disciplines, { approvalGrade }) =>
  disciplines.every(({ grade }) => grade > approvalGrade);

const updateApprovalData = ({ name: studentName, disciplines }) => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
};

function setApproved(students) {
  students
    .map(percentageGradesIntoLetters)
    .filter(({ disciplines, school }) => approvedStudents(disciplines, SCHOOL_DATA[school]))
    .map(updateApprovalData);
}

const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

module.exports = {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};