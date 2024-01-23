import styled from "styled-components";
import React, { useState } from "react";
import Typography  from '../../themes/Typography';

const { H5 } = Typography;

const StyledCard = styled.div`
    display: "flex";
    width: 100%;
    border-radius: 15px;
    border: ${(props) => `1px solid ${(props?.theme?.colors?.secondary ? props.theme.colors.secondary : "black")}`};
    color: ${(props) => (props?.theme?.colors?.text ? props.theme.colors.text : "black")};
    background-color: ${(props) => (props?.theme?.colors?.background ? props.theme.colors.background : "white") };
`;

export type CardProps = {
    open?: boolean;
    enabled?: boolean;
    collapsable?: boolean;
    title?: string;
    content?: string;
};

const Card: React.FC<CardProps> = ({
  open,
  enabled,
  collapsable,
  title,
  content,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledCard
        {...props}
    >
        <div>
                <div>
                  <div>
                    <H5>{title}</H5>
                    <button type="button" onClick={handleFilterOpening}>
                      {!isOpen ? (
                        "Down"
                      ) : (
                        "Up"
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <div>{isOpen && <div>{content}</div>}</div>
                </div>
              </div>
    </StyledCard>
  );
};

export default Card;

