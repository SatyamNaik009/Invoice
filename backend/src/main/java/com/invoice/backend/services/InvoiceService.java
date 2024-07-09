package com.invoice.backend.services;

import com.invoice.backend.model.Invoice;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface InvoiceService {

    Invoice addInvoice(Invoice invoice);
    List<Invoice> getInvoices();
    Invoice deleteInvoice(long id);
}
