
  const darshan = {
    firstname: "darshan",
    lastname: "bashetti",
    birthYear: 2024 - 23,
    frds: ["vonya", "shashi", "niks"],
    calcAge: function () {
      this.age = 2024 - this.birthYear;
      return this.age;
    },
  };

  console.log(darshan.calcAge());
  console.log`${darshan.firstname} is a ${darshan.calcAge} old man, and he has drivers licence.`;

