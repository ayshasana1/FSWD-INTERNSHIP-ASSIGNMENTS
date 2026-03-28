let students=[
    {id:1,name:"navya",course:"MERN"},
    {id:2,name:"kavya",course:"AIML"}
];

const getAllStudents=()=> students;

const getStudentById=(id)=>{
    return students.find((student)=>student.id===id);
};

const addStudent=(studentData)=>{
    const newStudent={
        id: students.lenght+1,
        ...studentData
    };
    students.push(newStudent);
    return newStudent;
};

module.exports={
    getAllStudents,
    getStudentById,
    addStudent
};