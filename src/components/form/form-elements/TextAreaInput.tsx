import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import ComponentCard from "../../common/ComponentCard";
import TextArea from "../input/TextArea";
import Label from "../Label";

export default function TextAreaInput() {
  return (
    <ComponentCard title="Textarea input field">
      <Formik
        initialValues={{
          message: "",
          messageTwo: "",
        }}
        validationSchema={Yup.object({
          messageTwo: Yup.string().required("Please enter a valid message."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form className="space-y-6">
            {/* Default TextArea */}
            <div>
              <Label>Description</Label>
              <TextArea
                name="message"
                rows={6}
                value={values.message}
                onChange={(value) => handleChange({ target: { name: "message", value } })}
              />
            </div>

            {/* Disabled TextArea */}
            <div>
              <Label>Description</Label>
              <TextArea name="disabledMessage" rows={6} disabled />
            </div>

            {/* Error TextArea */}
            <div>
              <Label>Description</Label>
              <TextArea
                name="messageTwo"
                rows={6}
                value={values.messageTwo}
                onChange={(value) => handleChange({ target: { name: "messageTwo", value } })}
                error={touched.messageTwo && !!errors.messageTwo}
                hint={touched.messageTwo ? errors.messageTwo : ""}
              />
              <ErrorMessage
                name="messageTwo"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>
          </Form>
        )}
      </Formik>
    </ComponentCard>
  );
}