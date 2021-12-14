import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

const FlexDiv = styled(
  ({ justify, direction, alignItems, wrap, grow, flex, ...otherProps }) => (
    <div {...otherProps} />
  )
)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `};
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};
  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: ${wrap};
    `};
  ${({ grow }) =>
    grow &&
    css`
      flex-grow: ${grow};
    `};
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
`;

FlexDiv.displayName = "FlexDiv";

FlexDiv.defaultProps = {
  direction: "row",
};

FlexDiv.propTypes = {
  justify: PropTypes.oneOf(["center", "space-between", "flex-end"]),
  direction: PropTypes.oneOf(["row", "column"]).isRequired,
  alignItems: PropTypes.oneOf(["center", "baseline", "flex-end", "flex-start"]),
  wrap: PropTypes.oneOf(["wrap"]),
  grow: PropTypes.number,
  flex: PropTypes.string,
};

export default FlexDiv;
