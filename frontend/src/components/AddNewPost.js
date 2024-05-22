import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import Layout from "./Layout";
function AddNewPost() {
	const navigate = useNavigate();
	const { id } = useParams();

	const formik = useFormik({
		initialValues: {
			title: "",
			content: "",
			category: "",
			status: "draft",
		},
		enableReinitialize: true,
		validationSchema: Yup.object({
			title: Yup.string().required("Title harus ada!").min(20, "Title minimal 20 karakter"),
			content: Yup.string().required("Content harus ada!").min(200, "Content minimal 200 karakter"),
			category: Yup.string().required("Category harus ada!").min(3, "Category minimal 3 karakter"),
		}),
		onSubmit: async (values) => {
			const { title, content, category, status } = values;
			try {
				await axios.post(`http://localhost:8000/article`, { title, content, category, status });
			} catch (err) {
				console.error(err);
			} finally {
				navigate("/");
			}
		},
	});

	const handleDraft = async () => {
		formik.setFieldValue("status", "draft");
		await formik.submitForm();
	};
	const handlePublish = async () => {
		formik.setFieldValue("status", "publish");
		await formik.submitForm();
	};

	const statusOptions = [
		{ value: "publish", label: "Published" },
		{ value: "draft", label: "Draft" },
		{ value: "thrash", label: "Thrash" },
	];
	return (
		<Layout title="Add New Post">
			<Box
				sx={{
					width: 500,
					maxWidth: "100%",
					p: 2,
				}}
			>
				<form onSubmit={formik.handleSubmit}>
					<Stack spacing={3}>
						<TextField
							label="Title"
							variant="outlined"
							error={formik.touched.title && Boolean(formik.errors.title)}
							helperText={formik.touched.title && formik.errors.title}
							inputProps={{ ...formik.getFieldProps("title") }}
						/>
						<TextField
							label="Content"
							multiline
							minRows={8}
							variant="outlined"
							error={formik.touched.content && Boolean(formik.errors.content)}
							helperText={formik.touched.content && formik.errors.content}
							inputProps={{ ...formik.getFieldProps("content") }}
						/>
						<TextField
							label="Category"
							variant="outlined"
							error={formik.touched.category && Boolean(formik.errors.category)}
							helperText={formik.touched.category && formik.errors.category}
							inputProps={{ ...formik.getFieldProps("category") }}
						/>
						<TextField
							label="Status"
							select
							disabled
							variant="outlined"
							error={formik.touched.status && Boolean(formik.errors.status)}
							helperText={formik.touched.status && formik.errors.status}
							inputProps={{ ...formik.getFieldProps("status") }}
						>
							{statusOptions.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<Stack spacing={3} direction={"row"}>
							<Button size="large" variant="contained" type="button" onClick={handlePublish}>
								Publish
							</Button>
							<Button size="large" variant="text" type="button" onClick={handleDraft}>
								Draft
							</Button>
						</Stack>
					</Stack>
				</form>
			</Box>
		</Layout>
	);
}

export default AddNewPost;
