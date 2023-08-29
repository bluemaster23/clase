import { getProductoModel } from "../models/producto.model.js";
import { getProductos } from "../services/apiEscuela.service.js";

import { PDFDocument }  from "pdf-lib";
import  fs from 'fs';
import generatePdf from "../services/pdf.service.js";

import html_to_pdf from "html-pdf-node";

export const getAll = async (req, res) =>{
    let data = await   getProductos(); 
    res.json({success: true, data: data ,   msg : 'get All'})
}



export async function getProducto (req, res){
    try {

       /* const html =  fs.readFileSync("./reports/generate.reports.html");
        let options = { format: 'A4' };

        let file = { content: html };
        const buffer = await html_to_pdf.generatePdf(file, options)
        .then(pdfBuffer =>  pdfBuffer);
        res.attachment(`pdf.pdf`);
        res.contentType("application/pdf");
        
        res.send(200,  Buffer.from(buffer)); */

        

        const pdfBuffer  = await generatePdf({
            url :'https://google.com',
            content: `<h1>hola como esta :)</h1>`
        });


        res.status(200)
        .set({
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Credentials": true,
            "Content-Type": 'application/pdf',
        })
        .end(pdfBuffer);

        /* res.attachment(`pdf.pdf`);
        res.contentType("application/pdf");
        
        res.send(200,  Buffer.from(pdfBuffer));  */

        return ;
            

        // PDF Creation
        const pdfDoc = await PDFDocument.create()
        const page = pdfDoc.addPage()
        page.drawText('aqui esta el pdf')
        
 
         
        const htmlTemplate = '<html><body><h1>Hello, PDF!</h1></body></html>'; // Replace with your HTML template
        const htmlContent = await pdfDoc.embedHtml(htmlTemplate);
        page.addFragment(htmlContent);
        const pdfBytes = await pdfDoc.save()
    /*
        // Create a new PDF document
        const pdfDoc = await PDFDocument.create()
    
        // Embed the HTML content into a new page
        const page = pdfDoc.addPage();
        const { width, height } = page.getSize();
       
        page.addFragment(htmlContent);
    
        // Generate the PDF bytes
        const pdfBytes = await pdfDoc.save(); */
    
        // Set the response headers
       /* res.setHeader('Content-Disposition', 'attachment; filename=test.pdf');
        res.setHeader('Content-Type', 'application/pdf');
        */
        res.attachment(`pdf.pdf`);
        res.contentType("application/pdf");
        
        res.send(200,  Buffer.from(pdfBytes));
        // res.end();
      } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF'); 
      }
   
}