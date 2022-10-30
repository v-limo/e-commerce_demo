import { useFormik } from "formik"

export const Home = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      console.log(values)
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
    </div>
  )
}
