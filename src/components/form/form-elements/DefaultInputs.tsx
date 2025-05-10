import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import { EyeCloseIcon, EyeIcon, TimeIcon } from "../../../icons";
import DatePicker from "../date-picker.tsx";

const options = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];

const validationSchema = Yup.object({
  input: Yup.string().required("Input is required"),
  inputTwo: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  select: Yup.string().required("Please select an option"),
  date: Yup.number().nullable().typeError("Date is required").required("Date is required"),
  time: Yup.string().required("Time is required"),
  card: Yup.string().required("Card number is required"),
});

export default function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      input: "",
      inputTwo: "",
      password: "",
      select: "",
      date: null,
      time: "",
      card: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <ComponentCard title="Default Inputs">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="input">Input</Label>
          <Input
            id="input"
            name="input"
            value={formik.values.input}
            onChange={formik.handleChange}
            error={formik.touched.input && !!formik.errors.input}
            hint={formik.touched.input ? formik.errors.input : ""}
          />
        </div>

        <div>
          <Label htmlFor="inputTwo">Input with Placeholder</Label>
          <Input
            id="inputTwo"
            name="inputTwo"
            placeholder="info@gmail.com"
            value={formik.values.inputTwo}
            onChange={formik.handleChange}
            error={formik.touched.inputTwo && !!formik.errors.inputTwo}
            hint={formik.touched.inputTwo ? formik.errors.inputTwo : ""}
          />
        </div>

        <div>
          <Label>Select Input</Label>
          <Select
            options={options}
            placeholder="Select an option"
            value={formik.values.select}
            onChange={(value) => formik.setFieldValue("select", value)}
            className="dark:bg-dark-900"
          />
          {formik.touched.select && formik.errors.select && (
            <p className="text-error-500 text-xs mt-1.5">{formik.errors.select}</p>
          )}
        </div>

        <div>
          <Label>Password Input</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && !!formik.errors.password}
              hint={formik.touched.password ? formik.errors.password : ""}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showPassword ? (
                <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              ) : (
                <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              )}
            </button>
          </div>
        </div>

        <div>
          <DatePicker
            id="date-picker"
            label="Date Picker Input"
            placeholder="Select a date"
            value={formik.values.date}
            onChange={(date) => formik.setFieldValue("date", date)}
          />
          {formik.touched.date && formik.errors.date && (
            <p className="text-error-500 text-xs mt-1.5">{formik.errors.date}</p>
          )}
        </div>

        <div>
          <Label htmlFor="time">Time Picker Input</Label>
          <div className="relative">
            <Input
              type="time"
              id="time"
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              error={formik.touched.time && !!formik.errors.time}
              hint={formik.touched.time ? formik.errors.time : ""}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <TimeIcon className="size-6" />
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="card">Input with Payment</Label>
          <div className="relative">
            <Input
              type="text"
              id="card"
              name="card"
              placeholder="Card number"
              className="pl-[62px]"
              value={formik.values.card}
              onChange={formik.handleChange}
              error={formik.touched.card && !!formik.errors.card}
              hint={formik.touched.card ? formik.errors.card : ""}
            />
            <span className="absolute left-0 top-1/2 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800">
              {/* Your card icon SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6.25" cy="10" r="5.625" fill="#E80B26" />
                <circle cx="13.75" cy="10" r="5.625" fill="#F59D31" />
                <path
                  d="M10 14.1924C11.1508 13.1625 11.875 11.6657 11.875 9.99979C11.875 8.33383 11.1508 6.8371 10 5.80713C8.84918 6.8371 8.125 8.33383 8.125 9.99979C8.125 11.6657 8.84918 13.1625 10 14.1924Z"
                  fill="#FC6020"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700"
          >
            Submit
          </button>
        </div>
      </form>
    </ComponentCard>
  );
}
