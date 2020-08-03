const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//1
function getSubjects(student){
    const subjects = Object.keys(student.subjects);
    const sub = subjects.map(sub => (sub[0].toUpperCase() + sub.slice(1).toLowerCase()).replace('_', ' ', 'gi'));
    return sub;
}
console.log(getSubjects(students[0]));

//2
function getAverageMark(avarage){
    const subjects = Object.values(avarage.subjects).join(',').split(',');
    let sum = subjects.reduce((last, pres) => parseInt(last) + parseInt(pres), 0);
    return Number((sum/subjects.length).toFixed(2));
}
console.log(getAverageMark(students[0]));

//3
function getStudentInfo(student){
    return {
        name: student.name,
        course: student.course,
        averageMark: getAverageMark(student)
    }
}
console.log(getStudentInfo(students[2]));

//4
function getStudentsNames(students){
    const name = students.map(item => item.name).sort();
    return name;
}
console.log(getStudentsNames(students));

//5
function getBestStudent(students){
    let averageMark = [];
    const studentName = students.map(item => item.name);
    students.forEach(item => {
        averageMark.push(getAverageMark(item));
    });
    let maxMark = Math.max(...averageMark);
    let bestStudent = studentName[averageMark.indexOf(maxMark)];
    return bestStudent;
}
console.log(getBestStudent(students));

//6 
function calculateWordLetters(str){
    let count = {};
    let i = str.toLowerCase().split('').forEach(item =>{
        if(count[item]){
            count[item]++;
        } else{
            count[item] = 1;
        }
    });
    return count;
}
console.log(calculateWordLetters('Test'));