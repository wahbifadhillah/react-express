import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./Layout";
function Preview() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState(2); // Items per page
	const [totalArticles, setTotalArticles] = useState(0);

	const fetchData = async (offset) => {
		try {
			// Menambahkan endpoint article/:limit/:offset/:status untuk mengatasi pagination
			const res = await axios.get(`http://localhost:8000/article/${limit}/${offset}/publish`);
			setData(res.data.data);
			setTotalArticles(res.data.total);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!data.length) {
			const offset = (currentPage - 1) * limit;
			fetchData(offset);
		}
	});

	const handlePaginationChange = (event, value) => {
		console.log(value);
		setCurrentPage(value);
		const offset = (value - 1) * limit;
		fetchData(offset);
	};

	return (
		<Layout title="Preview" isLoading={isLoading}>
			<Box>
				<Grid container spacing={3}>
					{data.map((post, id) => (
						<Grid item xs={6} key={id}>
							<Card>
								<CardContent>
									<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
										{post.category}
									</Typography>
									<Typography variant="h4" component="h2">
										{post.title}
									</Typography>
									<Typography variant="body1">{post.content}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
					<Grid item xs={12}>
						<Pagination count={parseInt(Math.ceil(totalArticles / limit))} page={currentPage} onChange={handlePaginationChange} />
					</Grid>
				</Grid>
			</Box>
		</Layout>
	);
}

export default Preview;
