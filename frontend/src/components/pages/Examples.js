// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { PostTable } from "../libs/table";
// import { CustomTabPanel, a11yProps } from "../libs/tabs";
// import Layout from "./Layout";

// function Examples() {
// 	const [tab, setTab] = useState(0);
// 	const [data, setData] = useState([]);
// 	const [isLoading, setIsLoading] = useState(true);

// 	const navigate = useNavigate();

// 	const fetchData = async () => {
// 		try {
// 			const res = await axios.get("http://localhost:8000/article/10/0");
// 			setData(res.data);
// 		} catch (err) {
// 			console.error(err);
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};

// 	useEffect(() => {
// 		if (!data.length) fetchData();
// 	});

// 	const handleTabChange = (event, newValue) => {
// 		setTab(newValue);
// 	};

// 	const createTableData = (source, filter) => {
// 		const filteredSource = source.filter((s) => s.status === filter);
// 		return filteredSource.map((s) => ({ title: s.title, category: s.category, content: s.content, status: s.status, id: s.id }));
// 	};

// 	const handleActionDelete = async (item) => {
// 		const { id, title, content, category } = item;
// 		try {
// 			await axios.patch(`http://localhost:8000/article/${id}`, { title, content, category, status: "thrash" });
// 		} catch (err) {
// 			console.error(err);
// 		}
// 		fetchData();
// 	};

// 	const handleActionEdit = (id) => {
// 		navigate(`/edit/${id}`);
// 	};

// 	return (
// 		<Layout title="All Posts" isLoading={isLoading}>
// 			<Box display={"flex"} justifyContent={"end"}>
// 				<Button type="button" variant="contained" onClick={() => navigate("/add")}>
// 					Add Post
// 				</Button>
// 			</Box>
// 			<Box sx={{ width: "100%" }}>
// 				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
// 					<Tabs value={tab} onChange={handleTabChange} aria-label="post option">
// 						<Tab label="Published" {...a11yProps(0)} />
// 						<Tab label="Drafts" {...a11yProps(1)} />
// 						<Tab label="Thrashed" {...a11yProps(2)} />
// 					</Tabs>
// 				</Box>
// 				<CustomTabPanel value={tab} index={0}>
// 					<PostTable data={createTableData(data, "publish")} delete={handleActionDelete} edit={handleActionEdit} />
// 				</CustomTabPanel>
// 				<CustomTabPanel value={tab} index={1}>
// 					<PostTable data={createTableData(data, "draft")} delete={handleActionDelete} edit={handleActionEdit} />
// 				</CustomTabPanel>
// 				<CustomTabPanel value={tab} index={2}>
// 					<PostTable data={createTableData(data, "thrash")} delete={handleActionDelete} edit={handleActionEdit} />
// 				</CustomTabPanel>
// 			</Box>
// 		</Layout>
// 	);
// }

// export default Examples;
