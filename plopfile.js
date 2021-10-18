const path = require("path");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = function (plop) {
  plop.setGenerator("test", {
    description: "Generates a test file",
    prompts: [
      {
        type: "input",
        name: "component",
        message: "component name",
      },
      {
        type: "input",
        name: "subpath",
        message: "subfolder (inside components, e.g. Blog)",
      },
    ],
    actions(data) {
      return [
        {
          type: "add",
          path: path.join(
            __dirname,
            "components",
            data.subpath,
            data.component,
            `${data.component}.test.js`
          ),
          templateFile: ".plop/templates/index.test.js.hbs",
          data: {
            component: data.component,
          },
        },
      ];
    },
  });

  plop.setGenerator("component", {
    description: "add component",
    prompts: [
      {
        type: "input",
        name: "component",
        message: "component name",
      },
      {
        type: "input",
        name: "subpath",
        message: "subfolder (inside components, e.g. blog)",
      },
    ],
    actions(input) {
      const capitalizedSubpath = input.subpath
        .split("/")
        .map(capitalize)
        .join("/");
      const storybookTitle =
        `Components/${capitalizedSubpath}/${input.component}`.replace(
          "//",
          "/"
        );
      const componentDirectory = path.join(
        __dirname,
        "components",
        input.subpath,
        input.component
      );
      const data = {
        component: input.component,
        title: storybookTitle,
        prefix: "z-",
      };
      return [
        {
          type: "add",
          path: path.join(componentDirectory, `index.vue`),
          templateFile: ".plop/templates/index.vue.hbs",
          data,
        },
        {
          type: "add",
          path: path.join(componentDirectory, `index.stories.js`),
          templateFile: ".plop/templates/index.stories.js.hbs",
          data,
        },
        {
          type: "add",
          path: path.join(componentDirectory, `index.test.js`),
          templateFile: ".plop/templates/index.test.js.hbs",
          data,
        },
      ];
    },
  });
};
