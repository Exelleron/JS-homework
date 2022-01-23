const studentArr = [
    {
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
        course: 2,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
        course: 4,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
];


console.log('Task 1');

class Student {
    constructor(enrollee = {}) {
        this.id = Student.incrementId();
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        Student.listOfStudents = {id: this.id, ...enrollee,};
    }

    static get listOfStudents() {
        return this.studentsList || []
    }

    static set listOfStudents(student) {
        const studentList = this.studentsList || [];
        student.isSelfPayment = true;
        if (student.ratingPoint >= 800 && studentList.length < 5) {
            student.isSelfPayment = false;
        }
        if (studentList.length >= 5) {
            let notSelfPayment = studentList.filter((person) => !person.isSelfPayment);
            let selfPayment = studentList.filter((person) => person.isSelfPayment);

            if (student.ratingPoint >= 800) {
                student.isSelfPayment = false;
                notSelfPayment.unshift(student);

                if (notSelfPayment.length > 5) {
                    let notSelfPaymentSort = notSelfPayment.sort((a, b) => a.ratingPoint - b.ratingPoint);
                    if (notSelfPaymentSort[0].ratingPoint === notSelfPaymentSort[1].ratingPoint) {
                        notSelfPaymentSort[0].isSelfPayment = notSelfPaymentSort[0].schoolPoint < notSelfPaymentSort[1].schoolPoint;
                        notSelfPaymentSort[1].isSelfPayment = notSelfPaymentSort[0].schoolPoint > notSelfPaymentSort[1].schoolPoint;
                    } else {
                        notSelfPaymentSort[0].isSelfPayment = notSelfPaymentSort[0].ratingPoint < notSelfPaymentSort[1].ratingPoint;
                        notSelfPaymentSort[1].isSelfPayment = notSelfPaymentSort[0].ratingPoint > notSelfPaymentSort[1].ratingPoint;
                    }
                    notSelfPayment = notSelfPaymentSort;
                }
            } else {
                selfPayment.push(student)
            }
            return this.studentsList = [...notSelfPayment, ...selfPayment];
        }
        return this.studentsList = [...studentList, student];
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1;
        else this.latestId++;
        return this.latestId;
    }
}

studentArr.forEach(student => new Student(student));
console.log(Student.listOfStudents);

// console.log(new Student(studentArr));
// console.log(new Student(studentArr[1]));
// console.log(new Student(studentArr[2]));
// console.log(new Student(studentArr[3]));

///////////////////////////

console.log('Task 2');

class CustomString {
    reverse(string) {
        return string.split('').reverse().join('');
    }

    ucFirst(string) {
        return string = string[0].toUpperCase() + string.slice(1);
    }

    ucWords(string) {
        return string = string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }
}

const myString = new CustomString();
console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));
