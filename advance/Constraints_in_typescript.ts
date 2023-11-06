{
    //  Constraints
    // kono kichu force kore dea. zemon student er 3ta property e lagbe. eta ditei hobe
    const addCourseToStudent = <T extends {id: number; name: string; email: string} >(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 123,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 125,
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  const student3 = addCourseToStudent({ id: 44, name:'mr x', email: 'emni@gmail.com'})
}