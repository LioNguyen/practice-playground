export default function (
  /** @type {import("plop").NodePlopAPI} */
  plop
) {
  plop.setGenerator("create-challenge", {
    description: "Create challenge file with test",
    prompts: [
      {
        type: "input",
        name: "challengeName",
        message: "Please enter challenge name",
      },
      {
        type: "input",
        name: "challengeType",
        message: "Please enter folder to add challenge",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{toLowerCase challengeType}}/{{challengeName}}/{{challengeName}}.ts",
        templateFile: "templates/challenge.ts.hbs",
      },
      {
        type: "add",
        path: "src/{{toLowerCase challengeType}}/{{challengeName}}/{{challengeName}}.spec.ts",
        templateFile: "templates/challenge.spec.ts.hbs",
      },
    ],
  });

  plop.setHelper("toLowerCase", (str) => {
    return str.toLowerCase();
  });
}
