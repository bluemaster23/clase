import puppeteer from "puppeteer"

export default async function generatePdf({url , content}){
    const browser  = await puppeteer.launch({
        headless: true, 
        defaultViewport:{
            width: 750,
            height: 500,
            deviceScaleFactor: 1,
            isMobile: true, 
            hasTouch: false,
            isLandscape: false
        }
    })
    const page = await browser.newPage();
    await page.setContent(content,{
        waitUntil: "networkidle0"
    });
    /*await page.goto(url,{
        waitUntil: "networkidle0"
    }) */
    await page.emulateMediaType("screen");
    const pdf = await page.pdf({
        format:"A4",
        printBackground: true, 
        margin: {
            left:"0.5cm",
            top: "2cm",
            right: '0.5cm',
            bottom:"2cm"
        },
        displayHeaderFooter: true,
        headerTemplate : `<div>esto es la cabezera</div>`
    });
    await browser.close();
    return pdf;
}