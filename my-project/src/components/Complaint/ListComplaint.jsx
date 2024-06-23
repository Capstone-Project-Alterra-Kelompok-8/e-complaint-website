import { useState, useEffect } from "react";
import HeaderLayout from "../Header/HeaderLayout";
import SidebarLayout from "../Header/SidebarLayout";
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
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const ListComplaint = () => {
  const [complaints, setComplaints] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchComplaints();
  }, []);

  useEffect(() => {
    filterComplaints();
  }, [searchTerm, complaints, selectedCategory]);

  const fetchComplaints = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        "https://capstone-dev.mdrizki.my.id/api/v1/complaints",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComplaints(response.data.data);
      setFilteredComplaints(response.data.data);
      extractCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const extractCategories = (complaints) => {
    const uniqueCategories = [
      ...new Set(complaints.map((complaint) => complaint.category.name)),
    ];
    setCategories(uniqueCategories);
  };

  const filterComplaints = () => {
    const filtered = complaints.filter((complaint) => {
      const formattedDate = format(
        new Date(complaint.updated_at),
        "d MMMM yyyy",
        { locale: id }
      ).toLowerCase();
      return (
        (complaint.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          complaint.category.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          complaint.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          formattedDate.includes(searchTerm.toLowerCase()) ||
          complaint.regency.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          complaint.id
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          complaint.type.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "" ||
          complaint.category.name === selectedCategory)
      );
    });
    setFilteredComplaints(filtered);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

   const handleDetailClick = (complaintId) => {
     navigate(`/complaint-detail/${complaintId}`); // Navigate to complaint detail page with complaintId
   };

  return (
    <section className="flex w-full flex-col">
      <HeaderLayout />
      <SidebarLayout />
      <div className="lg:ml-80 py-3 px-2 min-h-[80dvh] overflow-y-auto">
        <main className="container mx-auto px-4 py-4">
          <section className="flex flex-col items-start mb-4 text-left">
            <h1 className="text-3xl font-bold">Kelola Complaint</h1>
          </section>

          <Box p={2} sx={{ backgroundColor: "#E5E7EB" }}>
            <div className="flex items-center justify-between mb-4">
              <TextField
                variant="outlined"
                placeholder="Kata kunci atau tracking ID"
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <Search />
                    </IconButton>
                  ),
                  sx: {
                    backgroundColor: "white",
                  },
                }}
                sx={{ flex: 1, marginRight: 0 }}
              />
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="category-select-label">Filter</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  label="Filter"
                  sx={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    backgroundColor: "white",
                  }}
                >
                  <MenuItem value="">
                    <em>Semua</em>
                  </MenuItem>
                  {categories.map((category, index) => (
                    <MenuItem key={index} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <TableContainer
              component={Paper}
              className="font-poppins"
              sx={{ backgroundColor: "#E5E7EB" }}
            >
              <Table>
                <TableHead>
                  <TableRow className="bg-main-color">
                    <TableCell align="center">No</TableCell>
                    <TableCell>No. Complaint</TableCell>
                    <TableCell align="center">Tanggal</TableCell>
                    <TableCell align="center">Lokasi</TableCell>
                    <TableCell align="center">Kategori</TableCell>
                    <TableCell align="center">Tipe</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Detail</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredComplaints
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((complaint, index) => (
                      <TableRow key={complaint.id}>
                        <TableCell align="center">
                          {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell>{complaint.id}</TableCell>
                        <TableCell align="center">
                          {format(
                            new Date(complaint.updated_at),
                            "d MMMM yyyy",
                            { locale: id }
                          )}
                        </TableCell>
                        <TableCell>{complaint.regency.name}</TableCell>
                        <TableCell align="center">
                          <span className="bg-light-4 px-3 py-2 rounded">
                            {complaint.category.name}
                          </span>
                        </TableCell>
                        <TableCell align="center">
                          <span className="bg-light-4 px-3 py-2 rounded">
                            {complaint.type}
                          </span>
                        </TableCell>
                        <TableCell align="center">
                          <span className="bg-light-4 px-3 py-2 rounded">
                            {complaint.status}
                          </span>
                        </TableCell>
                        <TableCell align="center">
                          <button
                            onClick={() => handleDetailClick(complaint.id)}
                            className="bg-info-3 text-white px-3 py-2 rounded"
                          >
                            Detail
                          </button>
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
            </TableContainer>
          </Box>
        </main>
      </div>
    </section>
  );
};

export default ListComplaint;
