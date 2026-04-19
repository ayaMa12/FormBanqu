import { Box, Modal, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function Popup({ open, handleClose, error, content }) {
  const { t, i18n } = useTranslation();
  let list_error = error.map((err) => <li>{t(err)}</li>);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  if (open) {
    return (
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              mb: 2,

              color: list_error.length > 0 ? "red" : "green",
            }}
          >
            {list_error.length > 0 ? list_error : t("Success")}
          </Typography>
          <Typography sx={{ mb: 3 }}>{content}</Typography>
          <Button variant="contained" color="success" onClick={handleClose}>
            {t("Close")}
          </Button>
          <Button
            onClick={() => toggleLang()}
            sx={{ ml: 2 }}
            variant="contained"
            color="primary"
          >
            {t("language")}
          </Button>
        </Box>
      </Modal>
    );
  }
  return null;
}
