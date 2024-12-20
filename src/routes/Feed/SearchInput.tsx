import styled from "@emotion/styled"
import React, { InputHTMLAttributes, ReactNode } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledWrapper>
      <div className="top">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/stickers/100/search.png"
          alt="search"
        />
        Search
      </div>
      <input
        className="mid"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
    </StyledWrapper>
  )
}

export default SearchInput

const StyledWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  > .top {
    display: flex;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    img {
      margin-right: 5px;
    }
  }
  > .mid {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 1rem;
    outline-style: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray4};
  }
`
