import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export const TableExample = (props) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Title</TableCell>
						<TableCell align="right">Category</TableCell>
						<TableCell align="right">Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.data.map((row) => (
						<TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" scope="row">
								{row.title}
							</TableCell>
							<TableCell align="right">{row.category}</TableCell>
							<TableCell align="right">
								<IconButton aria-label="edit" onClick={() => props.edit(row.id)}>
									<EditIcon/>
								</IconButton>
								<IconButton aria-label="delete" onClick={() => props.delete(row)}>
									<DeleteIcon/>
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
