import { useFormik } from "formik";
import * as Yup from "yup";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";

const options = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];

const multiOptions = [
  { value: "1", text: "Option 1", selected: false },
  { value: "2", text: "Option 2", selected: false },
  { value: "3", text: "Option 3", selected: false },
  { value: "4", text: "Option 4", selected: false },
  { value: "5", text: "Option 5", selected: false },
];

const validationSchema = Yup.object().shape({
  select: Yup.string().required("Select input is required"),
  multiSelect: Yup.array().min(1, "Select at least one option"),
});

export default function SelectInputsFormik() {
  const formik = useFormik({
    initialValues: {
      select: "",
      multiSelect: ["1", "3"],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
  });

  return (
    <ComponentCard title="Select Inputs with Formik">
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <Label>Select Input</Label>
          <Select
            options={options}
            placeholder="Select Option"
            value={formik.values.select}
            onChange={(value) => formik.setFieldValue("select", value)}
            className="dark:bg-dark-900"
          />
          {formik.touched.select && formik.errors.select && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.select}</p>
          )}
        </div>

        <div>
          <MultiSelect
            label="Multiple Select Options"
            options={multiOptions}
            defaultSelected={formik.values.multiSelect}
            onChange={(values) => formik.setFieldValue("multiSelect", values)}
          />
          {formik.touched.multiSelect && formik.errors.multiSelect && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.multiSelect}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </ComponentCard>
  );
}