import meses from "../constants/Meses";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const InputSearch = ({ option, setOption }) => {
  return (
    <>
      <FormControl required sx={{ m: 1, minWidth: 120 }} size={"small"}>
        <InputLabel>Seleccionar Mes</InputLabel>
        <Select
          value={option}
          label="Selecciones Mes"
          onChange={(event) => {
            setOption(event.target.value);
          }}
        >
          {meses.map((mes, index) => {
            return (
              <MenuItem value={mes.value} key={index}>
                {mes.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};
