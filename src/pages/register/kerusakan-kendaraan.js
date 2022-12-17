import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Clipboard, Edit3, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import BoxDesc from "../../components/boxLayout/BoxDesc";
import CardFormulir from "../../components/cards/cardFormulis";
import FieldUpload2 from "../../components/field/fieladUpload2";
import BackHeader from "../../components/header/backHeader";
import { addImgsAccidents } from "../../redux/reducer/actionHandleData";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function VehicleDamage() {
  const [dataImgsAccidents, setDataImgsAccidents] = useState([]);
  const dispatch = useDispatch();
  const stateImgsAccidents = useSelector((state) => state.dataImgsAccidents);

  useEffect(() => {
    setDataImgsAccidents(stateImgsAccidents);
  }, []);

  const handleDelete = (index) => {
    // Make a copy of the array in state
    let newArray = dataImgsAccidents.slice();

    // Remove the element at the specified index
    newArray.splice(index, index + 1);

    // Update the state with the new array
    setDataImgsAccidents(newArray);
  };

  const handleEdit = (index, newValue) => {
    // Make a copy of the array in state
    let newArray = dataImgsAccidents.slice();

    // Update the element at the specified index
    newArray[index].desc = newValue;

    // Update the state with the new array
    setDataImgsAccidents(newArray);
  };

  return (
    <>
      <Container maxWidth="md">
        <BackHeader title="Registrasi Klaim" prevPage="/register/sim-stnk" />
        <CardFormulir
          title="Klaim Kerusakan Kendaraan"
          bgColor="rgba(95, 82, 235, 0.1)"
          icon={<Clipboard fill="#fff" color="#5f52eb" />}
        />
        <Box
          sx={{
            border: "1px solid #eee",
            borderRadius: "5px",
            display: "flex",
            padding: "10px",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <Box mb="10px">
            <BoxDesc title="No. Polisi" content="B 1234 EFG" />
          </Box>
          <Box mb="10px">
            <BoxDesc title="Nama Tertanggung" content="Fajar Prihadi" />
          </Box>
          <Box mb="10px">
            <BoxDesc title="No. Polis" content="VCL2007001" />
          </Box>
        </Box>

        {dataImgsAccidents &&
          dataImgsAccidents.map((data, index) => (
            <Stack spacing={2} key={index} mt={2}>
              <Box sx={{ display: "flex" }}>
                <Edit3 color="#0fba09" />
                <Typography className="color-primary" ml={2}>
                  Foto Kerusakan {index + 1}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#eee",
                  borderRadius: "5px",
                  overflow: "hidden",
                  pr: { xs: 1, sm: 3 },
                }}
              >
                <Stack direction="row" alignItems="center">
                  <Zoom>
                    <img
                      src={data.dataImg}
                      alt={`Foto Kerusakan ${index + 1}`}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                      }}
                    />
                  </Zoom>
                  <Box ml={3} sx={{ color: "#8c8b8b" }}>
                    <Typography>{data.nameImg}</Typography>
                    <Typography>{data.sizeImg / 1000000} mb</Typography>
                  </Box>
                </Stack>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleDelete(index)}
                >
                  <Trash2
                    color="#5f52eb"
                    size={window.innerWidth < 560 ? 30 : 25}
                  />
                </Box>
              </Box>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Deskripsi Kerusakan"
                onChange={(e) => handleEdit(index, e.target.value)}
                value={dataImgsAccidents[index].desc}
              />
            </Stack>
          ))}

        <FieldUpload2
          handleChange={(e, data) =>
            setDataImgsAccidents((prev) => [
              ...prev,
              {
                nameImg: data.name,
                sizeImg: data.size,
                dataImg: e,
                desc: "",
              },
            ])
          }
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0fba09",
            width: "100%",
            m: "20px 0",
            textTransform: "capitalize",
          }}
          onClick={() => {
            dispatch(
              addImgsAccidents({
                dataImgsAccidents: dataImgsAccidents,
              })
            );
          }}
        >
          Simpan
        </Button>
      </Container>
    </>
  );
}
