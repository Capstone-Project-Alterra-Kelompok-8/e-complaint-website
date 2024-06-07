import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Box,
  TablePagination,
  TextField,
  Paper,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const ListComplaint = () => {
  const [complaints, setComplaints] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get(
        "https://capstone-dev.mdrizki.my.id/api/v1/complaints?sort_by=id&sort_type=desc&limit=10&page=1",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_JWT}`,
          },
        }
      );
      console.log(response.data.data); // Logging data to console
      setComplaints(response.data.data);
      setFilteredComplaints(response.data.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = complaints.filter(
      (complaint) =>
        complaint.user.name.toLowerCase().includes(value) ||
        complaint.category.name.toLowerCase().includes(value) ||
        complaint.status.toLowerCase().includes(value) ||
        complaint.regency.name.toLowerCase().includes(value) ||
        complaint.type.toLowerCase().includes(value)
    );
    setFilteredComplaints(filtered);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  const handleOpen = (imagePath) => {
    setSelectedImage(
      `https://storage.googleapis.com/e-complaint-assets/${imagePath}`
    );
    setOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col items-center mb-4 text-right">
        <h1 className="text-3xl font-bold">Kelola Complaint</h1>
      </div>

      <Box p={2} sx={{ backgroundColor: "#E5E7EB" }}>
        <TextField
          variant="outlined"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            endAdornment: (
              <IconButton>
                <Search />
              </IconButton>
            ),
            sx: {
              width: "40%", // Menetapkan lebar input search menjadi 50%
              marginLeft: "auto", // Menempatkan input search di sebelah kanan
            },
          }}
          fullWidth
          margin="normal"
          className="font-poppins"
        />
        <TableContainer component={Paper} className="font-poppins">
          <Table>
            <TableHead>
              <TableRow className="bg-dark-5">
                <TableCell>No</TableCell>
                <TableCell>No. Aduan</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Lokasi</TableCell>
                <TableCell>Tipe</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredComplaints
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((complaint, index) => (
                  <TableRow key={complaint.id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{complaint.id}</TableCell>
                    <TableCell>
                      {complaint.files && complaint.files.length > 0 ? (
                        <img
                          src={`https://storage.googleapis.com/e-complaint-assets/${complaint.files[0].path}`}
                          alt="Complaint"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          onClick={() => handleOpen(complaint.files[0].path)}
                        />
                      ) : (
                        "No Image"
                      )}
                    </TableCell>
                    <TableCell>{complaint.regency.name}</TableCell>
                    <TableCell>{complaint.type}</TableCell>
                    <TableCell>{complaint.user.name}</TableCell>
                    <TableCell>{complaint.category.name}</TableCell>
                    <TableCell>{complaint.status}</TableCell>
                    <TableCell>
                      {format(new Date(complaint.updated_at), "d MMMM yyyy", {
                        locale: id,
                      })}
                    </TableCell>
                    <TableCell>
                      <Link
                        to={`/complaints/${complaint.id}`}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        Detail
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredComplaints.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className="font-poppins"
          />

          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={selectedImage}
                  alt="Complaint Detail"
                  style={{ maxWidth: "100%", maxHeight: "80vh" }}
                />
              </Box>
            </Fade>
          </Modal>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ListComplaint;
