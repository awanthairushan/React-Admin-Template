import { useFormik } from "formik";
import * as Yup from "yup";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { EnvelopeIcon } from "../../../icons";
import PhoneInput from "../group-input/PhoneInput";

export default function InputGroup() {
  const countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  const handlePhoneNumberChange = (phoneNumber: string) => {
    formik.setFieldValue("phone", phoneNumber);
  };

  return (
    <ComponentCard title="Input Group">
      <div className="space-y-6">
        {/* Email Field */}
        <div>
          <Label>Email</Label>
          <div className="relative">
            <Input
              name="email"
              type="text"
              placeholder="info@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="pl-[62px]"
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <EnvelopeIcon className="size-6" />
            </span>
            {formik.touched.email && formik.errors.email && (
              <p className="text-error-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone Field (Start) */}
        <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+1 (555) 000-0000"
            onChange={handlePhoneNumberChange}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-error-500 text-xs mt-1">{formik.errors.phone}</p>
          )}
        </div>

        {/* Phone Field (End) */}
        <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="end"
            countries={countries}
            placeholder="+1 (555) 000-0000"
            onChange={handlePhoneNumberChange}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-error-500 text-xs mt-1">{formik.errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            onClick={formik.submitForm}
            className="px-6 py-2 text-white bg-blue-500 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </ComponentCard>
  );
}