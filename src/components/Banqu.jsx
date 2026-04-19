import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { All_Data } from "./context";
import Input from "./inputs";
import Popup from "./popout";

export default function Banqu({ t, i18n }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [input, setInput] = useState({
    name: "",
    age: "",
    Checke: false,
    Chooes: "",
    phone: "",
  });

  let disabled =
    !input.name ||
    !input.age ||
    !input.phone ||
    input.Chooes === "Select salary range" ||
    !input.Checke;
  function handleNameChange(value) {
    setInput({ ...input, name: value });
  }
  function handleAgeChange(value) {
    setInput({ ...input, age: value });
  }
  function handlePhoneChange(value) {
    const sanitized = value.replace(/\D/g, "").slice(0, 11);

    // // لو المستخدم لسه بيكتب أول 3 أرقام أو بيحذف
    // دي بتستخدم للتحقق من اول تلات ارقام لكي تكمل الرقم بشكل صحيح
    if (sanitized.length <= 3) {
      setInput({ ...input, phone: sanitized });
      return;
    }

    let num = ["010", "011", "012", "015"];
    num.forEach((n) => {
      if (sanitized.slice(0, 3) === n) {
        setInput({ ...input, phone: sanitized });
      }
    });
  }

  const [error, seterror] = useState([]);

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();

        let errormessages = [];

        if (input.name.length < 3)
          errormessages.push(t("Your name is not valid"));
        if (input.age < 18) errormessages.push(t("Your age is not valid"));
        if (!input.Chooes) errormessages.push(t("Please choose your salary"));
        if (input.phone.length < 10)
          errormessages.push(t("Your phone is not valid"));
        if (errormessages.length > 0) {
          seterror(errormessages);
          setOpen(true); // يظهر الـ popup مع الأخطاء
          return; // يمنع إعادة تعيين الفورم
        }

        // لو مفيش أخطاء
        seterror([]);
        setOpen(true); // ممكن تفتح popup بنجاح أو رسالة "تم الإرسال"
        setInput({ name: "", age: "", Checke: false, Chooes: "", phone: "" });
      }}
    >
      <h2 className="title" style={{ cursor: "pointer" }}>
        {t("Bank Employment Form 🏦")}
      </h2>
      <div className="input-group">
        <label htmlFor="name" style={{ cursor: "pointer" }}>
          {t("Full Name")}
        </label>
        {/*  eslint-disable-next-line */}
        <All_Data.Provider
          value={{
            type: "text",
            id: "name",
            variant: "outlined",
            value: input.name,
            Change: handleNameChange,
          }}
        >
          <Input />
        </All_Data.Provider>
      </div>

      <div className="input-group">
        <label htmlFor="age" style={{ cursor: "pointer" }}>
          {t("Age")}
        </label>
        {/*  eslint-disable-next-line */}
        <All_Data.Provider
          value={{
            type: "number",
            id: "age",
            variant: "outlined",
            value: input.age,
            Change: handleAgeChange,
          }}
        >
          <Input />
        </All_Data.Provider>
      </div>

      <div className="input-group">
        <label htmlFor="phone" style={{ cursor: "pointer" }}>
          {t("phone")}
        </label>
        {/*  eslint-disable-next-line */}
        <All_Data.Provider
          value={{
            type: "number",
            id: "phone",
            variant: "outlined",
            value: input.phone,
            Change: handlePhoneChange,
          }}
        >
          <Input />
        </All_Data.Provider>
      </div>

      <div className="input-group checkbox-group">
        <FormControlLabel
          control={
            <Checkbox
              id="Checke"
              checked={input.Checke}
              onChange={(e) => setInput({ ...input, Checke: e.target.checked })}
              color="success"
            />
          }
          label={t("Are you currently employed in the bank?")}
        />
      </div>

      <div className="input-group">
        <label htmlFor="Chooes" style={{ cursor: "pointer" }}>
          {t("Choose Your Salary")}
        </label>
        <select
          id="Chooes"
          value={input.Chooes}
          onChange={(e) => setInput({ ...input, Chooes: e.target.value })}
          className="select-box"
        >
          <option>{t("Select salary range")}</option>
          <option>{t("1000$ - 1500$")}</option>
          <option>{t("1500$ - 2000$")}</option>
          <option>{t("2000$ - 3000$")}</option>
          <option>{t("More than 3000$")}</option>
        </select>
      </div>

      <Button
        variant="contained"
        color="success"
        type="submit"
        fullWidth
        disabled={disabled}
      >
        {t("Submit")}
      </Button>
      <Popup open={open} handleClose={handleClose} error={error} />
    </form>
  );
}
