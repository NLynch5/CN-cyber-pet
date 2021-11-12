const petQ = [
  {
    type: "petTypeList",
    message: "Which pet do you wish to select?",
    choices: ["Dog", "Cat", "Rabbit"],
  },
  {
    type: "input",
    petName: "petName",
    message: "What do you want to call your pet?",
  },
];

module.exports = {
  petQ,
};
