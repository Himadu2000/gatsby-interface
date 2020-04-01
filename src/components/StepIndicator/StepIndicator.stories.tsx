/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { StoryUtils } from "../../utils/storybook"
import { radioKnobOptions } from "../../utils/storybook/knobs"
import { StepIndicator, StepIndicatorStep, StepIndicatorStepStatus } from "."

const STATUSES: StepIndicatorStepStatus[] = ["DEFAULT", "ACTIVE", "DONE"]

export default {
  title: `StepIndicator`,
  component: StepIndicator,
  subcomponents: [StepIndicatorStep],
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
}

export const Basic = () => (
  <StepIndicator>
    <StepIndicatorStep status="DONE" onClick={action(`Step 1 was clicked`)}>
      Done Step
    </StepIndicatorStep>
    <StepIndicatorStep status="ACTIVE" onClick={action(`Step 2 was clicked`)}>
      Active Step
    </StepIndicatorStep>
    <StepIndicatorStep onClick={action(`Step 3 was clicked`)}>
      Default Step
    </StepIndicatorStep>
  </StepIndicator>
)

export const Sandbox = () => {
  return (
    <StepIndicator>
      <StepIndicatorStep
        status={radios(
          "(Step 1) Status",
          radioKnobOptions(STATUSES),
          `DEFAULT`
        )}
      >
        {text("(Step 1) Label", "Step 1")}
      </StepIndicatorStep>
      <StepIndicatorStep
        status={radios(
          "(Step 2) Status",
          radioKnobOptions(STATUSES),
          `DEFAULT`
        )}
      >
        {text("(Step 2) Label", "Step 2")}
      </StepIndicatorStep>
      <StepIndicatorStep
        status={radios(
          "(Step 3) Status",
          radioKnobOptions(STATUSES),
          `DEFAULT`
        )}
      >
        {text("(Step 3) Label", "Step 3")}
      </StepIndicatorStep>
    </StepIndicator>
  )
}

export const WithLink = () => {
  return (
    <StepIndicator>
      <StepIndicatorStep
        status="DONE"
        onClick={action(`Step 1 was clicked`)}
        to={window.location.href}
      >
        Done Step
      </StepIndicatorStep>
      <StepIndicatorStep status="ACTIVE" onClick={action(`Step 2 was clicked`)}>
        Active Step
      </StepIndicatorStep>
    </StepIndicator>
  )
}