import React from "react"

import { storiesOf } from "@storybook/react"

import FileUpload from "./FileUpload"
import { StoryUtils } from "../../utils/storybook"

// sample of data that filestack returns upon successful upload
const mockedFile = {
  filename: `corgi.jpg`,
  handle: `i2bdWIuCS6i0DNSqG0ih`,
  mimetype: `image/jpeg`,
  originalPath: `corgi.jpg`,
  size: 146993,
  source: `local_file_system`,
  url: `https://cdn.filestackcontent.com/i2bdWIuCS6i0DNSqG0ih`,
  uploadId: `K0T75S35q5b1iV4c`,
  originalFile: {
    name: `corgi.jpg`,
    type: `image/jpeg`,
    size: 146993,
  },
  status: `Stored`,
}

storiesOf(`File Upload`, module)
  .add(`Single File Upload`, () => (
    <StoryUtils.Container>
      {process.env.GATSBY_FILESTACK_API_KEY ||
      process.env.STORYBOOK_FILESTACK_API_KEY ? (
        <>
          <FileUpload name="file" setFieldValue={() => {}} />
          <hr />
          <FileUpload
            name="file"
            setFieldValue={() => {}}
            defaultFile={mockedFile}
          />
        </>
      ) : (
        <p>Please enter API key to render component</p>
      )}
    </StoryUtils.Container>
  ))
  .add(`Multi File Upload`, () => (
    <StoryUtils.Container>
      {process.env.GATSBY_FILESTACK_API_KEY ||
      process.env.STORYBOOK_FILESTACK_API_KEY ? (
        <>
          <FileUpload
            multi={true}
            name="file"
            setFieldValue={() => {}}
            fileTypes={[`image/jpeg`]}
          />
          <hr />
          <FileUpload
            multi={true}
            name="file"
            setFieldValue={() => {}}
            fileTypes={[`image/jpeg`]}
            defaultFile={mockedFile}
          />
        </>
      ) : (
        <p>Please enter API key to render component</p>
      )}
    </StoryUtils.Container>
  ))
  .add(`File Upload with Custom Components`, () => (
    <StoryUtils.Container>
      {process.env.GATSBY_FILESTACK_API_KEY ||
      process.env.STORYBOOK_FILESTACK_API_KEY ? (
        <>
          <FileUpload
            multi={false}
            name="file"
            setFieldValue={() => {}}
            fileTypes={[`image/jpeg`]}
            CustomButtonComponent={({ onPick }) => (
              <button type="button" onClick={onPick}>
                Custom Button
              </button>
            )}
            CustomPreviewComponent={({ file, index, removeFile }) => (
              <div>
                <span>{file.filename}</span>
                <button type="button" onClick={() => removeFile(index)}>
                  X
                </button>
              </div>
            )}
          />
          <hr />
          <FileUpload
            multi={false}
            name="file"
            setFieldValue={() => {}}
            fileTypes={[`image/jpeg`]}
            CustomButtonComponent={({ onPick }) => (
              <button type="button" onClick={onPick}>
                Custom Button
              </button>
            )}
            CustomPreviewComponent={({ file, index, removeFile }) => (
              <div>
                <span>{file.filename}</span>
                <button type="button" onClick={() => removeFile(index)}>
                  X
                </button>
              </div>
            )}
            defaultFile={mockedFile}
          />
        </>
      ) : (
        <p>Please enter API key to render component</p>
      )}
    </StoryUtils.Container>
  ))
