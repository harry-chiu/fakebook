import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import Divider from './Divider';
import useTooltip from '../../hooks/useTooltip';
import palette from '../../palette';

const showPopover = css`
  visibility: visible;
  z-index: 999;
  opacity: 1;
`;

const Container = styled.div`
  position: relative;
  display: inline;
`;

const PopoverContainer = styled.div`
  position: absolute;
  width: 320px;
  background: white;
  font-size: 12px;
  visibility: hidden;
  border-radius: 6px;
  padding: 8px 12px;
  box-shadow: 0px 0px 10px #999999;
  transition: 0.25s ease-in-out;
  opacity: 0;
  transform: translate(calc(-100% - 15px), calc(-50% - 8px));
  ${(props) => (props.open ? showPopover : '')}

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -9px;
    width: 0;
    height: 0;
    border-left: 9px solid #bebebe;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid white;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
`;

const PopoverContent = styled.div`
  color: ${palette.shared.tooltip.text};
  padding: 4px 0;
`;

const PopoverActions = styled.div`
  text-align: right;
  padding: 4px 0;
`;

const CloseButton = styled.a`
  cursor: pointer;
  padding: 4px 8px;
  border: 1px solid ${palette.shared.tooltip.button.border};
  border-radius: 2px;
  font-size: 12px;
  color: white;
  background: ${palette.shared.tooltip.button.background};

  &:hover {
    background: ${palette.shared.tooltip.button.hover.background};
  }
`;

const ChildrenWrapper = styled.div`
  cursor: pointer;
  color: ${palette.shared.tooltip.children.color};
`;

const Tooltip = ({ children, content }) => {
  const childrenRef = useRef();
  const [open, handleOpen, handleClose] = useTooltip(false, childrenRef);

  const stopPropagation = (event) => event.stopPropagation();

  return (
    <Container>
      <ChildrenWrapper ref={childrenRef} onClick={handleOpen}>
        {children}
      </ChildrenWrapper>
      <PopoverContainer open={open} onClick={stopPropagation}>
        <PopoverContent>{content}</PopoverContent>
        <Divider />
        <PopoverActions>
          <CloseButton type="" onClick={handleClose}>
            關閉
          </CloseButton>
        </PopoverActions>
      </PopoverContainer>
    </Container>
  );
};

export default Tooltip;
