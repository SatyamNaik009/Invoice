package com.invoice.backend.services;

import com.invoice.backend.dao.InvoiceDao;
import com.invoice.backend.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class InvoiceserviceImpl implements InvoiceService{

    @Autowired   //as it is interface
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice){
        invoiceDao.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices(){
        return invoiceDao.findAll();
    }

    @Override
    public Invoice deleteInvoice(long id){
        Invoice invoice=invoiceDao.findById(id).get();
        invoiceDao.delete(invoice);
        return invoice;
    }

}
