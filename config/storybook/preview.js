import {addDecorator} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StileDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {RoutesDecorator} from "../../src/shared/config/storybook/RoutesDecarator/RoutesDecorator";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RoutesDecorator);