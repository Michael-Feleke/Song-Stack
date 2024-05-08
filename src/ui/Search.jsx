import styled from "@emotion/styled";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsByName } from "../features/Song/songSlice";

const FormContainer = styled.form`
  display: flex;
  padding: 0 10rem 0 2rem;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0 5rem 0 2rem;
  }
  @media (max-width: 400px) {
    padding: 0 2rem 0 0;
    margin-left: 2rem;
    align-items: flex-start;
  }
  @media (max-width: 360px) {
    padding: 0 1rem 0 0;
    margin-left: 0;
  }
`;

const InputContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 300px;
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
  @media (max-width: 360px) {
    width: 40%;
  }
`;

const InputField = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--color-brand-600);
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  transition: border-color 0.3s ease;
  color: var(--color-grey-900);
  background-color: var(--color-grey-50);
  border-left: none;

  &:focus {
    outline: none;
    border-left: none;
  }
`;

const Div = styled.div`
  border: 1px solid var(--color-brand-600);
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-right: none;
  padding: 0.9rem;
  background-color: var(--color-grey-50);
  display: flex;
`;

function Search() {
  const [search, setSearch] = useState("");
  const { songs } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  function handleSearchInputChange(e) {
    const value = e.target.value;
    setSearch(value);
    dispatch(getSongsByName(value));
  }

  return (
    <FormContainer>
      <InputContainer>
        <Div>
          <HiSearch />
        </Div>
        <InputField
          type="text"
          value={search}
          onChange={handleSearchInputChange}
          placeholder="Search by song title..."
          required
        />
      </InputContainer>
    </FormContainer>
  );
}

export default Search;
