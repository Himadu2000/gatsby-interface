import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"
import { MdRefresh } from "react-icons/md"
import { Link } from "gatsby"

const SkeletonStyledContainer = styled(`div`)``
const SkeletonStyledInput = styled(`input`)``
const SkeletonStyledLabel = styled(`label`)``

export const radioPropTypes = {
  label: PropTypes.string,
  htmlLabel: PropTypes.any,
  fieldName: PropTypes.string.isRequired,
  id: PropTypes.string,
  optionValue: PropTypes.any,
  value: PropTypes.any.isRequired,
}

export const radioSkeletonPropTypes = {
  ...radioPropTypes,
  StyledContainer: PropTypes.any,
  StyledInput: PropTypes.any,
  StyledLabel: PropTypes.any,
}

const radioSkeletonDefaultPropTypes = {
  StyledContainer: ({ children }) => <div>{children}</div>,
  StyledInput: SkeletonStyledInput,
  StyledLabel: SkeletonStyledLabel,
}

export function RadioSkeleton({
  StyledContainer,
  StyledInput,
  StyledLabel,
  label,
  htmlLabel,
  fieldName,
  id,
  optionValue,
  value,
  className,
  children,
  onChange,
  ...rest
}) {
  return (
    <StyledContainer
      className={`${optionValue === value ? `selected` : ``} ${className}`}
    >
      <StyledInput
        type="radio"
        name={fieldName}
        id={id}
        value={optionValue}
        checked={optionValue === value}
        onChange={onChange}
        {...rest}
      />
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      {htmlLabel && (
        <StyledLabel
          htmlFor={id}
          dangerouslySetInnerHTML={{ __html: htmlLabel }}
        />
      )}
      {children}
    </StyledContainer>
  )
}

RadioSkeleton.propTypes = radioSkeletonPropTypes
RadioSkeleton.defaultProps = radioSkeletonDefaultPropTypes

export default RadioSkeleton
