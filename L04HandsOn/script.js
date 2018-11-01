class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  };
  class manager extends Employee {
      jobDescription (descriptionOfJob)
      constructor(name, salary, hireDate)
      super (name, salary, hireDate);
      console.log (this.name + "was hired on" + this.hireDate + "makes" + this.salary + "and does" + this.jobDescription);
     
  };
  class designer extends Employee {
      yearsExperience (experience)
      constructor(name, salary, hireDate)
      super (name, salary, hireDate)
      console.log (this.name + "was hired on" + this.hireDate + "makes" + this.salary + "and has" + this.experience);

  };
  class SalesAssociate extends Employee {
      degreeCompleted (degrees)
      constructor(name, salary, hireDate)
      super (name, salary, hireDate)
      console.log (this.name + "was hired on" + this.hireDate + "makes" + this.salary + "and has completed" + this.degrees);

  };

  console.log (name = "Donna", hireDate = "3/22/2017", salary = 80000);