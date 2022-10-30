import { useFormik } from "formik"
import * as Yup from "yup"

export const Home = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .required("search is required")
        .min(3, "search must be 3 characters"),
    }),
    validateOnChange: true,

    onSubmit(values, formikHelpers) {
      console.log(values)
      console.log(formikHelpers)
    },
  })

  return (
    <div className="flex flex-col justify-between items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex  justify-center items-center"
      >
        <input
          className="border-2 border-gray-300 p-2 rounded-lg m-2"
          type="text"
          name="search"
          placeholder="Search..."
          onChange={formik.handleChange}
        />

        <button
          className="bg-blue-400 hover:bg-blue-500 text-white p-1 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      {formik.touched.search && formik.errors.search ? (
        <div className="text-red-500">{formik.errors.search}</div>
      ) : null}
    </div>
  )
}
