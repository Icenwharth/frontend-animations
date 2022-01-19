//components
import { CancelIcon } from "../../assets/svgs/cancelIcon";

//styles
import { InputField, ResetSearch } from "./styles";

export default function Search({ searchQuery, setSearchQuery, placeholder }) {
  return (
    <>
      <InputField
        value={searchQuery}
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder={placeholder}
        type="text"
      />
      <ResetSearch onClick={() => setSearchQuery("")}>
        <CancelIcon />
      </ResetSearch>
    </>
  );
}
