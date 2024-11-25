import { borderRadius, fontSize, width } from "@mui/system"
import Chip from "../../../Components/Chip"

const SizeChips = ({ label, selected, onClick }) => {
    return (
        <Chip label={label} selected={selected} onClick={onClick} />
    )
}

export default SizeChips