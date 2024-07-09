import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import AddInvoice from "../components/AddInvoice";
import { Box, Typography, Button } from "@mui/material";
import { getAllInvoices, deleteInvoice } from "../services/api";
import Invoices from "../components/Invoices";

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllInvoices();
      setInvoices(response.data);
    };
    getData();
  }, [addInvoice]);

  const toggleInvoice = () => {
    setAddInvoice(true);
  };

  const removeInvoice = async (id) => {
    await deleteInvoice(id);
    const updatedInvoice = invoices.filter((invoice) => invoice.id != id);
    setInvoices(updatedInvoice);
  };

  return (
    <div>
      <Header />
      <Box style={{ margin: 20 }}>
        <Typography variant="h4">Pending Invoices</Typography>
        {!addInvoice && (
          <Button
            variant="contained"
            style={{ marginTop: 15 }}
            onClick={() => toggleInvoice()}
          >
            Add invoice
          </Button>
        )}
        {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
      </Box>
      <Box>
        <Invoices invoices={invoices} removeInvoice={removeInvoice} />
      </Box>
    </div>
  );
};

export default Home;
