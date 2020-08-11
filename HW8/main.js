class Student{
	constructor(course, university, fullName){
		this.course = course;
		this.university = university;
		this.fullName = fullName;
		this.marks = [5, 4, 4, 5];
		this.getAverageMark = 0;
		this.isStudent = true;
	}

	getInfo(){
		return `студент ${this.course}го курсу, ${this.university}, ${this.fullName}`;
	}

	get allMarks(){
		if(this.isStudent === true){
			return this.marks;
		} else{
			return null;
		}
	}

	set allMark(mark){
		if(this.isStudent === true){
			this.marks.push(mark);
			return this.marks;
		}else{
			return null;
		}
	} 

	getAverageMarks(){
		if(this.isStudent === true){
			this.getAverageMark = this.marks.reduce((acc, curr) => acc + curr, 0);
			return Number((this.getAverageMark/this.marks.length).toFixed(3));
		} else return null
	}

	dismiss(){
	    return this.isStudent = false;
	}

	recover(){
	    return this.isStudent = true;
	}
}

class BudgetStudent extends Student{
	constructor(course, university, fullName){
		super(course, university, fullName);
		setInterval(() => this.getScholarship(), 30000);
	}

	getScholarship(){
		if(this.isStudent === true && this.getAverageMarks() >= 4){
			return console.log("Ви отримали стипендію 1400 грн.")
		} else{
			return console.log("Стипендії немає")
		}
	}
};

const st1 = new Student('1', 'Вищої Школи Психотерапії м.Одеса', 'Остап Бендер');

const stBd = new BudgetStudent('2', 'Вищої Школи Психотерапії м.Одеса', 'Остап Бендер');
console.log(st1.getInfo());
console.log(st1.allMarks);
st1.allMarks = 3;
console.log(st1.allMarks);
console.log(st1.getAverageMarks());
st1.dismiss();
console.log(st1.allMarks);
st1.recover();
console.log(st1.allMarks);

console.log("");
console.log("");
console.log("");
console.log("Advanced task");
console.log("");

console.log(stBd.getInfo());
stBd.marks = [3, 5, 4, 5, 3, 5];
console.log(stBd.allMarks);
console.log(stBd.getAverageMarks());
stBd.getScholarship();
stBd.dismiss();
stBd.getScholarship();
console.log(stBd.allMarks);
stBd.recover();
stBd.allMarks = 5;
console.log(stBd.allMarks);



