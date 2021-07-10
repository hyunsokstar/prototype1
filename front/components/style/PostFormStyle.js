import styled from "styled-components";

export const TweetButtonWrapper = styled.div`
  display:flex;
  margin-top:10px;  
  margin-bottom:10px;
  justify-content:space-between;
`;

export const PostingButton = styled.button`
  width:140px;
  background-color: white;
  border-radius: 8px;
  &:hover {
    background-color: pink;
  }
`