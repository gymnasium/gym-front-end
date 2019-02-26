import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { GymButton } from "../../components"

storiesOf("GymButton", module)
  .add("with text", () => <GymButton>Hello Button</GymButton>)
  .add("with some emoji", () => (
    <GymButton
      onClick={() => {
        debugger
      }}
    >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </GymButton>
  ))
