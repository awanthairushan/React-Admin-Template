import { useFormik } from "formik";
import * as Yup from "yup";
import ComponentCard from "../../common/ComponentCard";
import Input from "../input/InputField";
import Label from "../Label";

export default function InputStates() {
  const formik = useFormik({
    initialValues: {
      email: "",
      emailTwo: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      emailTwo: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      // handle form submission
      console.log(values);
    },
  });

  return (
    <ComponentCard
      title="Input States"
      desc="Validation styles for error, success and disabled states on form controls."
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Error Input */}
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            onChange={formik.handleChange}
            name="email"
            placeholder="Enter your email"
            hint={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
        </div>

        {/* Success Input */}
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={formik.values.emailTwo}
            success={formik.touched.emailTwo && !formik.errors.emailTwo}
            onChange={formik.handleChange}
            name="emailTwo"
            placeholder="Enter your email"
            hint={
              formik.touched.emailTwo && formik.errors.emailTwo
                ? formik.errors.emailTwo
                : !formik.errors.emailTwo
                ? "This is a success message."
                : ""
            }
          />
        </div>

        {/* Disabled Input */}
        <div>
          <Label>Email</Label>
          <Input
            type="text"
            value="disabled@example.com"
            disabled={true}
            placeholder="Disabled email"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
