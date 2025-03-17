interface Student {
  name: string;
  course: string;
}

interface _Worker {
  company: string;
  position: string;
}

type studentWorker = Student & _Worker;

const studentWorker: studentWorker = {
  name: "John Doe",
  course: "Computer Science",
  company: "TechCorp",
  position: "Software Developer",
};

console.log(studentWorker);
