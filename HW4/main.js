const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//First function
function getPairs(students){
    let pairsOfStudents = []; 
    let boysStudents = [];
    let girlsStudents = [];
    for(student of students){
        if(student === "Саша" || student === "Ігор" || student === "Олексій"){
            boysStudents.push(student);
        }
        else{
            girlsStudents.push(student);
        }
    }
    for(let i = 0; i < 3; i++){
        pairsOfStudents[i] = [" " + boysStudents[i] + ' i ' + girlsStudents[i]];
    }
    return pairsOfStudents;
}
let pairs = getPairs(students);
document.writeln(`<p>пари студентів: ${pairs}</p>`);

//Second Function
function themesForStudents(pair, them){
	let studentThemes = [];
    for(let i = 0; i < themes.length; i++) {
        studentThemes[i] = [pairs[i] + " - " + themes[i]];
    }
    return studentThemes;
}
const themesForStudent = themesForStudents(pairs, themes);
document.writeln(`<p>теми студентів: ${themesForStudent}</p>`);

//Third Function
function studentAndMarks(students, marks){
	let studentsAndMarks = [];
	for(let i = 0; i < marks.length; i++){
		studentsAndMarks[i] = [" " + students[i] + " - " + marks[i]];
	}
	return studentsAndMarks;
}
let result3 = studentAndMarks(students, marks);
document.writeln(`<p>результат  студента: ${result3}</p>`);

//Function random mark 
function getRandomMark(minMark, maxMark) {
  return Math.floor(Math.random() * (maxMark - minMark + 1)) + minMark;
}

//Forth function
function pairsAndMark(pair, mark){
	let pairAndMark = [];
	for (let i = 0; i < pairs.length; i++ ) {
		pairAndMark[i] = [pairs[i] + ", " + themes[i] + " - " + getRandomMark(1, 5)];
	}
	return pairAndMark;
}

document.writeln(`<p>результат  студента: ${pairsAndMark(pairs, marks)}</p>`);