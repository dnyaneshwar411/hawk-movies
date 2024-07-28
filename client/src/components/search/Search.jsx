import SearchLayout from "./SearchLayout";
import { SearchProvider } from "../../providers/SearchProvider";
import Modal from "../common/Modal";

export default function SearchContextWrapper() {
  return (
    <SearchProvider>
      <Modal>
        <SearchLayout />
      </Modal>
    </SearchProvider>
  )
};