import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./context";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  backgrounds: [
    { name: "Default Theme", value: "#ffffff", default: true },
    { name: "Dark Theme", value: "#2D3047" },
  ],
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
