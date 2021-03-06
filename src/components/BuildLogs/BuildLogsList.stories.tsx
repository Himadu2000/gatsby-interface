/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { text, select, number } from "@storybook/addon-knobs"
import { DecoratorFn } from "@storybook/react"

import {
  withVariationsContainer,
  disableAnimationsDecorator,
} from "../../utils/storybook"
import { BuildLogsList } from "."
import { BuildActivityEntry } from "./BuildActivityEntry"
import {
  StructuredLogLevel,
  BuildActivityType,
  BuildActivityStatus,
} from "./types"
import { BuildStandardLogEntry } from "./BuildStandardLogEntry"
import { Heading } from "../Heading"

export default {
  title: `BuildLogsList`,
  component: BuildLogsList,
  decorators: [disableAnimationsDecorator] as DecoratorFn[],
}

const ALL_INCLUSIVE = [
  {
    id: "d05dc2f9-5f7c-45d0-8ae5-2eaf19bd1209",
    message: "Install project dependencies",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Info,
    __typename: "StructuredLog",
    activity: {
      id: "d05dc2f9-5f7c-45d0-8ae5-2eaf19bd1209",
      name: "Install project dependencies",
      type: BuildActivityType.Spinner,
      message: null,
      status: BuildActivityStatus.Success,
      statusText: null,
      duration: 39.207,
      current: null,
      total: null,
      __typename: "BuildActivity",
    },
  },

  {
    id: "34d1d546-125b-4717-a165-24c91c5ee26f",
    message:
      "There are conflicting field types in your data.\n\nIf you have explicitly defined a type for those fields, you can safely ignore this warning message.\nOtherwise, Gatsby will omit those fields from the GraphQL schema.\n\nIf you know all field types in advance, the best strategy is to explicitly define them with the `createTypes` action, and skip inference with the `@dontInfer` directive.\nSee https://www.gatsbyjs.org/docs/actions/#createTypes",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Warning,
    __typename: "StructuredLog",
    activity: null,
  },

  {
    id: "2125285e-0c98-4c1d-980c-ce51abe317fc",
    message: "Downloading remote files",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Info,
    __typename: "StructuredLog",
    activity: {
      id: "2125285e-0c98-4c1d-980c-ce51abe317fc",
      name: "Downloading remote files",
      type: BuildActivityType.Progress,
      message: null,
      status: BuildActivityStatus.Success,
      statusText: "",
      duration: 4.10931195,
      current: 101,
      total: null,
      __typename: "BuildActivity",
    },
  },

  {
    id: "ee27ac2a-8717-4c48-87c9-ca10feec226e",
    message: "Downloading remote files",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Info,
    __typename: "StructuredLog",
    activity: {
      id: "ee27ac2a-8717-4c48-87c9-ca10feec226e",
      name: "Downloading remote files",
      type: BuildActivityType.Progress,
      message: null,
      status: BuildActivityStatus.InProgress,
      statusText: "",
      duration: 4.65197033,
      current: 86,
      total: 123,
      __typename: "BuildActivity",
    },
  },

  {
    id: "8af6d60d-ffb4-46b7-9fa5-c22ca0810748",
    message:
      'The GraphQL query in the non-page component "/usr/src/app/www/cloud/gatsbyjs.com/src/templates/get-started/index.js" will not be run.',
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Warning,
    __typename: "StructuredLog",
    activity: null,
  },

  {
    id: "4edfe115-b52e-4dc1-a09b-a7e8bd7de064",
    message:
      'Query takes too long:\nFile path: /usr/src/app/www/cloud/gatsbyjs.com/src/templates/starters/details.js\nURL path: /starters/surudhb/gatsby-personal-site-template\nContext: {\n    "id": "cG9zdDoyMDU3NQ=="\n}',
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Warning,
    __typename: "StructuredLog",
    activity: null,
  },

  {
    id: "e68808e9-7197-48e2-9c21-0e55330b40af",
    message:
      "gatsby-plugin-feed was initialized in gatsby-config.js without a feeds option.\nThis means that the plugin will use the internal RSS feed creation, which may not match your use case.\nThis behavior will be removed in the next major release of gatsby-plugin-feed.\nFor more info, check out: https://gatsby.dev/adding-rss-feed",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Warning,
    __typename: "StructuredLog",
    activity: null,
  },

  {
    id: "275470bb-a0d8-4581-bec0-4bc0d648caf9",
    message: "createSchemaCustomization",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Info,
    __typename: "StructuredLog",
    activity: {
      id: "275470bb-a0d8-4581-bec0-4bc0d648caf9",
      name: "createSchemaCustomization",
      type: BuildActivityType.Spinner,
      message: null,
      status: BuildActivityStatus.Success,
      statusText: "",
      duration: 0.110791476,
      current: null,
      total: null,
      __typename: "BuildActivity",
    },
  },

  {
    id: "7e17cfe6-cbeb-48bb-8782-b05851710b6a",
    message: "source and transform nodes",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Info,
    __typename: "StructuredLog",
    activity: {
      id: "7e17cfe6-cbeb-48bb-8782-b05851710b6a",
      name: "source and transform nodes",
      type: BuildActivityType.Spinner,
      message: null,
      status: BuildActivityStatus.Success,
      statusText: "",
      duration: 139.989050738,
      current: null,
      total: null,
      __typename: "BuildActivity",
    },
  },

  {
    id: "c52bfe84-322a-4f82-a04d-8a209a64143c",
    message: "createPages",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Info,
    __typename: "StructuredLog",
    activity: {
      id: "c52bfe84-322a-4f82-a04d-8a209a64143c",
      name: "createPages",
      type: BuildActivityType.Spinner,
      message: null,
      status: BuildActivityStatus.Success,
      statusText: "",
      duration: 5.805308273,
      current: null,
      total: null,
      __typename: "BuildActivity",
    },
  },

  {
    id: "32d47075-c836-4343-9d9f-dc878da94a0e",
    message:
      'There was an error in your GraphQL query:\n\nVariable "$slug" is never used in operation "BlogPostBySlug".\n\nGraphQL request:2:24\n1 |\n2 |   query BlogPostBySlug($slug: String!) {\n  |                        ^\n3 |     site {',
    code: "85901",
    type: "GRAPHQL",
    filePath: "/usr/src/app/www/src/templates/blog-post.js",
    docsUrl: "https://gatsby.dev/issue-how-to",
    context: {
      sourceMessage:
        'Variable "$slug" is never used in operation "BlogPostBySlug".\n\nGraphQL request:2:24\n1 |\n2 |   query BlogPostBySlug($slug: String!) {\n  |                        ^\n3 |     site {',
    },
    level: StructuredLogLevel.Error,
    __typename: "StructuredLog",
    activity: null,
  },

  {
    id: "4d8ceedb-267a-4cea-8332-d0beb67151cb",
    message: "Deploying Build to Netlify",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Info,
    __typename: "StructuredLog",
    activity: {
      id: "4d8ceedb-267a-4cea-8332-d0beb67151cb",
      name: "Deploying Build to Netlify",
      type: BuildActivityType.Spinner,
      message: null,
      status: BuildActivityStatus.InProgress,
      statusText: null,
      duration: null,
      current: null,
      total: null,
      __typename: "BuildActivity",
    },
  },

  {
    id: "dfd04941-2641-4eca-b503-590faced43d4",
    message: "extract queries from components",
    code: null,
    type: null,
    filePath: null,
    docsUrl: null,
    context: null,
    level: StructuredLogLevel.Info,
    __typename: "StructuredLog",
    activity: {
      id: "dfd04941-2641-4eca-b503-590faced43d4",
      name: "query-extraction",
      type: BuildActivityType.Spinner,
      message: null,
      status: BuildActivityStatus.Failed,
      statusText: "",
      duration: 0.297634156,
      current: null,
      total: null,
      __typename: "BuildActivity",
    },
  },

  {
    id: "a0bea5a1-3e02-4c2a-b378-9b563ff72e8f",
    name: "Building static HTML for pages",
    type: BuildActivityType.Spinner,
    message: null,
    status: BuildActivityStatus.Failed,
    statusText: "",
    duration: null,
    current: null,
    total: null,
    __typename: "BuildActivity",
  },
]

export const Basic = () => (
  <div>
    <BuildLogsList logItems={ALL_INCLUSIVE} aria-label="Logs list" />
  </div>
)

export const SingleLogEntrySandbox = () => {
  const message = text("message", "Downloading remote files")
  const level = select("level", StructuredLogLevel, StructuredLogLevel.Info)

  return (
    <React.Fragment>
      <div>
        <Heading>Standard</Heading>
        <BuildStandardLogEntry
          message={message}
          level={level}
          context={{
            stageLabel: text("context.stageLabel", ""),
          }}
          filePath={text("filePath", "/")}
        />
      </div>

      <div>
        <Heading>With activity</Heading>
        <BuildActivityEntry
          id="bf9b0327-6bfd-4187-a046-d07dee8b56b5"
          message={message}
          level={level}
          activity={{
            id: "bf9b0327-6bfd-4187-a046-d07dee8b56b5",
            name: text("activity.name", "Downloading remote files"),
            type: select(
              "activity.type",
              BuildActivityType,
              BuildActivityType.Progress
            ),
            status: select(
              "activity.status",
              BuildActivityStatus,
              BuildActivityStatus.InProgress
            ),
            duration: number("activity.duration", 4.179441338),
            current: number("activity.current", 101),
            total: number("activity.total", 256),
          }}
        />
      </div>
    </React.Fragment>
  )
}

SingleLogEntrySandbox.story = {
  decorators: [withVariationsContainer],
  parameters: {
    chromatic: { disable: true },
  },
}
