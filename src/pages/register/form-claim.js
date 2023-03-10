import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Clipboard } from "react-feather";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import BoxDesc from "../../components/boxLayout/BoxDesc";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import moment from "moment";
import { addDataInsurance } from "../../redux/reducer/actionHandleData";
import CardFormulir from "../../components/cards/cardFormulis";
import { id } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

export default function FormClaim() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataIns = useSelector((state) => state.dataInsurance);
  const [dataInsurance, setDataInsurance] = useState({
    namaPengemudi: "",
    warnaMobil: "",
    tanggalKejadian: null,
    tahunPembuatan: "",
    hubunganTangunggan: "",
    penyebabKecelakaan: "",
  });

  useEffect(() => {
    if (Object.entries(dataIns).length !== 0) {
      setDataInsurance({
        namaPengemudi: dataIns.namaPengemudi,
        warnaMobil: dataIns.warnaMobil,
        tanggalKejadian: dataIns.tanggalKejadian,
        tahunPembuatan: dataIns.tahunPembuatan,
        hubunganTangunggan: dataIns.hubunganTangunggan,
        penyebabKecelakaan: dataIns.penyebabKecelakaan,
      });
    }
  }, []);

  const handleInputChange = (e, index) => {
    if (index) {
      setDataInsurance((prev) => ({
        ...prev,
        [index]: e,
      }));
    } else {
      setDataInsurance((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <CardFormulir
          title="Formulir Klaim"
          bgColor="rgba(95, 82, 235, 0.1)"
          icon={<Clipboard fill="#fff" color="#5f52eb" />}
        />

        <Box
          className="color-primary"
          sx={{
            backgroundColor: "rgba(95, 82, 235, 0.1)",
            textAlign: "center",
            padding: "10px 0",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Registrasi Klaim: B 1234 EFG
          </Typography>
        </Box>

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
          <Box mb="10px">
            <BoxDesc title="Periode" content="1 Juni 2020 - 30 juni 2021" />
          </Box>
          <Box mb="10px">
            <BoxDesc title="Nilai Pertanggungan" content="Rp.120.000.000,-." />
          </Box>
          <Box mb="10px">
            <BoxDesc title="Buatan/Merk" content="Jepang/Honda" />
          </Box>
          <Box mb="10px">
            <BoxDesc title="Tahun Pembuatan" content="2019" />
          </Box>
          <Box mb="10px">
            <BoxDesc title="No. Rangka" content="MCM24000" />
          </Box>
        </Box>

        <Box component="form">
          <Box
            sx={{
              border: "1px solid #eee",
              borderRadius: "5px",
              display: "flex",
              padding: "10px 15px 30px",
              flexDirection: "column",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Nama Pengemudi"
              multiline
              maxRows={4}
              variant="standard"
              value={dataInsurance.namaPengemudi}
              sx={{ color: "#5f52eb", mb: "10px" }}
              placeholder="Masukan Nama Pengemudi"
              name="namaPengemudi"
              onChange={(e) => handleInputChange(e)}
              required
            />

            <FormControl
              variant="standard"
              sx={{ minWidth: 120, mb: "10px" }}
              required
            >
              <InputLabel id="demo-simple-select-standard-label">
                Lain-lain
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={dataInsurance.warnaMobil}
                name="warnaMobil"
                onChange={(e) => handleInputChange(e)}
                label="Lain-lain"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Merah">Merah</MenuItem>
                <MenuItem value="Hitam">Hitam</MenuItem>
                <MenuItem value="Putih">Putih</MenuItem>
                <MenuItem value="Lainnya">Lainnya</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={id}
            >
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="dd MMMM yyyy"
                value={
                  dataInsurance.tanggalKejadian
                    ? moment(dataInsurance.tanggalKejadian).locale("id")
                    : null
                }
                disableMaskedInput
                name="tanggalKejadian"
                onChange={(e) => handleInputChange(e, "tanggalKejadian")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tanggal dan Waktu Kejadian"
                    variant="standard"
                    sx={{ mb: "10px" }}
                    name="tanggalKejadian"
                    required
                  />
                )}
              />
            </LocalizationProvider>

            <FormControl
              variant="standard"
              sx={{ minWidth: 120, mb: "20px" }}
              required
            >
              <InputLabel id="demo-simple-select-standard-label">
                Lain-lain
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={dataInsurance.tahunPembuatan}
                name="tahunPembuatan"
                onChange={(e) => handleInputChange(e)}
                label="Lain-lain"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2008}>2008</MenuItem>
                <MenuItem value={2009}>2009</MenuItem>
                <MenuItem value={2011}>2011</MenuItem>
                <MenuItem value={2012}>2012</MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value="Lainnya">Lainnya</MenuItem>
              </Select>
            </FormControl>

            <Input
              placeholder="Silakan isi hubungan dengan tanggungan"
              sx={{ mb: "20px" }}
              value={dataInsurance.hubunganTangunggan}
              name="hubunganTangunggan"
              onChange={(e) => handleInputChange(e)}
              required
            />

            <Input
              placeholder="Silakan isi penyebab"
              multiline
              value={dataInsurance.penyebabKecelakaan}
              name="penyebabKecelakaan"
              onChange={(e) => handleInputChange(e)}
              required
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#0fba09",
              width: "100%",
              m: "20px 0",
              textTransform: "capitalize",
            }}
            disabled={Boolean(
              !dataInsurance.namaPengemudi ||
                !dataInsurance.warnaMobil ||
                !dataInsurance.tanggalKejadian ||
                !dataInsurance.tahunPembuatan ||
                !dataInsurance.hubunganTangunggan ||
                !dataInsurance.penyebabKecelakaan
            )}
            onClick={() => {
              dispatch(
                addDataInsurance({
                  dataInsurance: dataInsurance,
                })
              );
              navigate("/register/sim-stnk");
            }}
          >
            Simpan
          </Button>
        </Box>
      </Container>
    </>
  );
}
