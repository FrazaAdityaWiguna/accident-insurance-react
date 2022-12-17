import { Box, Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Clipboard } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BoxDesc from "../../components/boxLayout/BoxDesc";
import CardFormulir from "../../components/cards/cardFormulis";
import FieldUpload from "../../components/field/fieldUpload";
import BackHeader from "../../components/header/backHeader";
import { addDataImgs } from "../../redux/reducer/actionHandleData";

export default function FormSimStnk() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateImgs = useSelector((state) => state.dataImgs);
  const [dataImgs, setDataImgs] = useState({
    fotoSIM: null,
    fotoSTNK: null,
    fotoKTPTertanggung: null,
  });

  useEffect(() => {
    setDataImgs({
      fotoSIM: stateImgs?.fotoSIM,
      fotoSTNK: stateImgs?.fotoSTNK,
      fotoKTPTertanggung: stateImgs?.fotoKTPTertanggung,
    });
  }, []);

  return (
    <>
      <Container maxWidth="md">
        <BackHeader title="Registrasi Klaim" prevPage="/register/form-claim" />
        <CardFormulir
          title="Foto SIM & STNK"
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
        <Stack spacing={2} mb="20px">
          <FieldUpload
            title="Foto SIM"
            content="Upload Foto SIM"
            contentImg={dataImgs.fotoSIM}
            info="*Data pada SIM harus terlihat jelas"
            handleChange={(e) => {
              setDataImgs((prev) => ({ ...prev, fotoSIM: e }));
            }}
          />

          <FieldUpload
            title="Foto STNK"
            content="Upload Foto STNK"
            contentImg={dataImgs.fotoSTNK}
            info="*Data pada STNK harus terlihat jelas"
            handleChange={(e) =>
              setDataImgs((prev) => ({ ...prev, fotoSTNK: e }))
            }
          />

          <FieldUpload
            title="Foto KTP Tertanggung"
            content="Upload Foto KTP"
            contentImg={dataImgs.fotoKTPTertanggung}
            info="*Data pada KTP Tertanggung harus terlihat jelas"
            handleChange={(e) =>
              setDataImgs((prev) => ({ ...prev, fotoKTPTertanggung: e }))
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
                addDataImgs({
                  dataImgs: dataImgs,
                })
              );
              navigate("/register/kerusakan-kendaraan");
            }}
          >
            Simpan
          </Button>
        </Stack>
      </Container>
    </>
  );
}
